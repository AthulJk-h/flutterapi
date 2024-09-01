const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
app.use(bodyParser.json());

// MSSQL connection configuration
const config = {
  user: 'sa',
  password: 'Login@123',
  server: 'ATHULJK\\SQLEXPRESS', // You can use 'localhost\\instance' to connect to named instance
  database: 'company',
  options: {
    encrypt: false, // Use true if you're on Windows Azure
    enableArithAbort: true,
    instanceName: 'SQLEXPRESS', // Add the instance name
    trustServerCertificate: true, // Add this option for self-signed certificates
    trustedconnection: true
  }

};


module.exports = config;