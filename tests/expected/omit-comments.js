var sql = require('sql');


exports.bar = sql.define({
	name: 'bar',
	columns: [
		'id',
		'foo_id'
	]
});


exports.foo = sql.define({
	name: 'foo',
	columns: [
		'id',
		'field_1',
		'foo_bar_baz'
	]
});


