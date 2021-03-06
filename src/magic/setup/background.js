/*
 * Tangram
 * Copyright 2011 Baidu Inc. All rights reserved.
 * 
 * version: 2.0
 * date: 2011/12/14
 * author: meizz
 */

///import magic.setup;
///import magic.Background;
///import baidu.dom.getCurrentStyle;

/**
 * 在页面已有 html 结构的基础上创建 background 组件
 * @function magic.setup.background
 * @name magic.setup.background
 * @param {dom-id|HTMLElement} el 容器对象
 * @grammar magic.setup.background(el, options)
 * @param   {Object}    options 参数设置
 * @config	{Boolean}	options.coverable	可选，默认为False，添加背景覆盖层，防止鼠标事件穿透，同时IE6里还可以遮盖select、Flash等
 * @return {magic.Background} magic.Background 实例
 */

magic.setup.background = function(el, options){
	var opt = options || {};

	var bg = magic.setup(baidu.dom(el).get(0)||el, magic.Background, opt);

	var y = bg.getElement(), s=y.style, yp=y.parentNode;
	s.top = "0px";
	s.left = "0px";
	s.width = bg.timer ? "10px" : "100%";
	s.height = bg.timer ? "10px" : "100%";
	s.position = "absolute";
	s.zIndex = -9;

	bg.coverable && baidu.dom(y).insertHTML("beforeend", bg._coverDom||"");
	yp != document.body
		&& baidu.dom(yp).getCurrentStyle("position")=="static"
		&& (yp.style.position="relative");

	return bg;
};