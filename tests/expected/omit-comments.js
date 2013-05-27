var sql = require('sql');


exports.bar = sql.define({
	name: 'bar',
	columns: [
		{ name: 'id' },
		{ name: 'foo_id' }
	]
});


exports.foo = sql.define({
	name: 'foo',
	columns: [
		{ name: 'id' },
		{ name: 'field_1' },
		{ name: 'foo_bar_baz' }
	]
});


