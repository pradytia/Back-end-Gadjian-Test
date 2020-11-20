const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 1994;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, ()=> console.log(`Api Aktif di Port ${port}`));

//=======CREATE TABLE EMPLOYEE

// CREATE TABLE `employees` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `name` VARCHAR(50) NOT NULL,
//     `phone_number` VARCHAR(16) NULL,
//     `jobtitle` VARCHAR(25) NULL,
//     PRIMARY KEY (`id`));
// );  

//=========== SETUP DB ================\\

const db = mysql.createConnection({
    host  : 'localhost',
    user : 'root',
    password : 'abc123',
    database : 'employee'
});

//===============

app.get('/api/employees', (req,res) => {

    var sql = 'SELECT * FROM employees';

    db.query(sql, (err, result) => {
        if(err) return res.status(500).send({ message : 'Database eror', err})

        res.status(200).send(result);
    })
});


app.get('/api/employees/:id', (req,res) => {

    var sql = `SELECT * FROM employees WHERE id = ${db.escape(req.params.id)}`;

    db.query(sql, (err, result) => {
        if(err) return res.status(500).send({ message : 'Database eror', err})

        res.status(200).send(result);
    })
});


app.post('/api/employees', (req,res) => {

    var sql = `INSERT INTO employees SET ? `
    var data = {};
    data["name"] = "test";
    data["phone_number"] = "0821";
    data["jobtitle"] = "employee";


    db.query(sql, data, (err, result)=>{
        if(err) return res.status(500).send({message : 'Add Employees failed' , err})

        res.status(201).send(result)
    })
});


app.put('/api/employees/:id', (req,res) => {

    var sql = `UPDATE employees SET ? WHERE id = ${db.escape(req.params.id)}`;
    var data = {};
    data["name"] = "test";
    data["phone_number"] = "0821";
    data["jobtitle"] = "employee";

    db.query(sql, data, (err, result)=>{
        if(err) return res.status(500).send({message : 'Edit Employee failed' , err})

        res.status(200).send(result)
    })
});

app.delete('/api/employees/:id', (req,res) => {

    var sql = `DELETE FROM employees WHERE id = ${db.escape(req.params.id)}`

    db.query(sql, (err, result)=>{
        if(err) return res.status(500).send({message : 'Delete employee failed' , err})

        res.status(204).send()
    })
});

app.post('/api/reverse', (req,res) => {

    var sql = `INSERT INTO employees SET ? `
    var data = {};
    data["character"] = "test";


    db.query(sql, data, (err, result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
});

app.post('/api/fibonacci', (req,res) => {

    var sql = `INSERT INTO employees SET ? `
    var data = {};
    data["n"] = "test";


    db.query(sql, data, (err, result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
});

app.post('/api/combination', (req,res) => {

    var sql = `INSERT INTO employees SET ? `
    var data = {};
    data["n"] = "4";
    data["r"] = "2";


    db.query(sql, data, (err, result)=>{
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
});

