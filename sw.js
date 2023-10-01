//service workers only get installeds once  in their live cycle 

self.addEventListener("intstall", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
        return cache.addAll(["./","./css/master.css","./images/logo.png"])
    })
  )
})

self.addEventListener("fetch", e => {
    console.log('Intercepting fetch request for: ${e.request.url}');
})