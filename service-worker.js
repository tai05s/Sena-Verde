const CACHE_NAME = "sena-verde-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// instala o service worker e salva os arquivos no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ativa o service worker e remove caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// intercepta requisições e tenta usar o cache primeiro
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
