// sw.js - Service Worker لتطبيق صفاء الروح
const CACHE_NAME = 'sabriFX-cache-v3';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://i.postimg.cc/zGSvxgCn/1775323811617.png',
    'https://i.postimg.cc/zvS6s80G/IMG-20260404-200653.jpg'
];

// مرحلة التثبيت
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('جاري تخزين الملفات...');
            return cache.addAll(ASSETS_TO_CACHE);
        }).catch(err => console.log('خطأ في التخزين:', err))
    );
    self.skipWaiting();
});

// مرحلة التنشيط
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// مرحلة جلب المحتوى
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResp) => {
                if(!fetchResp || fetchResp.status !== 200 || fetchResp.type !== 'basic') {
                    return fetchResp;
                }
                const respClone = fetchResp.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, respClone);
                });
                return fetchResp;
            }).catch(() => {
                return caches.match('./index.html');
            });
        })
    );
});
