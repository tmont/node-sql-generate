
var sql = require('sql');


/**
 * SQL definition for node_sql_generate.bar
 */
exports.bar = sql.define({
	name: 'bar',
	columns: [
		'id',
		'foo_id'
	]
});


/**
 * SQL definition for node_sql_generate.foo
 */
exports.foo = sql.define({
	name: 'foo',
	columns: [
		'id',
		'field_1',
		'foo_bar_baz'
	]
});


