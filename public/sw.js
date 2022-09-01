const CASHE_NAME = 'portfolio-cashe-v2';
const urlsToCache = ['/', '/favicon.ico', '/static/js/bundle.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CASHE_NAME).then((cache) => cache.addAll(urlsToCache)),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch((error) => caches.match(event.request)),
  );

  if (event.request.url.includes('/assets/img')) {
    caches.open(CASHE_NAME).then((cache) => cache.add(event.request));
  }
});

self.addEventListener('activate', (event) => {
  const cachesAllowList = [CASHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cachesAllowList.indexOf(cacheName) === -1) {
          return caches.delete(cacheName);
        }
      }),
    )),
  );
});
