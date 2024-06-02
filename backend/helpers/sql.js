const { BadRequestError } = require("../expressError");


/**
 * dataToUpdate - The object containing the data to be updated.
 * jsToSql - A mapping of JavaScript object keys to corresponding SQL column names.
 * BadRequestError Throws a bad request error if there is no data to update.
 * Returns an object containing the SQL SET clause and parameter values for the update query.
 */


function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
