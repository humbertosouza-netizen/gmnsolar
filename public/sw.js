const CACHE_NAME = 'gmnsolar-cache-v1';

// Recursos que serão cacheados imediatamente
const PRECACHE_URLS = [
  '/',
  '/offline',
  '/manifest.webmanifest',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/favicon.ico'
];

// Recursos que serão cacheados durante o uso
const RUNTIME_URLS = [
  '/sobre',
  '/servicos',
  '/projetos',
  '/contato',
  '/orcamento'
];

// Instala o service worker e faz o precache dos recursos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto para precache');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// Limpa caches antigos durante a ativação
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

// Estratégia de cache: Network First com fallback para cache
self.addEventListener('fetch', (event) => {
  // Ignora requisições não GET
  if (event.request.method !== 'GET') return;

  // Ignora requisições de analytics e outras que não devem ser cacheadas
  if (shouldNotCache(event.request)) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Armazena uma cópia da resposta no cache
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Se falhar, tenta buscar do cache
        return caches.match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            // Se não encontrar no cache, retorna a página offline
            if (event.request.mode === 'navigate') {
              return caches.match('/offline');
            }
            return new Response('', {
              status: 408,
              statusText: 'Request timed out'
            });
          });
      })
  );
});

// Função auxiliar para verificar se uma requisição deve ser cacheada
function shouldNotCache(request) {
  const urls = [
    'chrome-extension',
    'google-analytics',
    'facebook',
    'analytics'
  ];
  return urls.some(url => request.url.includes(url));
} 