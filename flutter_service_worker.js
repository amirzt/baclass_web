'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "447a85a149ef6fd34b233e0000130ba3",
"assets/AssetManifest.json": "19a57e8af1beee3eb1dab8aba812a348",
"assets/assets/fonts/Baloo2-Bold.ttf": "e6ea43c5e41884cff68110bb88dbdbab",
"assets/assets/fonts/Baloo2-Regular.ttf": "f8f89a31657b9ea44e160870759723a4",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/fonts/Kalameh(FaNum)-Bold.ttf": "41c48679881264b779ae639effab6c2c",
"assets/assets/fonts/Kalameh(FaNum)-Regular.ttf": "4a854c670da8973d948df10109aea302",
"assets/assets/icons/ai_button.png": "48ee516cf183d791204c64667dbaf007",
"assets/assets/icons/ai_loading.json": "7e0633a0f101385bea0d1800bba8da5b",
"assets/assets/icons/Baclass.json": "e579c4cdb2e4a70eecb853399a351d89",
"assets/assets/icons/coin.png": "a1318ab91d4a39ce633be6f997d13667",
"assets/assets/icons/coin2.png": "391e3f19b454082f93d1e595bd2222c8",
"assets/assets/icons/coins_pass.png": "64c1133d3a56b69a4f25c8a2738667d0",
"assets/assets/icons/data.json": "a152a08cc4cfa2917277af24a3276645",
"assets/assets/icons/ic_launcher_adaptive_back.png": "697d6197febd35ac58b1c8737daf8d74",
"assets/assets/icons/ic_launcher_adaptive_fore.png": "2898ed19cf1db1c0246c53ae3df0b7a8",
"assets/assets/icons/level_gold.png": "26dbcc8ad65f8e1de084aa3d032337c7",
"assets/assets/icons/level_silver.png": "184c3b74e54ae6f591aa54da0906c580",
"assets/assets/icons/lock.png": "5ecd9f1891a443f00734253e6cb7896c",
"assets/assets/icons/logo.png": "750ce72737fc2b612dc78c043dd6f3f5",
"assets/assets/icons/plus.png": "c8f77ed462ea224019b4e4da8ce1549c",
"assets/assets/icons/ranking.png": "e3c29262fc0d63d8d206ac1952250943",
"assets/assets/icons/reward_frame.png": "9da5a0fdbfc3881298b69f082409d29e",
"assets/assets/images/aib.png": "2cc87cfd00b15f9bd15768961a075f31",
"assets/assets/images/avatar.png": "af3e690cc36164d3454907b88cb89fc8",
"assets/assets/images/avatar2.png": "10666067ca8c0a0e59451499eb03d797",
"assets/assets/images/avatar3.png": "8b70a5dead4fa48ed21ff66851fd7bde",
"assets/assets/images/avatar4.png": "575b5f3b17273936681261e817696b56",
"assets/assets/images/avatar5.png": "a428b6159a554b2147cf12f93c1e6b2c",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/bot1.png": "7aa5580cbb409ec0a114910e3c0e12ed",
"assets/assets/images/chat_recieve.png": "e19447ce02377af9f103a4c71afef901",
"assets/assets/images/chat_send.png": "8b31f091cbaf75ae7f9d317168665e89",
"assets/assets/images/crown.png": "d0a228e1d98cc23c866cf5fb4cdae7f2",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/frame1.png": "55bb8756fde9e45dc9a512b7fe8b921d",
"assets/assets/images/phone.png": "5226b853858f980ec9ca54b792001080",
"assets/assets/images/progress.png": "c0484423d219dafbcb2704c4b68951b5",
"assets/assets/images/ranking.jpg": "5a4d1544ff65362339fa3682474a798a",
"assets/assets/images/send.png": "91572e31999f1c83c006f5037db02be3",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/translations/en-US.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/assets/translations/fa-IR.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/FontManifest.json": "594ff1a2436d3162e507a772680629a9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c2b1998d82872628deed22e898c4d706",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_date_picker_timeline/assets/fonts/dana.ttf": "00b0aa9472504e0d38d07188e17ea8cd",
"assets/packages/flutter_date_picker_timeline/assets/fonts/nunito.ttf": "d2e691bc4a2b696929172cb3d22ce8ba",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "4c9d551b2f568feeefa320e57a0d83fc",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "da6a55f713a56c43ddbea232df4926a5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "89e7a5192ac57cc4a99334142c80d546",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "e31ed7228148c4c3ef5d1b255637fc86",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "6f5918fd01450d5131fa5f59eec7c8b9",
"icons/Icon-512.png": "e2107720c07e47d1e27de9f8b32017d3",
"icons/Icon-maskable-192.png": "6f5918fd01450d5131fa5f59eec7c8b9",
"icons/Icon-maskable-512.png": "e2107720c07e47d1e27de9f8b32017d3",
"index.html": "e985d3c66776b919dd3d97007345062a",
"/": "e985d3c66776b919dd3d97007345062a",
"main.dart.js": "218356e1e0a4b82df1401c7cb18ca324",
"manifest.json": "8d4e1e5d57245969940d1061edb5d4f7",
"version.json": "09cc7b536b06ddbcb911ebc42aa2dd31"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
