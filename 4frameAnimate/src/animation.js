'use strict';

// 初始化状态
var STATE_INITIAL = 0;
// 开始状态
var STATE_START = 1;
//停止状态 
var STATE_STOP = 2;

/**
 * 帧动画库类
 */
function Animation() {
	this.taskQueue = [];
	this.index = 0;
	this.state = STATE_INITIAL;
}

/**
 * 添加一个同步任务，去预加载图片
 * @param imgList 图片数组
 */
Animation.prototype.loadImage = function(imgList) {

}

/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
 * @param ele dom对象
 * @param positions 背景位置数组
 * @param imgUrl 图片地址
 */
Animation.prototype.changePosition = function(ele, positions, imgUrl) {

}

/**
 * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
 */
Animation.prototype.changeSrc = function(ele, imgList) {

}

/**
 * 高级用法，添加一个异步定时执行的任务
 * 该任务自定义动画每帧执行的任务函数
 */
Animation.prototype.enterFrame = function(taskFn) {

}

/**
 * 添加一个同步任务，可以在上一个任务完成后执行回调函数
 */
Animation.prototype.then = function(callback) {

}

/**
 * 开始执行任务，异步定义任务执行的间隔
 */
Animation.prototype.start = function(interval) {

}


/**
 * 添加一个同步任务，该任务就是回退到上一个任务
 * 实现重复上一个任务的效果，可以定义重复的次数
 */
Animation.prototype.repeat = function(times) {

}

/**
 * 添加一个同步任务，相当于repeat（）更友好的接口，无线循环上一次任务
 */
Animation.prototype.repeatForever = function(times) {

}


/**
 * 设置当前任务执行结束后到下一个任务开始前的等待时间
 * @param time 等待时长
 */
Animation.prototype.wait = function(time) {

}

/**
 * 暂停当前异步定时任务
 */
Animation.prototype.pause = function() {

}


/**
 * 重新执行上一次暂停的异步任务
 */
Animation.prototype.restart = function() {

}

/**
 * 释放资源
 */
Animation.prototype.dispose = function() {

}