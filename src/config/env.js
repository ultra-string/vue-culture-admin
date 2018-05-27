/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = ''; 
let routerMode = '';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://118.190.152.1:8081'; /apis
	baseUrl = '/apis';
    baseImgPath = '';
}else{
	baseUrl = 'http://www.baidu.com';
    baseImgPath = '';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}