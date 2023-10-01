//service workers only get installeds once  in their live cycle 

self.addEventListener("intstall", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
        return cache.addAll(["./","./css/master.css","./images/logo.png"])
    })
  )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        
        })
    )
})