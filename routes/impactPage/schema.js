/* istanbul ignore file */

const Schema = {
  impactPage_detail: {
    custom: {
      options: (_value, { req }) => {
        if (!req.body.impactPage_detail) {
          req.body.impactPage_detail = []
        }
        return true
      },
    },
  },
}

module.exports = {
  Schema,
}
