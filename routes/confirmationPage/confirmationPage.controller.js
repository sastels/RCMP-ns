const { routeUtils } = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      const data = routeUtils.getViewData(req, {}).data
      const impactPageDetail = data.impactPage_detail
      if (impactPageDetail) {
        if (!Array.isArray(data.impactPage_detail)) {
          data.impactPage_detail = [data.impactPage_detail]
        }
      }
      res.render(name, routeUtils.getViewData(req, { data }))
    })
    .post(route.applySchema(Schema), route.doRedirect())
}
