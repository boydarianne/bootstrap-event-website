'use strict';

console.log ("hello world")


function getFirstName(event) {
event.preventDefault();

const value = event.target.value;

console.log(value)
console.log(event)
}



function getLastName(event) {
    event.preventDefault();
    
    const value = event.target.value;
    
    console.log(value)
    }