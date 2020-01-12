const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mac pro 1/Desktop/Ghost - Gatsby Production Folder/ghost-gatsby-v2/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mac pro 1/Desktop/Ghost - Gatsby Production Folder/ghost-gatsby-v2/src/pages/404.js")))
}

