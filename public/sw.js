/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-d85ce0155ba7589c83bd.js"
  },
  {
    "url": "framework-cd3e1e804d552fa282ef.js"
  },
  {
    "url": "styles.1e2395a1d45ff478e3a4.css"
  },
  {
    "url": "styles-e383b929d2d4095ae339.js"
  },
  {
    "url": "11100001-2675aa9204cb74cac143.js"
  },
  {
    "url": "app-7398e59e1d8e44da1ac6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "28901826822f71e1286a13d11782969c"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0556ce5127c1a3e2490.js"
  },
  {
    "url": "polyfill-3c1505fbb54c7a2685be.js"
  },
  {
    "url": "component---src-templates-product-page-index-js-f59309fbc19be35cfedf.js"
  },
  {
    "url": "84a0e2cbe485907ec3c510155ff002a476b587bc-0c7d0d4b676efe14116a.js"
  },
  {
    "url": "page-data/product/eva-sandals/page-data.json",
    "revision": "21b9f7c7086ee8e790ce931bd6decc76"
  },
  {
    "url": "page-data/sq/d/142939013.json",
    "revision": "516c6a12cee4c319abe1718d81a0a734"
  },
  {
    "url": "page-data/sq/d/3128451518.json",
    "revision": "4134f333cff126bd48ed65a9ec410eb2"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "6d830af402f0b85f3019b43db961cc0e"
  },
  {
    "url": "page-data/product/lw290/page-data.json",
    "revision": "4ed64976b850b8c13298e77d0a5a50d4"
  },
  {
    "url": "page-data/product/merino-tubers/page-data.json",
    "revision": "f5a721a7bdad5a728989cbd265a6120a"
  },
  {
    "url": "page-data/product/ultra-ultra-shorts/page-data.json",
    "revision": "6c6eea8493dfa09b1c025026886ce1f8"
  },
  {
    "url": "page-data/product/ultra-ultra-track-pants/page-data.json",
    "revision": "56c24ee1b85f2ff3cf5a674e1c523a02"
  },
  {
    "url": "page-data/product/ultrafine-merino-t-shirt/page-data.json",
    "revision": "8094e4881180a951dc803e1b54410e08"
  },
  {
    "url": "component---src-templates-collection-index-js-38f0df190586136197fb.js"
  },
  {
    "url": "page-data/collection/demo/page-data.json",
    "revision": "6843232e9d13179137de7f079435ea56"
  },
  {
    "url": "page-data/collection/frontpage/page-data.json",
    "revision": "1a3ad433ff43adbfc67a72bc6cfc2a78"
  },
  {
    "url": "component---src-pages-index-js-1f9ff15de5d5217e3708.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "67fc5c7bb4cd3b1508b37fa2f3a57594"
  },
  {
    "url": "page-data/sq/d/1941797601.json",
    "revision": "318f4cb0e14ff549d999e9bf2fd83044"
  },
  {
    "url": "page-data/sq/d/2250358007.json",
    "revision": "6835261e11043e740b95b423654e8cd3"
  },
  {
    "url": "page-data/sq/d/983265624.json",
    "revision": "b6a3e73bd7de786f11d9763d29199730"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "04895599f1ae7319c6fcebc7bf6a36e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-7398e59e1d8e44da1ac6.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
