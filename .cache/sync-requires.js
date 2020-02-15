const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sehbazrafik/Documents/GitHub/nawab-driving-school/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sehbazrafik/Documents/GitHub/nawab-driving-school/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sehbazrafik/Documents/GitHub/nawab-driving-school/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/sehbazrafik/Documents/GitHub/nawab-driving-school/src/pages/page-2.js"))),
  "component---src-pages-show-js": hot(preferDefault(require("/Users/sehbazrafik/Documents/GitHub/nawab-driving-school/src/pages/show.js"))),
  "component---src-pages-testroute-js": hot(preferDefault(require("/Users/sehbazrafik/Documents/GitHub/nawab-driving-school/src/pages/testroute.js")))
}

