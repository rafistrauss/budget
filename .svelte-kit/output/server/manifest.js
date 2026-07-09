export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "budget/pr-preview/pr-7/_app",
	assets: new Set(["favicon.png","favicon.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DdaKDldI.js",app:"_app/immutable/entry/app.D4lDcnno.js",imports:["_app/immutable/entry/start.DdaKDldI.js","_app/immutable/chunks/CKRSe7fw.js","_app/immutable/chunks/Du-RhnkZ.js","_app/immutable/entry/app.D4lDcnno.js","_app/immutable/chunks/Du-RhnkZ.js","_app/immutable/chunks/B68Xgf1x.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/budget/pr-preview/pr-7/","/budget/pr-preview/pr-7/checking","/budget/pr-preview/pr-7/take-home-pay"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
