/* Minimal service worker: lets phones install the app to the home screen.
   It does not cache anything, so you always get the newest version. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
