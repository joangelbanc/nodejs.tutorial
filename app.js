// primero
/*const tutoral = require("./tutorial");

console.log(tutoral);

console.log(tutoral.sum(1, 15));
console.log(tutoral.PI);
console.log(new tutoral.SomeMathObject());



//segundo
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();



eventEmitter.on('tutorial', () => {
    console.log('tutorial event has  occurred');
});

eventEmitter.emit('tutorial', 1, 2);


// tercero
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;

    }

    get name() {
        return this._name;
    }
}


let pedro = new Person('Pedro');
let chistina = new Person('chistina')

chistina.on('name', () => {
    console.log('my name is ' + chistina.name);

});


pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');
chistina.emit('name');

// cuartrp


const readline = require('readline');
const { TLSSocket } = require("tls");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num1 } ? \n`,
    (userImput) => {
        if (userImput.trim() == answer)
            rl.close();
        else {
            rl.setPrompt('Incorrecoto responda de nuevo \n');
            rl.prompt();
            rl.on('line', (userImput) => {
                if (userImput.trim() == answer)
                    rl.close();
                else {
                    rl.setPrompt(`Yoyr answer of ${ userImput}  es incorreto pruebe de nuevo \n`)

                }

            })
        }
        //console.log(userImput);

    });

rl.on('close', () => {
    console.log('Correcto');
});

*/
// cinco

//const fs = require('fs');
//crear archivo
/*
fs.writeFile('example.txt', "este es un ejemplo", (err) => {
    if (err)
        console.log(err);
    else
        console.log('archivo creado');
    fs.readFile('example.txt', 'utf8', (err, file) => {
        if (err)
            console.log(err);
        else
            console.log(file);



    });
});

fs.rename('example.txt', 'example2.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log('se modifica archivo');
});
*/
/*
fs.appendFile('example2.txt', 'n/ some adate being appended', (err) => {
    if (err)
        console.log(err);
    else
        console.log('se modifica archivo');
});
*/


/*
fs.unlink('example2.txt', (err) => {
    if (err)
        console.log(err);
    else
        console.log('se elimino el archivo');
});
*/


//capitulo 6
/*
const fs = require('fs');
fs.mkdir('tutrial', (err) => {
    if (err)
        console.log(err);
    else
        console.log('se creo carpeta');
});
*/

// ocho
/*
const http = require('http');

const server = http.createServer((req, res) => {
    //res.write('hello word from nodejs');
    //res.end();
    if (req.url == '/') {
        res.write('hello word from nodejs.');
        res.end();
    } else {
        res.write('otro dominio.');
        res.end();
    }
});

server.listen('3000');

*/


/*
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    //const readStream = fs.createReadStream('./index.html');
    //res.writeHead(200, { 'Contec-type': 'text/html' });

    //const readStream = fs.createReadStream('./ejemplo.json');
    //res.writeHead(200, { 'Contec-type': 'application/json' });

    const readStream = fs.createReadStream('./descarga.jpg');
    res.writeHead(200, { 'Contec-type': 'image/jpg' });

    readStream.pipe(res);


}).listen('3000');

*/


/*

const _ = require('lodash');;
let example = _.fill([1, 2, 3, 4, 5], "banana", 1, 4);
console.log(example);

*/

/*
//const { Console } = require('console');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');


const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.get('/', (req, res) => {
    //res.send('hellos word');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

    const schema = Joi.object().keys({
        usuario: Joi.string().trim().email().required(),
        pass: Joi.string().min(5).max(10).required

    });

    schema.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err);
            res.send('ocurrio un error');
        }
        console.log(result);
        res.send('succesfullu posted data');
    });
    //database work here

    //res.send('succes');
    res.json({ succes: true });

});

app.get('/example', (req, res) => {
    res.send('hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    // res.send('hitting example parametros');
    res.send(req.params.name + '  : ' + req.params.age);

});

app.listen(3000);

*/

const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const arrayObjects = [{ example: 'example1' }, { example: 'example2' } { example: 'example3' }];

const userImput = {
    personalInfo: {
        streetAddres: '12456798',
        city: 'bogota',
        state: 'fl'

    },
    prefererences: arrayString

};


const personalInfoSchema = Joi.object().keys({
    streetAddres
    city: Joi.string().trim().required(),
    state: Joi.string().length(2).required()
})

//const prefererencesSchema =


//"hola bienvenida a casa"
//"otra transformacion"