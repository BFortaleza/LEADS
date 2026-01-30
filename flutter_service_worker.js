'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fb73be3e54ea160f216cd72a670f0b64",
".git/config": "338c93912c5f11dc077cd2d629da5b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3105136577a93174b823d4ea557f9270",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f693a4a18fbd9343f2f5a8cc792fac64",
".git/logs/refs/heads/main": "f693a4a18fbd9343f2f5a8cc792fac64",
".git/logs/refs/remotes/origin/main": "37fe069e5393d5ddb97a7f23f0189247",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/57e72968d6c86894bc60046628060d9c244995": "ff6b4f947194a0d9fb0c9a7f696a3c1e",
".git/objects/0e/ccb932465ed6553cb2f19a9a826649f6d41a31": "2dd356da2e6267793864097a1affee89",
".git/objects/11/f56ea9acfb5e3845a6c7ff2c1e894c038fc9fc": "a67c419d58baff6332e1062f58254e6e",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/2b/6d59ff460b45d6c2669cbe2fc0de6a783a068b": "22f4ce671c3695a8e4f553c0614da72c",
".git/objects/2f/bf6fe48f9255227d60ef595bddeaef57fd6acb": "d85b0ac676c544d10271f4299dbfb3f4",
".git/objects/30/f9b27fc9e19565c921b52c6f967db25f2912e0": "91fc0082cb8cbb995ea91e7637fc7e00",
".git/objects/33/685b0f3c0edf60a54556191794e62c24107433": "fdb44711ceceba02ab3d4531966cf7d5",
".git/objects/36/b8caa92f5557dc03c893a5278b0098a4362afb": "92bfb6361baa4b9838fa301a14111b77",
".git/objects/37/121ccd4b87470534e202da2a3cfec38311f100": "4373a93ec6c14db37f3f13048b8492bb",
".git/objects/41/51798b30e05eb1df96568f7625cccbd5ad8aa7": "b3d0d36f94254cc1d030a9661f3c59ae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/668c6b8c4c161a47698c04d7e2b886fd2f8fa1": "d93d084a2c901403af68d38b43ff9695",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/296412f5d55090d7d3165b960a150204c1cb01": "418babca87028ccdafcbd9fbb41e133e",
".git/objects/5d/aef85860ffd1528a636d40a465de178f3a7982": "2f53fd9b1548ef374cc06988594471b5",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/bde699bd9c50550aac196ea21c494296d5a3c4": "e37986af64da5c208120e27bc16ca09d",
".git/objects/6b/02a166e1583a7aecceccf93c27ad978db68ee4": "7d79c4fe833e1bbdbf707dc94395f61c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/5ac97462efaca6e95e3b5bb5b77529ab117d94": "f642bb2fbcb9745b49b4d5bca6e49caf",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/86/0fd7b500e022926fc1fb50cacf9dd624208176": "6642c1fb5064d5f94f19bd164ca310ef",
".git/objects/8c/af6991924c18396203809d580e7f4b0d7a0999": "14a546b85edc8f64d0e54f5504bb4784",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/9fcb173a8e73c54d881be8f4015f0e197ba0b0": "38d38a3a9167a70968f9134f939328f1",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/95/ae3eeeca8222d450d6521eed5616fdfcbc03f1": "ef16b46c956edf4308ac21cb860a901a",
".git/objects/98/0b93fd96087b7e8f4c931ccd70f6de6bd0382d": "6b9b5a8f2d5ccf97cecdacd705fcb972",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/ad/6877a899152ed0ecfc11941b34ea18adaa8477": "eed0a1f4ba84cb97e596e654e2c64a60",
".git/objects/b4/4f8ad3d5d2666baaa3e8685bd21ceec921e9c2": "0cb31501c82dd263d92006103f25844a",
".git/objects/b8/5059f5525e86127efd314312887b780632e0f7": "1484b6df02b80d65b63ea0753912a6e3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/ff5d32232e0d69652f6b61863b8ab11535e6e7": "41c787258b71a39bc447f85b0944039a",
".git/objects/bd/7b74af01b69a8954e9b1319f4aab265c4b5d9d": "00c58a7b64b9babf05a768711c3e0a11",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/32d99d408d4861ccadb4185cd7cb865cf2c92d": "a30573da60819c0b3a07486b44fc1220",
".git/objects/cd/80b24694f9d0601ca96bf4871d7ca716888c9e": "cbdb77966726ec198bfe5f902f14e7d9",
".git/objects/d0/4e57071dd4d4837ceeb9d9d2401a8bf32359ca": "98413af55512a4a4db77ebfc2a5043ce",
".git/objects/d0/ab57441d62d8f898c840cabefc548cf39018f8": "013d0435fb77dbaa85ad29c23ba85db4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/3d41402dddbb63ddabff31977c1c4f278317f1": "e2eaf86500be6ba8e2888bfff2294ac6",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/cd8f489e3cf7a5917e5842ab8c7b3d82d3e579": "9ab74660dcdcd46c83d8ed9acf551c96",
".git/refs/heads/main": "ffba9d64b5a5c1aa4c6011c38e0887d1",
".git/refs/remotes/origin/main": "ffba9d64b5a5c1aa4c6011c38e0887d1",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ac9c26ea87560eec500d3629d6021223",
"assets/NOTICES": "037eb4af7a7728ed105b0a056d605ea3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "62853840a15f1748116ba84117d4d344",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d22379b2003c428d7ed5c9bfc6427f74",
"icons/Icon-192.png": "1f9ef0e2e8a96e434ac420158e531dbf",
"icons/Icon-512.png": "60e51932e3c922e5831a7a2a9e8886d2",
"icons/Icon-maskable-192.png": "1f9ef0e2e8a96e434ac420158e531dbf",
"icons/Icon-maskable-512.png": "60e51932e3c922e5831a7a2a9e8886d2",
"index.html": "a3b24a7653a3508418bfc835e274350c",
"/": "a3b24a7653a3508418bfc835e274350c",
"main.dart.js": "22b2d7d1dde78885c71ea9447aad6c41",
"main.dart.mjs": "fd51bfaf24ad38fcb005fe8d55a82bf7",
"main.dart.wasm": "6834084db23cb6b09d0b5dbf1b801c3c",
"manifest.json": "7c049ce6333e449e4f4045bbf6fad579",
"version.json": "a5532ccd205c5b283f90b4c2f738ab48"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
