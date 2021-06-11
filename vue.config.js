
// const path=require('path');
module.exports = {
	// publicPath:'./',
	// base:'/app/',
	publicPath: process.env.NODE_ENV === 'production' ? './' : './',
	// devServer:{
	// 	host:'localhost',
	// 	port:8080,
	// 	proxy:{
	// 		'flea':{
	// 			target:'http://192.168.137.215',
	// 			ws:true,
	// 			secure:false,
	// 			changeOrigin:true,
	// 			pathRewrite:{
	// 				'^/flea':'/api'
	// 			}
	// 			// 相当于请求遇见 /api 才做代理，但真实的请求中没有/api，所以在pathRewrite中把 /api 去掉, 这样既有了标识, 又能在请求接口中把 /api 去掉
	// 			/**
	// 			 * pathRewrite:{
	// 				'^/api':''
	// 			}
	// 			 */
				
	// 		}
	// 	}
	// }
}

