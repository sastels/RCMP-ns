const { routeUtils } = require('./../../utils')
const { Schema } = require('./schema.js')

require('dotenv').config()
const MongoClient = require('mongodb').MongoClient

const dbName = process.env.COSMOSDB_NAME
const dbKey = process.env.COSMOSDB_KEY

console.log({ dbName, dbKey })

const cosmosDbConfigured = dbName && dbKey
if (!cosmosDbConfigured) {
  console.warn(
    'Warning: CosmosDB not configured. Data will not be saved to CosmosDB database. Please set the environment variables COSMOSDB_NAME and COSMOSDB_KEY',
  )
}

const url = `mongodb://${dbName}:${dbKey}@${dbName}.documents.azure.com:10255/mean-dev?ssl=true&sslverifycertificate=false`

const uploadData = data => {
  if (cosmosDbConfigured) {
    MongoClient.connect(url, function(err, db) {
      if (err) {
        console.warn(`ERROR in MongoClient.connect: ${err}`)
      } else {
        var dbo = db.db('cybercrime-ns')
        dbo.collection('reports').insertOne(data, function(err, result) {
          if (err) {
            console.log({ data })
            console.warn(`ERROR in insertOne: ${err}`)
          } else {
            db.close()
            console.log('Report saved to CosmosDB')
          }
        })
      }
    })
  } else {
    console.log('CosmosDB not configured')
  }
}

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      const data = routeUtils.getViewData(req, {})
      uploadData(data)
      res.render(name, routeUtils.getViewData(req, {}))
    })
    .post(route.applySchema(Schema), route.doRedirect())
}
