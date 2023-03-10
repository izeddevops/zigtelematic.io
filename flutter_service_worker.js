'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "20845334b243b9ba3a9479a081357185",
"assets/Assets/AC.png": "72105642086b7197fac0820cbb7b9bb3",
"assets/Assets/appstore.png": "a5f8b91d80715cf06d0a01ca5d6d3696",
"assets/Assets/Car.png": "607820dcfae74cc918f93b22d7a6c2d1",
"assets/Assets/Car_Black.png": "a32b2f2cd0c5779d93874e5d8e4bee6f",
"assets/Assets/coolant.png": "289bac76762b42083bd42fa147f5fe96",
"assets/Assets/diagnostic.png": "00b364bb32e7b73fd99b735ac1849331",
"assets/Assets/Engine.png": "cdfa0a5537059623142919246ccca5a2",
"assets/Assets/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/Assets/Group%25201final.png": "c232023be0b14a138866250e72fea452",
"assets/Assets/location.png": "a9b8d81a3af63b40b9c3a7c47b357c3f",
"assets/Assets/logo.json": "20e50e7404d01fa8f4c287f927f152ae",
"assets/Assets/logo.png": "c232023be0b14a138866250e72fea452",
"assets/Assets/menu1.png": "a84426a856136c55253444c1412f3706",
"assets/Assets/menu2.png": "7460972c7293167cfb4d746526d10d44",
"assets/Assets/menu3.png": "41bf360aacdaf2d4c1b46a2bd3b89138",
"assets/Assets/menu4.png": "b90b3e041f5d95de051c1b73ff470775",
"assets/Assets/menu5.png": "67988d2767aa87a504ecfe6f306c9dbc",
"assets/Assets/menu6.png": "e782c4a385562495dcf9392c5804a909",
"assets/Assets/odo.png": "20b158cb1cf43055260779afba328bab",
"assets/Assets/pb.png": "a6f89cc4c558b4c64eed855e48d2f904",
"assets/Assets/playback.png": "3daea13296e94bdc9423853662b87647",
"assets/Assets/playstore.png": "4541bd1b9f74a7e2645464eb2b7942a4",
"assets/Assets/Report/Ac.png": "51661552376656c45372f6cbb24ca3b7",
"assets/Assets/Report/battery.png": "5c8b9f738232425cc0757b69fbd7a56d",
"assets/Assets/Report/carburst.png": "3ed70fa3ec951db8f74296fd4885f996",
"assets/Assets/Report/car_engine.png": "6cdfb85fbbab69ba72c5689e252e9a74",
"assets/Assets/Report/driver.png": "4a63bb1e0fcf29b5c3b75db42e8b6bf6",
"assets/Assets/Report/event.png": "30b741a54a05e928cb0a2caa3fac7ffb",
"assets/Assets/Report/fuel.png": "f908507b871e5f6dfc17526cb2373839",
"assets/Assets/Report/geo.png": "982a0d9862c46e51f7a52bcd1746480c",
"assets/Assets/Report/idling.png": "38af438170bafc835b5e073575789667",
"assets/Assets/Report/km.png": "1d05025719ce58e6d5702f872ad98a72",
"assets/Assets/Report/mileage.png": "25eff00138b87688da123bf39011a835",
"assets/Assets/Report/moving.png": "ddd230f827dd1e60ae79b98dbce94b94",
"assets/Assets/Report/obd.png": "3fb35e12a2b4059f04cd99101240a3a0",
"assets/Assets/Report/odometer.png": "bef7ae34192104eb847594a515588bdb",
"assets/Assets/Report/overspeed.png": "734a11b2b0a16ebb32fb799d933313a0",
"assets/Assets/Report/parked.png": "836885e0f47ef0785dbb27d846b783e0",
"assets/Assets/Report/stopped.png": "b396c40dda30ec7d2439307e49c4d55b",
"assets/Assets/SideView/BUS/BLACK.png": "f82a257709e81213634931193b808dc1",
"assets/Assets/SideView/BUS/GREEN.png": "dc6282f5b2c56e22aaad1351d39b4123",
"assets/Assets/SideView/BUS/RED.png": "cc142ad1f1bbe1f980687c71c022a59d",
"assets/Assets/SideView/BUS/YELLOW.png": "8ecd923df2abf4bfbcf89a3ba30f863a",
"assets/Assets/SideView/Maxi_Cab/Green.png": "db0429314a2f9a528072936e8d0eded1",
"assets/Assets/SideView/Maxi_Cab/Grey.png": "afbb711dcf079912711a17ebbb800491",
"assets/Assets/SideView/Maxi_Cab/Red.png": "9031ff4f523fef4f534afa41353ac132",
"assets/Assets/SideView/Maxi_Cab/Yellow.png": "2cb3be462214bab82db4923b17b44423",
"assets/Assets/splash.jpg": "d59a7548445860b64cb388236efddff6",
"assets/Assets/switch_left.png": "c3a5f23e0d4f55a9aff012107e168165",
"assets/Assets/switch_right.png": "7455a3b487e4db176a03015ea65498fa",
"assets/Assets/tamil.json": "a3cd4cf3a8faf683e7cd60f533f66f1c",
"assets/Assets/temp.png": "1e36bea472646ece5671d10587e411d4",
"assets/Assets/throttle.png": "ccb67f75248e4e789663d55f79b7a38a",
"assets/Assets/Tolldata_India.json": "402a85cf7921b29baa273907a4770bcf",
"assets/Assets/TopView/Bike/Bike_Black.png": "33f736615976d7fb9fecf659fae737f7",
"assets/Assets/TopView/Bike/Bike_Green.png": "9c8836cc0ab1e3bd262c3faa974f8b92",
"assets/Assets/TopView/Bike/Bike_Red.png": "7287d84c2882799c72d95f2c24717caa",
"assets/Assets/TopView/Bike/Bike_Yellow.png": "cfee8a9d2bae10609f6fe7598b30973e",
"assets/Assets/TopView/Bus/Bus_Black.png": "4c3e826ffd3b698d064e6dcd8ece96c5",
"assets/Assets/TopView/Bus/Bus_Green.png": "febf038395eee744990dc86d14d2e5f2",
"assets/Assets/TopView/Bus/Bus_Red.png": "08c3969c841660e044361441feb50f93",
"assets/Assets/TopView/Bus/Bus_Yellow.png": "8345493d86dc9219d6cdfcce5a33e139",
"assets/Assets/TopView/Car/Car_Black.png": "06046554a7a9daf721f47c2f9c4025bb",
"assets/Assets/TopView/Car/Car_Green.png": "c87475da817525c996aaa8392622a964",
"assets/Assets/TopView/Car/Car_Red.png": "d2837a33b8821c47c1b4d3635315b2ae",
"assets/Assets/TopView/Car/Car_Yellow.png": "c67030dae8f9eebe333c14c024354330",
"assets/Assets/TopView/Maxi_Cab/Green%25202.png": "fb261d9aa0c877993ac7647c458db2bd",
"assets/Assets/TopView/Maxi_Cab/Green.png": "a2e500e5b143337ab1c5e438f38ed415",
"assets/Assets/TopView/Maxi_Cab/Grey%25202.png": "bb681cf4f2f4d9b10ecf90f53d600244",
"assets/Assets/TopView/Maxi_Cab/Grey.png": "cfb9fe631f701819e96746cfa4dc9e0f",
"assets/Assets/TopView/Maxi_Cab/Red%25202.png": "3946fc3b138b285f105f9f872c1612ca",
"assets/Assets/TopView/Maxi_Cab/Red.png": "3946fc3b138b285f105f9f872c1612ca",
"assets/Assets/TopView/Maxi_Cab/Yellow%25202.png": "3576201857365561e664a8760f9dacbc",
"assets/Assets/TopView/Maxi_Cab/Yellow.png": "cbfbc5bf6221582d0e25e378698daa3d",
"assets/Assets/TopView/Truck/Truck_Black.png": "4aac5e50fb6fe7e01bd7624593c5337e",
"assets/Assets/TopView/Truck/Truck_Green.png": "ba17202000dca0c1552b250ecbdc1fe5",
"assets/Assets/TopView/Truck/Truck_Red.png": "2279bdf98004ce9bdb0a6a13cecde141",
"assets/Assets/TopView/Truck/Truck_Yellow.png": "a81d06198988c7a6c9bcbaad9e5f41e8",
"assets/Assets/Vehicles/Bike_BLACK.png": "11ec95037fc27d2fc47478623704be32",
"assets/Assets/Vehicles/Bike_GREEN.png": "dbd073f476ad03cf05c5a795b7d0b9fe",
"assets/Assets/Vehicles/Bike_RED.png": "e104c0916942f106c23b8bf053c76ab6",
"assets/Assets/Vehicles/Bike_YELLOW.png": "3afe2c4383f79356961178467facbd02",
"assets/Assets/Vehicles/Car_BLACK.png": "4ce0614365e82c3bcc8bbebb51fe0c57",
"assets/Assets/Vehicles/Car_GREEN.png": "4b836add5a5fdc7fe72026c90be79c09",
"assets/Assets/Vehicles/Car_RED.png": "a894c3e602723589fd60f8ad645270b2",
"assets/Assets/Vehicles/Car_YELLOW.png": "49e5446d49244b42dfda201faf194f2f",
"assets/Assets/Vehicles/Container_BLACK.png": "f5f145a06e0e326ea9083aa0a0b6be69",
"assets/Assets/Vehicles/Container_GREEN.png": "1e86666945aad19a87ff17924923432c",
"assets/Assets/Vehicles/Container_RED.png": "1ab69050697df2ea1bfbb785bcdf92f7",
"assets/Assets/Vehicles/Container_YELLOW.png": "68a359931d508e8fadcedb558c9a6644",
"assets/Assets/Vehicles/odometer.png": "5e9392b49acd4d4e075234b276f421af",
"assets/Assets/Vehicles/Truck_BLACK.png": "535fa0745fe929d55b597967c1bc4c8c",
"assets/Assets/Vehicles/Truck_GREEN.png": "e4f229c92e52ef1f9362290fa9cdd9ae",
"assets/Assets/Vehicles/Truck_RED.png": "2c1c77ca31ad089b4aabe6354ab37179",
"assets/Assets/Vehicles/Truck_YELLOW.png": "fa60816d0eac85907f498c2b9d134bee",
"assets/Assets/zig%2520logo.png": "d39f5377f3db3d4fd36c311dec1f9250",
"assets/Assets/ZIG.png": "dcfcc98c0949886e2a964aa4d2ab5184",
"assets/Assets/ZIGGPS%2520(1).png": "c839f771ca425711eb50c5c4f1c2d885",
"assets/Assets/ZIGGPS.png": "5a74641b07aa7e47a1f9a7ed38cd3602",
"assets/Assets/ZIGGPS_S.png": "1dc91a37f7f28eb5f49d415cac1370e9",
"assets/Assets/zig_logo.png": "1fff7952a18c8f4bef34cc99d69957a5",
"assets/Assets/zig_logo.svg": "e3338c1d79435c8e35b5f9b754525ddc",
"assets/Assets/zig_marker_a.png": "5560ded6ffedb825a6dd3dfd2c74caee",
"assets/Assets/zig_marker_b.png": "7c046c8ee16e0a9bab0780ca6fd6b924",
"assets/FontManifest.json": "467062f725a1d57c25e9bd00dce06cf2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"assets/Lotties/Layer%25201_4.zip": "bdbc9fce620dc0f0a5be8b1b4a228890",
"assets/Lotties/splash.zip": "8e9246b8e3fa909ecdf1c87dac20776a",
"assets/Lotties/ziglogo.json": "9c42ef0b5dbfc3d5d57e1658e4174149",
"assets/NOTICES": "034234c298874703676a3bf343d6c251",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"favicon.png": "69b64e3a5041498dfb76e3d4634ac79b",
"icons/Icon-192.png": "b5ff603aad92716b8761e87139e07b59",
"icons/Icon-512.png": "0baabd1f557ac0b08407f7e2345f60c7",
"icons/Icon-maskable-192.png": "cbef2857abf3109a86cf4577785312a2",
"icons/Icon-maskable-512.png": "f6a1dd8738327dafe9e0411ed65ec6d6",
"index.html": "61bb4ee162e33082da2c1c47c58292b9",
"/": "61bb4ee162e33082da2c1c47c58292b9",
"main.dart.js": "3b6803d3a7cc69e034d263eb7d173646",
"manifest.json": "46bacc490ed5e0e5bc9a14b0902a3fa9",
"version.json": "57d963e9cdb68aea7eed779f79d74bc8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
