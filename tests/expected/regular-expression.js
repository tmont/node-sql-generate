
var sql = require('sql');


/**
 * SQL definition for node_sql_generate.bar
 */
exports.bar = sql.define({
	name: 'bar',
	columns: [
		{ name: 'id' },
		{ name: 'foo_id' }
	]
});


