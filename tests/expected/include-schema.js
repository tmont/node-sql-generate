
var sql = require('sql');


/**
 * SQL definition for node_sql_generate.bar
 */
exports.bar = sql.define({
	name: 'bar',
	schema: 'node_sql_generate',
	columns: [
		{ name: 'id' },
		{ name: 'foo_id' }
	]
});


/**
 * SQL definition for node_sql_generate.foo
 */
exports.foo = sql.define({
	name: 'foo',
	schema: 'node_sql_generate',
	columns: [
		{ name: 'id' },
		{ name: 'field_1' },
		{ name: 'foo_bar_baz' }
	]
});


