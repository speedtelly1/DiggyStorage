// Версия кэша - меняй при обновлении сайта
const CACHE_NAME = 'hranilishe-v2.0.0';
const DYNAMIC_CACHE = 'hranilishe-dynamic-v1';

// Ресурсы для предварительного кэширования
const PRECACHE_URLS = [
  '/hranilishe.github.io/',
  '/hranilishe.github.io/index.html',
  '/hranilishe.github.io/style.css',
  '/hranilishe.github.io/script.js',
  '/hranilishe.github.io/privacy.html',
  '/hranilishe.github.io/terms.html',
  '/hranilishe.github.io/images/hranit.png',
  '/hranilishe.github.io/images/tim.png',
  '/hranilishe.github.io/images/taiprompts.png',
  '/hranilishe.github.io/images/sib.png',
  '/hranilishe.github.io/images/belyoene.png',
  '/hranilishe.github.io/images/hmm.png',
  '/hranilishe.github.io/images/alina.png',
  '/hranilishe.github.io/images/soon.png',
  '/hranilishe.github.io/images/cuby.png',
  '/hranilishe.github.io/images/iceberg.png',
  '/hranilishe.github.io/images/vashedinstveniydrug.png',
  '/hranilishe.github.io/images/autohe.png',
  '/hranilishe.github.io/images/crystalls.png',
  '/hranilishe.github.io/images/monika.jpg',
  '/hranilishe.github.io/images/1635762767173756678.jpg',
  '/hranilishe.github.io/images/ggtrends.jpg',
  '/hranilishe.github.io/images/max.jpg',
  '/hranilishe.github.io/images/itd.png',
  '/hranilishe.github.io/manifest.json',
  '/hranilishe.github.io/robots.txt',
  '/hranilishe.github.io/sitemap.xml',
  'https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;500;600;700&display=swap'
];

// Установка Service Worker
self.addEventListener('install', event => {
  console.log('🛠️ Service Worker: Установка...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Service Worker: Кэширование основных файлов');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('✅ Service Worker: Установка завершена');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ Service Worker: Ошибка при установке', error);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', event => {
  console.log('⚡ Service Worker: Активация...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Удаляем старые кэши
          if (cacheName !== CACHE_NAME && cacheName !== DYNAMIC_CACHE) {
            console.log('🗑️ Service Worker: Удаление старого кэша', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('✅ Service Worker: Активация завершена');
      return self.clients.claim();
    })
  );
});

// Стратегия: Network First с fallback на кэш
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    // Кэшируем успешные ответы
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Если сеть недоступна, пробуем кэш
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

// Стратегия: Cache First для статических ресурсов
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    // Кэшируем для будущего использования
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Можно вернуть кастомную офлайн-страницу
    return new Response('Офлайн режим', {
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Перехват запросов
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Для API запросов используем Network First
  if (url.pathname.includes('/api/') || url.search.includes('?article=')) {
    event.respondWith(networkFirst(event.request));
    return;
  }
  
  // Для статических файлов используем Cache First
  if (
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.json') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.includes('/images/')
  ) {
    event.respondWith(cacheFirst(event.request));
    return;
  }
  
  // Для всего остального - Network First
  event.respondWith(networkFirst(event.request));
});

// Фоновая синхронизация (если браузер поддерживает)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-articles') {
    console.log('🔄 Service Worker: Фоновая синхронизация');
    event.waitUntil(syncArticles());
  }
});

// Пуш-уведомления
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  
  const options = {
    body: data.body || 'Новое обновление в Хранилище',
    icon: '/hranilishe.github.io/images/hranit.png',
    badge: '/hranilishe.github.io/images/hranit.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/hranilishe.github.io/'
    },
    actions: [
      {
        action: 'open',
        title: 'Открыть'
      },
      {
        action: 'close',
        title: 'Закрыть'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Хранилище', options)
  );
});

// Клик по уведомлению
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});

// Помощник для синхронизации статей
async function syncArticles() {
  try {
    const db = await openArticlesDB();
    const offlineArticles = await getAllOfflineArticles(db);
    
    for (const article of offlineArticles) {
      await sendArticleToServer(article);
      await deleteOfflineArticle(db, article.id);
    }
    
    console.log('✅ Синхронизация статей завершена');
  } catch (error) {
    console.error('❌ Ошибка синхронизации:', error);
  }
}

// Офлайн база данных (IndexedDB)
function openArticlesDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('hranilishe-offline', 1);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('articles')) {
        const store = db.createObjectStore('articles', { keyPath: 'id' });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
    
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}

// Сообщение от главного потока
self.addEventListener('message', event => {
  if (event.data.type === 'CACHE_NEW_ARTICLE') {
    cacheNewArticle(event.data.article);
  }
  
  if (event.data.type === 'GET_CACHE_INFO') {
    getCacheInfo().then(info => {
      event.ports[0].postMessage(info);
    });
  }
});

// Кэширование новой статьи
async function cacheNewArticle(article) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const articleUrl = `/hranilishe.github.io/?article=${article.id}`;
    
    const response = new Response(JSON.stringify(article), {
      headers: { 'Content-Type': 'application/json' }
    });
    
    await cache.put(articleUrl, response);
    console.log('✅ Статья закэширована:', article.title);
  } catch (error) {
    console.error('❌ Ошибка кэширования статьи:', error);
  }
}

// Получение информации о кэше
async function getCacheInfo() {
  const cache = await caches.open(CACHE_NAME);
  const dynamicCache = await caches.open(DYNAMIC_CACHE);
  
  const staticKeys = await cache.keys();
  const dynamicKeys = await dynamicCache.keys();
  
  return {
    staticCacheSize: staticKeys.length,
    dynamicCacheSize: dynamicKeys.length,
    version: CACHE_NAME,
    lastUpdate: new Date().toISOString()
  };
}

// Периодическая синхронизация (раз в день)
async function periodicSync() {
  const now = Date.now();
  const lastSync = await getLastSyncTime();
  
  // Синхронизировать раз в день
  if (now - lastSync > 24 * 60 * 60 * 1000) {
    await syncArticles();
    await setLastSyncTime(now);
  }
}

// Утилиты для хранения времени синхронизации
async function getLastSyncTime() {
  const cache = await caches.open(CACHE_NAME);
  const response = await cache.match('/sync-time');
  
  if (response) {
    const text = await response.text();
    return parseInt(text, 10);
  }
  
  return 0;
}

async function setLastSyncTime(time) {
  const cache = await caches.open(CACHE_NAME);
  const response = new Response(time.toString());
  await cache.put('/sync-time', response);
}

// Запускаем периодическую синхронизацию при активации
self.addEventListener('activate', (event) => {
  event.waitUntil(periodicSync());
});
