// sw.js  (disable caching for now)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {
  // Network-first: always go to the network (no cache)
});
