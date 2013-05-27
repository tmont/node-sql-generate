
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


/**
 * SQL definition for node_sql_generate.foo
 */
exports.foo = sql.define({
  name: 'foo',
  columns: [
    { name: 'id' },
    { name: 'field_1' },
    { name: 'foo_bar_baz' }
  ]
});


