var CACHE_NAME = 'nodejsrs-cache-v1'
var urlsToCache = [
  '/'
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache is opened')
        cache.addAll(urlsToCache)
      })
  )
})

