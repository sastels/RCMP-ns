// 1) add your route(s) here ⬇️
const routes = [
  {
    name: 'landingPage',
    path: { en: '/landingPage', fr: '/landingPageFR' },
  },
  {
    name: 'timeFramePage',
    path: { en: '/timeFrame', fr: '/timeFrame' },
  },
  {
    name: 'whatHappenedPage',
    path: { en: '/whatHappened', fr: '/whatHappened' },
  },
  {
    name: 'scammerDetailsPage',
    path: { en: '/scammerDetails', fr: '/scammerDetails' },
  },
  {
    name: 'impactPage',
    path: { en: '/impact', fr: '/impact' },
  },
  {
    name: 'contactInfoPage',
    path: { en: '/contactInfo', fr: '/contactInfo' },
  },

  { name: 'start', path: { en: '/start', fr: '/debut' } },
  { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
  { name: 'confirmation', path: '/confirmation' },
]

const locales = ['en', 'fr']

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
  locales,
}
