import('https://storage.googleis.com/workbox-cdn/releasesl6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
({Request}) => Request.destination === 'image',
new workbox.stratagies.networkFrist()
);
