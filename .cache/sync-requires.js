const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/pages/404.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/pages/page-2.js"))),
  "component---src-templates-collection-index-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/templates/Collection/index.js"))),
  "component---src-templates-pages-index-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/templates/Pages/index.js"))),
  "component---src-templates-product-page-index-js": hot(preferDefault(require("/Users/baileylatimer/LocalSites/Clients/mental-health-millenial/src/templates/ProductPage/index.js")))
}

