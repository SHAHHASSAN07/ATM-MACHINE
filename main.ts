#! /usr/bin/env node

import inquirer from "inquirer"
console.log("WELCOME TO SHAH HASSAN ATM MACHINE PROGRAM");


let myBalance = 12000; //Dollar

let myPin = 12345;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter YOUR PIN NUMBER",
            type:"number"
        
        }
    ]
);

if(pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!")

let operationAnswer = await inquirer.prompt(
    [
       {
          name:"operation",
          message:"select an option",
          type:"list",
          choices:['WITHDRAW','CHECK BALANCE']
       }
    ]
);
console.log(operationAnswer);

if (operationAnswer.operation == 'WITHDRAW'){
let amountAnswer = await inquirer.prompt(
    [
        {
          name: "amount",
          message: "enter your amount",
          type: "number"
        }
    ]
);

myBalance -= amountAnswer.amount;


console.log(`Your remainig balance is:  ${myBalance}`);

 } else if (operationAnswer.operation == "CHECK BALANCE"){
console.log(`Your balance is:  ${myBalance}`);
 }



} else {
    console.log("Incorrect pin")
}
