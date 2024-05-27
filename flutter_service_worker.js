'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "59d0d19fc45ca69230d858f60a5557f8",
".git/config": "1e81b1a5eb444d2f5addab657973a8cb",
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
".git/index": "87b9d2a945fba88d180b5bbb171b080b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b327b1eb25fc5b0f7193c9663d7bc36",
".git/logs/refs/heads/main": "5930dadfa17e50402720c59333fa7c35",
".git/logs/refs/remotes/origin/main": "76d43f9d120eddca34fb3e68ec369331",
".git/objects/03/a05ecd0a35375af619b1bbce47fa1ade90e989": "bdc5a41069173b7e466cc9a58c4e95a9",
".git/objects/05/ff7b1534a0e5aac18797c55bf6444a4bc03d21": "5d590d4fef68d78f02add651ebe7f021",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/a1f141ca05afe2eb98c69f89bba64e3de2164f": "d64d6d554565fbf48099f3d2e6ca62ec",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/be50bb629f41a1ec4b0dd428f1434286792781": "fe0cbb0b9e8bb8a692036a9206789181",
".git/objects/36/aa39ab3ce3e49e95a359002fd09b4fd65802eb": "703e96c3d637130d916a2853136db351",
".git/objects/37/0e8a04dd9a7678e815c3e3c28284598ec6f833": "f4ed194d4a8e6e8a37094a4c7a4ffa29",
".git/objects/3e/56dc27d9c70c98cf4a40981347acb520add6c7": "99e4472d0dd3c8a5350006a3243800dd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/2906e7b8f71e11ff6f5431005156c30d0c967b": "f5648c9203a8e94404c661e6572526a3",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/6e58c1a64a637221a7f9b182f6800dde64eb97": "ba960bcf8f6219acdf677c375ea21c4c",
".git/objects/50/b599aa66ca7945d41698a9f05b726791915a5d": "65c024abaa4a9c6691fb6fa45a9e195c",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/9789176955a1aa5651838d0a667e1d0eb3748c": "a2511972e4272b8f8a2acbad4ece4443",
".git/objects/5d/94e3012c72897931ef23f3926be28d224bbf2a": "d86ee6969727a0d0414fe045c2332fc8",
".git/objects/67/58c450d118848ad0072eac14f1c34141713fb1": "051f613af7597f8e8917702eec17a345",
".git/objects/67/e91789771ac02333bad03c22ed5f953436a191": "2556fe1466fc356ae279e29290c6cf35",
".git/objects/6b/37dade92e75c0c79c292010c7785969d046bf3": "d936a674679a363ab2289cda8c4af245",
".git/objects/6b/6ad4325c7af659562d7b59f58c6835cfad647d": "416e50b205f16cbaa72ded9d534891e3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/1633bad9e961e6e3edd453ae251daa6385009a": "44275510e8402c795bc612b1c868c7e8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/3a6b2ce45d21c724e7dc455fa60caf442f4f11": "677d1f0fae916798fda6af166ba27931",
".git/objects/76/157a571be1f2d3dc36ec398dc206ede7565a1f": "6a108bc5a47b878cf8661dab03eb68f0",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/e0e68a96930311c040c873b19b252a29739be7": "4404d3f46ff6f6a1590789bc1724aa48",
".git/objects/83/9aec64a3dd69eb01366e9145e82bfdec691f1e": "cb0ae41f654c0719991727f2563d77f9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/ad/12bf7f7c3947eab36b4a5abdd70c7b16dfc4c0": "9f241b2afb0dd234a4f294899b2b4b03",
".git/objects/ae/3a8994b83d2118267acd103386cbf92d0bf495": "d46af01af6546773036393b94129c3c6",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/a47be1da001ef6c1cf4e5d00e5f0ac120aac51": "4ed42dd4e03831c6bac6983f23c534a1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/fd3ff1650e546c40eb1149b6623b7b3aacbade": "abb09ef010406fa4e7d2b7c18b579928",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/718f26cdd3f048371b3251cc5f12499d55e87f": "d827e34f36bf475e30809048fa5b640a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/544c2a71aa3cf30c67c2afc701089e32e89ffd": "608c35feced6d000053f75d8c2c69ac4",
".git/objects/fd/14e1c325a5ef4ba1569e85b6dda9beeeaf3247": "ab35181ac7140192605717ca9063fc24",
".git/objects/fd/de2eadf28aa176c223c23568535eedc67cfe6b": "4c16cde28524641ee6a30e96efbb66c5",
".git/refs/heads/main": "e48175e1b46e58ccc9c1aa1c5f5dad77",
".git/refs/remotes/origin/main": "e48175e1b46e58ccc9c1aa1c5f5dad77",
"assets/AssetManifest.bin": "7794cef9853d9322e368d46acee772c9",
"assets/AssetManifest.bin.json": "4cbfa5fd249bb84c6535d6118a292b95",
"assets/AssetManifest.json": "b02b85d0f041bfc06883ba63c60b87fc",
"assets/assets/1.jpg": "d7f458398c1e2e34ffa512f0ffaf7312",
"assets/assets/10.jpg": "e2c491bfe177102fbf7d804e9cb46769",
"assets/assets/11.jpg": "c93e442b13d421dfd5e1ef3eb3e559b2",
"assets/assets/12.jpg": "3be65c73e36570aabb55ce6410009aec",
"assets/assets/2.jpg": "3e01f51b97b520374e5b7da1a5362c49",
"assets/assets/3.jpg": "166e5656b91d2ca6faf1823262de5a2d",
"assets/assets/4.jpg": "525eebf5ead7ee217d55dcad548f5e2f",
"assets/assets/5.jpg": "4416ecf4251d430fb4c730829b28f666",
"assets/assets/6.jpg": "c1054b0745d66edee1153f7b8b129fa1",
"assets/assets/7.jpg": "dfc68a2f9821655ef669dc29ceca55dc",
"assets/assets/8.jpg": "e2c491bfe177102fbf7d804e9cb46769",
"assets/assets/9.jpg": "8d9f61f62b66d7a09c76b8fdf9a4dd84",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "120bb00414cf92d8f303de162920898e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96512a0d84df4eaf9229f49d46d672f9",
"/": "96512a0d84df4eaf9229f49d46d672f9",
"main.dart.js": "fee81e711ab119e29d9fed3e2cf91625",
"manifest.json": "6825706a958148c3e586491d8520c893",
"version.json": "dd2554c86bc0032d6ddc2895c171d1f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
