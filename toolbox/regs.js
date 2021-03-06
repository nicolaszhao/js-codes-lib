﻿/**
 * 常用正则表达式
 */
var regs = {
    // 中文字符
    chinese: /[\u4e00-\u9fa5]/,
    // 空白行
    whiteLine: /\n\s*\r/,
    // 首尾空白字符
    trim: /^\s*|\s*$/,
    // 中国电话号码
    chinesePhoneNumber: /\d{3}-\d{8}|\d{4}-\d{7}/,
    // 腾讯QQ号
    qq: /[1-9][0-9]{4,}/,
    // 中国邮政编码
    chinesePostalcode: /[1-9]\d{5}(?!\d)/,
    // ip地址
    ip: /\d+\.\d+\.\d+\.\d+/,
	
	email: /^(?:\w+\.?)*\w+@(?:\w+\.?)*\w+$/,
	
	url: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
	
	number: /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i,
	
	// 'mm/dd/YY' 格式的日期，没有对'日'做严格验证
	date: /^(?:1[012]|0?[1-9])\/(?:[12][0-9]|3[01]|0?[1-9])\/\d{4}$/,
	
	// 'hh:mm am' 12小时制格式的时间
	time: /^(?:1[012]|0?[1-9]):[0-5][0-9] (?:am|pm)$/i
};