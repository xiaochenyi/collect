'use strict';

/**
 * 预加载图片函数
 * @param images 加载图片的数组或对象
 * @param callback  全部图片加载完毕后调用的回调函数
 * @param timeout 加载超时的时长
 */
function loadImage(images, callback, timeout) {
	// 加载完成图片的计数器
	var count = 0;
	// 全部图片加载成功的一个标志位
	var success = true;
	// 超时timer的id
	var timeoutId = 0;
	// 是否加载超时的标志位
	var isTimeout = false;

	// 对图片数组（或对象）
	for(var key in images) {

		if(!images.hasOwnProperty(key)) {
			continue;
		}
	}
}