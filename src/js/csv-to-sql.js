const fs = require('fs');
const csv = require('csv-parser');

if (process.argv.length < 4) {
    console.log('Usage: node csv_to_sql.js <input_csv_file> <output_sql_file>');
    process.exit(1);
}

const inputCsvFile = process.argv[2];
const recursive = inputCsvFile.split('\\').length
const outputSqlFile = process.argv[3];
const tableName = inputCsvFile.split('.')[0].split('\\')[recursive-1]; // Default table name

const headers = [];

// Create a write stream for the SQL file
const sqlFileStream = fs.createWriteStream(outputSqlFile);

// Read CSV file and process it
fs.createReadStream(inputCsvFile)
  .pipe(csv())
  .on('headers', (headerList) => {
    // Store the headers
    headers.push(...headerList);

    // Write the SQL command to create the table
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${tableName} (${headers.map(header => `"${header}" TEXT`).join(', ')});\n`;
    sqlFileStream.write(createTableQuery);
  })
  .on('data', (row) => {
    // Write the SQL command to insert the row
    const insertQuery = `INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${headers.map(header => `'${row[header].replace(/'/g, "''")}'`).join(', ')});\n`;
    sqlFileStream.write(insertQuery);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    sqlFileStream.end(() => {
      console.log(`SQL file created successfully: ${outputSqlFile}`);
    });
  });
