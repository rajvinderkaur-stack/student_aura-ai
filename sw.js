self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('vernacular-app').then(cache => {
      return cache.addAll([
        'index.html',
        'sample.mp4'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
