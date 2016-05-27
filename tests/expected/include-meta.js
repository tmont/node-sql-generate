
var sql = require('sql');


/**
 * SQL definition for node_sql_generate.bar
 */
exports.bar = sql.define({
	name: 'bar',
	columns: [
		{ name: 'id', type: 'int', nullable: false, charLength: null },
		{ name: 'foo_id', type: 'int', nullable: false, charLength: null }
	]
});


/**
 * SQL definition for node_sql_generate.foo
 */
exports.foo = sql.define({
	name: 'foo',
	columns: [
		{ name: 'id', type: 'int', nullable: false, charLength: null },
		{ name: 'field_1', type: 'varchar', nullable: true, charLength: 30 },
		{ name: 'foo_bar_baz', type: 'char', nullable: true, charLength: 255 }
	]
});


