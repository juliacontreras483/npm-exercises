const $ = require('jquery');

const sayHello = () => console.log("hello");

sayHello();

$('body').css('background-color','blue');


// const data = require('./say-hello.js');
import data from './say-hello.js'


console.log(data());