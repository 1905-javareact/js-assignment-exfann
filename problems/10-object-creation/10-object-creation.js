/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

objLiteral = {
    name: 'Eva',
    age: 23
}

function ObjFun(name, age){
    this.name = name
    this.age = age
}

class Obj {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

let Tal = new ObjFun('Tal', 25)

let Taly = new Obj('Taly', 29)

console.log(`objLiteral = ${objLiteral}
objFun = ${Tal}
Obj = ${Taly}`)