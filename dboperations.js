var config = require('./database');
const sql = require('mssql');


async function getTest() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from test");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getTests(testId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, testId)
            .query("SELECT * from test where id = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function addTest(test) {

    try {
        let pool = await sql.connect(config);
        let insertTest = await pool.request()
            .input('Id', sql.Int, test.id)
            .input('Firstname', sql.NVarChar, test.firstname)
            .input('Lastname', sql.NVarChar, test.lastname)
            .input('Password', sql.NVarChar, test.password)
            //.query('INSERT INTO test (id, firstname, lastname, password) VALUES (@id, @firstname, @lastname, @password)')
            .execute('spAddTest')
        return insertTest.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}


module.exports = {
    getTest: getTest,
    getTests: getTests,
    addTest: addTest

}