!function(){"use strict";const e=["client/client.eb590d12.js","client/index.3616db78.js","client/DocsTable.4529a657.js","client/index.2afee243.js","client/basic.demo.53983e50.js","client/index.c90ee659.js","client/duration.demo.27533fa9.js","client/status.demo.ec5e76eb.js","client/button.demo.cf919d34.js","client/icon.demo.892a969a.js","client/style.demo.5dbe70f8.js","client/placement.demo.3f49ce6f.js","client/update.demo.191afef6.js","client/basic.demo.1f46e6c6.js","client/index.5d2e338b.js","client/icon.demo.831c5bd5.js","client/separator.demo.fc103a17.js","client/multiple-separator.demo.94b4c378.js","client/basic.demo.303d20a4.js","client/index.6a8ace6a.js","client/disabled.demo.065e0644.js","client/controlled.demo.1b7698ba.js","client/group.demo.b9557265.js","client/checkall.demo.9cd8e1e4.js","client/groupslot.demo.8f8d86b5.js","client/basic.demo.b138fff6.js","client/index.24759ebf.js","client/accordion.demo.14987b75.js","client/nested.demo.d58dc261.js","client/borderless.demo.cad02627.js","client/custom-panel.demo.2c343668.js","client/hide-arrow.demo.5e55a2ef.js","client/right-arrow.demo.218f2236.js","client/custom-header.demo.3144ed52.js","client/manual-active.demo.70fb0062.js","client/horizontal.demo.537443dc.js","client/index.a3cc66b5.js","client/title.demo.5fc874d0.js","client/vertical.demo.cc5e32b7.js","client/basic.demo.0fabf104.js","client/index.7a5c3b82.js","client/status.demo.85f05c7c.js","client/duration.demo.b37c3634.js","client/loading.demo.31cf9550.js","client/promise.demo.42df795e.js","client/update.demo.a8a9ecf1.js","client/type.demo.ddebd917.js","client/index.d1bffc4d.js","client/icons.demo.d6e05b5a.js","client/size.demo.06b5b73b.js","client/disabled.demo.73b5521a.js","client/loading.demo.30f2d3a8.js","client/danger.demo.2ea66cda.js","client/block.demo.5f6c1b93.js","client/basic.demo.f0513caa.js","client/index.4e793e96.js","client/search.demo.f7b04456.js","client/multiple.demo.bdf43641.js","client/tags.demo.e071987b.js","client/sizes.demo.952f099e.js","client/custom-selection.demo.9387418f.js","client/option-group.demo.89fefd49.js","client/remote-search.demo.308ac9a9.js","client/custom-content.demo.7cdfc407.js","client/hide-selected.demo.cb9403ad.js","client/borderless.demo.4330a6dc.js","client/custom-tags.demo.1663ac33.js","client/basic.demo.f6a828a9.js","client/index.c115287d.js","client/disabled.demo.bd903240.js","client/slot.demo.a75d37d4.js","client/size.demo.9fba0f0d.js","client/loading.demo.c9a80fbc.js","client/basic.demo.113da3ca.js","client/index.60c05332.js","client/basic.demo.533f5b0f.js","client/index.42cbbbc3.js","client/async.demo.c8e25929.js","client/footer.demo.4c473290.js","client/confirm.demo.89a23145.js","client/ModalInfoExample.ce79e7de.js","client/information.demo.694cca96.js","client/update-destroy.demo.7e5af184.js","client/positioning.demo.08fbec09.js","client/destroy-all.demo.073a3d69.js","client/basic.demo.f05a49c7.js","client/index.3ada8e3e.js","client/disabled.demo.ddd3157d.js","client/group.demo.332864e5.js","client/verticalGroup.demo.7f75b499.js","client/options.demo.711dd2c7.js","client/radioButton.demo.2b831e7e.js","client/solidButton.demo.50a23a28.js","client/radioGroupSize.demo.255c09be.js","client/basic.demo.811b3f0e.js","client/index.e39f3270.js","client/twotone.demo.eb4b234f.js","client/pandaicon.80e5c84c.js","client/harticon.a926117e.js","client/custom.demo.9ebff720.js","client/basic.demo.f467b9ef.js","client/index.1917b804.js","client/color.demo.1c0ace1b.js","client/icon.demo.11307db0.js","client/status.demo.ea66bb9b.js","client/add-remove.demo.741c98ff.js","client/visibility.demo.68a1b548.js","client/checkable.demo.21501028.js","client/client.fc160c9e.js"].concat(["service-worker-index.html","ant_logo.svg","docs.min.css","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json","prism/prism.css","svant.min.css","svant_logo.svg","svant_logo_full.svg"]),c=new Set(e);self.addEventListener("install",c=>{c.waitUntil(caches.open("cache1604868661156").then(c=>c.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const c of e)"cache1604868661156"!==c&&await caches.delete(c);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1604868661156").then(async c=>{try{const t=await fetch(e.request);return c.put(e.request,t.clone()),t}catch(t){const s=await c.match(e.request);if(s)return s;throw t}}))))})}();
