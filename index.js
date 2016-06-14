/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function createUrlQuery() {
		var getParam = [];

        if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
					var partParam = key + "=" + arg[key];
                    getParam.push(partParam);
                }
            }
        } else {
			return "";
		}

		// for (var i = 0; i < arguments.length; i++) {
		// 	var arg = arguments[i];
		// 	if (!arg) continue;
		//
		// 	var argType = typeof arg;
		//
		// 	if (argType === 'string' || argType === 'number') {
        //         var partParam =
		// 		getParam.push(arg);
		// 	} else if (Array.isArray(arg)) {
		// 		getParam.push(getParameters.apply(null, arg));
		// 	} else if (argType === 'object') {
		// 		for (var key in arg) {
		// 			if (hasOwn.call(arg, key) && arg[key]) {
		// 				getParam.push(key);
		// 			}
		// 		}
		// 	}
		// }

		return getParam.join('?');
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
