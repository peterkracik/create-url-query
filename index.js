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
		if (!arguments || !arguments.length) {
			return "";
		}
		var arg 	= arguments[0],
			argType = typeof arg
		;

		if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
					var partParam = String(key) + "=" + String(arg[key]);
                    getParam.push(partParam);
                }
            }
        } else {
			return "";
		}

		var str = (getParam.length > 0) ? "?"+getParam.join('&') : "";
		return str;
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
