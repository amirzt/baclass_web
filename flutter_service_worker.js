'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e9c541ad6ab8eba833ba27eab9a8f1c9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "00ff1e6aa3075565b1a3cf565bc1d767",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b226adba3fb8c0c45759a9d25c045d7b",
".git/logs/refs/heads/master": "b226adba3fb8c0c45759a9d25c045d7b",
".git/logs/refs/remotes/origin/master": "98ff735d35b8cd9d71e906d02a4f0898",
".git/objects/04/c8fde367e04b0ee68b6354587e05cb14c33a60": "9b58e1de9927637e8e8a9bba6c18c6f1",
".git/objects/05/3ffc71328e9742a5b4b38a51d7f676b66ac22d": "e944e270bd6f846021ab2a992f6c7148",
".git/objects/09/04f7a2b45f5ff91ffb03e56f0b691b6e475847": "063e6f1ba565caca982973280a5c6d0d",
".git/objects/0a/7e01efbb837e575792df67fb63a9d483d81997": "570f5580af3e45af7d683f6a48b4eafc",
".git/objects/0d/a6b5188031b99fcf78784ba0332705aea884c7": "e387d1438e0b89c4d5a2019ed8336291",
".git/objects/0e/0dcd235c4973becf25f38eb4e5bb26e154c86a": "13e3d699f54c273cb85da397b0df9a2d",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1c/3075c05e87ba02d7b5b386fca481ad219cae53": "0217b884e838d249659559ae9da21790",
".git/objects/27/339d4ae1c2ad9cadf8d121ed84ab37be02bb54": "ad69f47f151afc0c9eee87039cf0ae24",
".git/objects/2c/f34951ff3679950e6f4c1c3d33bcdc820e2908": "849f104af199f32bfddb78fd47d6f4f1",
".git/objects/2d/eefa82a156eb601ad52c842eeef921f383b71a": "dfe6ec7c6f494e57d2b9fd4c9766823d",
".git/objects/30/7ca09772a010028c4ee82ee94d0bdd30edb380": "ee4abebf427abe90156e25ac17475427",
".git/objects/32/50039ecf32c56d40c8765e22698acc3d3e777e": "4b7a8d0bc028c96c91b3957b866c5867",
".git/objects/32/cbee7c26e24f5548fc39c66544698d22dbaa4e": "47610bfee7f312e612f7a4271d7d3c1f",
".git/objects/32/d8ac79558f6793f1b3c322bf64b1372357b5c8": "c9e3fe0421e19de95b0fe2bf173336de",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/91b969f8406883aba324022f3d583dbc8dade4": "e6072979010bac419a9eb9e85481aa47",
".git/objects/3a/cb25571fae28b85f58ca42868bb2cc5e5884d0": "9b9968864211574e239e7dae4c519fbf",
".git/objects/3a/e5766396c4ff4a55fd7817c49482723a9bea7e": "df519cda2a313744fac06f27c55edd82",
".git/objects/3b/88c4df98c2592f18f32dfbcd170103edd6d0cb": "83b29a666fd6cbc57c7ec5e778c39893",
".git/objects/40/2bc7ed43e71493de80aafd6c53af8b2b812324": "2f73238d7a9ee2d4ca9fe629b5fc8705",
".git/objects/40/4bf2c42d8fd5c7065d83709b7c7e9cff94310c": "1bcd0b50b4ac98c6f9957cd5cf861b3e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/ec11caf902ecb171787ae8f2412084c967f1f7": "6753ac9a3eb8b78468e2fff70f9c2da4",
".git/objects/41/fb1e77e364a63ce0004ee4be10715a7c7e33cb": "4bd1adfacfc9af6258b133cbaf49ace7",
".git/objects/48/edea931a2b333f6e8bb087934d5557bc356242": "7bce151e0785e3d83d346b39437bdbb8",
".git/objects/49/dd05fb6ef6d39b86a3870c829443a8df84c4f5": "8a6759abfafe595c0684c8704fe95c5b",
".git/objects/4d/61324f6e250deac0992a363d74438615c3a74b": "bc0520b2ac36e20c4cd9bf3e6be30e2f",
".git/objects/52/1391415b3b6687f25037beea4711d055d5287c": "6d2988c238aa47d56f0bb3fb9f69c71a",
".git/objects/54/079a52aca6cc1ddd701d22ba3b5b013ba698bd": "d17322e938807c57e24fb6ac9641a786",
".git/objects/54/d15d641467d1a3fe59d345371beb139f902299": "beb9c5ca10e23277e1eaedd2df220ca3",
".git/objects/59/ac1290468b53a3091d074f16425085bd1b1982": "d72232d639ba15acf3d03c86cb6653dc",
".git/objects/68/da0b6ca76ab60b12740a71fca432780eb7104d": "c29f8a59805ea707d52b4edfbc6bdeab",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/70/286ee71eaef3902f3feadac6e12a045f3072b6": "777752f31a04332944883c3faa86cb1c",
".git/objects/74/1f031777296fe34e2798f4fc324221fc701d32": "ba84249b93fc363be335576975f92b9e",
".git/objects/75/a7b14c00305ddae200008ac25727d6573b201d": "c8a926334b6414967447421b6d90cde1",
".git/objects/77/4ee9dd1f56483a7829bd33a3351de684d0b390": "f7fa4592290426e6e5e4f30b7b81dd1a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/dab5b73a001e1b3a589f3d70102851c1948a00": "6ecbc175fa81c1d30401093068bf9844",
".git/objects/7c/e4d140edb4a065bf9a8758648d49c5c9129b5e": "7770e4fe91a754e69b0f1f0cbe0a89af",
".git/objects/7e/3bfb496e44a415d8dcf41138992ba3e993da45": "7073b44a9381bcb7ad4b0e70aae799fd",
".git/objects/80/d3a40f53c21b6a59542b5bc57a0494ca729b06": "1c1133d442f89109e1652c7cb47c0afa",
".git/objects/84/d6541b6c0b502ef6e0b79f2dd157d815801bdc": "b51bf8015fbd63398ddcfe6bbf409e12",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/75599e065cfa75fd50a57feb56534ace721fbc": "b3538a83fc62dd4898dca5cccfabc280",
".git/objects/91/8f69fc7dc8d509222a699cb0215939d3adfb80": "96861bcd564eb726bab1b4cb57ca5fc5",
".git/objects/95/f7f745381df2f586ea4bd46f42c69f10016592": "4fd2fb3ed50acab3dc699e81ed781c82",
".git/objects/9b/f9dd0e69f96ce5d7f37be7e7a8240241a2fe09": "b0771e5a9b6adb7d33983f75a9627fbe",
".git/objects/9c/a4d29ceba1b27f858783e9864eb018d6380868": "98727533af770d515d942f3d4c5dfb9b",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/e4a766084698a3200e19ef63a90d079d03d7db": "55c7f788152ffc7b507364f518d6c081",
".git/objects/9e/7161c2dd8bebf94aa6689bb34432fcd6edf784": "13ede3590570f4978c7c7244f71bdf14",
".git/objects/9f/ca0cab60183938c8711041c1cabbaec8050389": "5923a87c94001b6e98a4a5f25c593a05",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/65cbac89ed93cc1262a23859f457a5860b0d1b": "72d28fd613e9e147998a01b6b2e4a133",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/aa/9c2b67fcee4ff2b903996c76f955e67e73e1b2": "816dc804d308763c4bbb97fa011eaf07",
".git/objects/ae/1d43d1de8a721fd5f2a800fd9a75609d0c1ab8": "3f174c04d41d716ff71333e2674211a2",
".git/objects/ae/7c27fc6d8960264c2b272b5261a8a32801817e": "af6c4bbd8111c45dcc579a2a6482ec25",
".git/objects/b1/300d99a729ed787da8f284bdf342bb562ef600": "1fa8c1a43231dc76406e049c05583f13",
".git/objects/b5/352b732ab40128e32f416f55f9b6913c5bbdf8": "b88abb9e798da726f798fc68bc85f067",
".git/objects/b6/3c8caad21f9a29215eb959ad99ec3e8fa73bff": "3326f4ee110df1885bb66afc773466e1",
".git/objects/b6/68b57f3f9d4f5d3b392e387e00a30134255e2d": "00c7e8ad1ab905fceb91bb8bc25d6327",
".git/objects/b6/b64ea2a9ec72b9f979acf56fbbc78e73e3cab8": "0caf8299c67c03fcb4c7e1efcb297f30",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/e55c475d4bc5cb7bd86b216ee801a2019d65bf": "07d58b75741e4542e12c9df0ac6eccb1",
".git/objects/ba/87dea118de3eaa9b9dbe481c36b403da820a92": "7c4ddca1c7adeed8eec5a4c87743728e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/5fb3170fa6522aa2b03ff52e1e3d39212251b1": "6e036a6dfa78da8661e36912b95185ca",
".git/objects/bc/6cf8c28053e0b07e10cfdba80182c630cf4df4": "a76f709c5578fe25518b72a3c0a1b6a4",
".git/objects/c1/ec036c947d04469138a22a34ac2e46e2f3a29b": "e28715e801e6b3ffe32505ad43b341a6",
".git/objects/c5/690f4111c3311f896b8058f235b15425c85288": "d94006f9afef9b4eda0e9a202f422b41",
".git/objects/d3/603aa5ffd2f90b6bb38ca0754f71207d7efa8f": "53ee66b3732b26b43262cf9a18a7beaf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/dc/555b27319eea662d5f6d28162ee9ca4c4db73c": "524c2b5a63ec0473b406ef6058632bc7",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9dfb0476df03d89948fbb624eea65d65d6cb99": "3fc7382ec3c38cce73782589a2139868",
".git/objects/e9/844960ab7cbcc8cc800674c684ea0fe2e8394c": "f6b55719bc54d47f828b056183c494e5",
".git/objects/ee/c4531bb312f8dac5ef414785141137d84adef0": "471a260464c2b91f5dd3bfaffde8d1a6",
".git/objects/f0/53d5bbc26171396ae48359843720dccdf4a982": "0886b262ddaff9d203b534723a10b013",
".git/objects/f0/6c4431708e61a666ab10e31cfeb7197e106e76": "e0f1a47f7aaa090f777d6b7159414d74",
".git/objects/f0/ef9ea3e6ed169189537afa418e26e92407f452": "a0d8649447fb179a7eddb2f9f989e8c7",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/d9662f8b3d5feed66840dca1c29e8c0d0f3ceb": "59c3a0cc3f56ea3f52f8e74a9aa3bc5b",
".git/objects/f7/9bf38aada2756d306e50a69fad3e41eef54ca8": "63254e0e1d3faeb75224842a3cb09b68",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/55c5fad081212adc5e6f0963e52b1cf896e1bb": "41ee541bd1942fd8c13de750b3455381",
".git/objects/fd/eb0186c98be5d3b102ec1899bd4fdd21ca65e2": "95ea8910c207e9ff639c13f4d312cdd5",
".git/refs/heads/master": "ee6047b054832caa01bb7855b097933a",
".git/refs/remotes/origin/master": "ee6047b054832caa01bb7855b097933a",
"assets/AssetManifest.bin": "33c59ce772fcf6d961e9f68f6f34d07c",
"assets/AssetManifest.json": "ac52866208de272fe75d4c3ded9f1a36",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/fonts/Kalameh(FaNum)-Bold.ttf": "41c48679881264b779ae639effab6c2c",
"assets/assets/fonts/Kalameh(FaNum)-Regular.ttf": "4a854c670da8973d948df10109aea302",
"assets/assets/icons/ai_button.png": "48ee516cf183d791204c64667dbaf007",
"assets/assets/icons/ai_loading.json": "7e0633a0f101385bea0d1800bba8da5b",
"assets/assets/icons/Baclass.json": "e579c4cdb2e4a70eecb853399a351d89",
"assets/assets/icons/coin2.png": "391e3f19b454082f93d1e595bd2222c8",
"assets/assets/icons/coins_pass.png": "d1bba34f66def7e4de35a8393a6d1d39",
"assets/assets/icons/data.json": "a152a08cc4cfa2917277af24a3276645",
"assets/assets/icons/ic_launcher_adaptive_back.png": "697d6197febd35ac58b1c8737daf8d74",
"assets/assets/icons/ic_launcher_adaptive_fore.png": "2898ed19cf1db1c0246c53ae3df0b7a8",
"assets/assets/icons/lock.png": "439acf283eb4a4de029fc79a6e4e4472",
"assets/assets/icons/logo.png": "750ce72737fc2b612dc78c043dd6f3f5",
"assets/assets/icons/plus.png": "c8f77ed462ea224019b4e4da8ce1549c",
"assets/assets/icons/ranking.png": "9332acb3b8ddc3e81f8d82f4ba618875",
"assets/assets/icons/reward_frame.png": "9da5a0fdbfc3881298b69f082409d29e",
"assets/assets/images/aib.png": "2cc87cfd00b15f9bd15768961a075f31",
"assets/assets/images/back.png": "917dab6a2220c667fff3c7c778c2369b",
"assets/assets/images/bot1.png": "7aa5580cbb409ec0a114910e3c0e12ed",
"assets/assets/images/chat_recieve.png": "e19447ce02377af9f103a4c71afef901",
"assets/assets/images/chat_send.png": "8b31f091cbaf75ae7f9d317168665e89",
"assets/assets/images/crown.png": "d0a228e1d98cc23c866cf5fb4cdae7f2",
"assets/assets/images/empty.json": "20e62229847226f1b54b605cc6df8d8c",
"assets/assets/images/frame1.png": "55bb8756fde9e45dc9a512b7fe8b921d",
"assets/assets/images/phone.png": "5226b853858f980ec9ca54b792001080",
"assets/assets/images/send.png": "91572e31999f1c83c006f5037db02be3",
"assets/assets/images/smile.png": "ed9b24231ae3a8fdcbfecfddeb1e161f",
"assets/assets/translations/en-US.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/assets/translations/fa-IR.json": "22e67cc3ae278cb47bca0058382d3330",
"assets/FontManifest.json": "4ea84aa67f1c17bec4b079811d285359",
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
"index.html": "da2bb81b6a395a60ec1ad0f5809673d2",
"/": "da2bb81b6a395a60ec1ad0f5809673d2",
"main.dart.js": "199d887f71da975c8b190bcda5562105",
"manifest.json": "cc99d59588d0680c5f4e157469dbb4ba",
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
