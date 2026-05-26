export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "budget/pr-preview/pr-6/_app",
	assets: new Set(["favicon.png","favicon.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.9EUvEaj9.js",app:"_app/immutable/entry/app.CYyyyuHp.js",imports:["_app/immutable/entry/start.9EUvEaj9.js","_app/immutable/chunks/Bc1l5VoC.js","_app/immutable/chunks/DCZF414K.js","_app/immutable/entry/app.CYyyyuHp.js","_app/immutable/chunks/DCZF414K.js","_app/immutable/chunks/DJy784S6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/budget/pr-preview/pr-6/","/budget/pr-preview/pr-6/checking","/budget/pr-preview/pr-6/take-home-pay"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
