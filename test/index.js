/* global describe, it */

var assert = require('assert');
var createUrlQuery = require('../');

describe('createUrlQuery', function () {
	it('creates get param for url', function () {
		assert.equal(createUrlQuery({
			param1: 'value1',
			param2: 2,
			param3: null,
			param4: true,
			param5: {
				a: 1,
				b: 2,
				// subparam3: {
				// 	subsub3: 'subsub'
				// }
			}
		}), '?param1=value1&param2=2&param4=true&param5[a]=1&param5[b]=2');
	});

	it('returns empty string from empty object', function () {
		assert.equal(createUrlQuery({}), '');
	});

	it('returns empty string from no parameters', function () {
		assert.equal(createUrlQuery(), '');
	});

	it('returns empty string from string parameter', function () {
		assert.equal(createUrlQuery('test'), '');
	});
});
