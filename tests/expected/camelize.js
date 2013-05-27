
var sql = require('sql');


/**
 * SQL definition for node_sql_generate.bar
 */
exports.bar = sql.define({
	name: 'bar',
	columns: [
		{ name: 'id', property: 'id' },
		{ name: 'foo_id', property: 'fooId' }
	]
});


/**
 * SQL definition for node_sql_generate.foo
 */
exports.foo = sql.define({
	name: 'foo',
	columns: [
		{ name: 'id', property: 'id' },
		{ name: 'field_1', property: 'field1' },
		{ name: 'foo_bar_baz', property: 'fooBarBaz' }
	]
});


