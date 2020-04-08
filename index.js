/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	const createUrlQuery = () => {
		const getParam = [];
		if (!arguments || !arguments.length) {
			return "";
		}
		const arg 	= arguments[0],
			argType = typeof arg
		;

		if (argType === 'object') {
			getParam = convertObject(arg);
        } else {
			return "";
		}

		const str = (getParam.length > 0) ? "?"+getParam : "";
		return str;
	}

	const convertObject = (obj, parent=null) => {
		const params = [];
		for (let key in obj) {
			if (hasOwn.call(obj, key) && obj[key]) {
				let partParam = "";
				let index = String(key);
				if (typeof obj[key] === 'object') {
					partParam = convertObject(obj[key], index);
				} else {
					index = (parent) ? `${parent}[${index}]` : index;
					partParam = index + "=" + String(obj[key]);
				}
				params.push(partParam);
			}
		}
		return params.join('&');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = createUrlQuery;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('createUrlQuery', [], function () {
			return createUrlQuery;
		});
	} else {
		window.createUrlQuery = createUrlQuery;
	}
}());
