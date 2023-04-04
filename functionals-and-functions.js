/*
Conditionals, Functions Scope and loops.


//Equals
let equals = 1 === 1;

// console.log(equals)

//greater than

let graderThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

//greater than
let greaterThaneq = 5 >= 5;

//Less Than Equals

let LessThanEq = 4 <= 9;

//Not Equals
let notEquals = 5 !== 2;


let storeA = 44.10;
let storeB = 88.10;

let storeAIsLower = storeA < storeB;

function compareStorePrices(storeA, StoreB) {
    let StoreAIsLower = storeA < StoreB ;
if(storeAIsLower) {
    console.log("Store A has a lower price")
}
else if (storeB < storeA) {
    console.log("Store B has a lower price ")
}
else {
    console.log("Their prices are the same")
    }

}

// compareStorePrices(10,5);
// compareStorePrices(7,24);

function squareNum(number){
    let squared = number * number;
    return squared;
}

let squaredNumber = squareNum(4)
// console.log(squaredNumber)

 */

/* scope


let x = 10;
function addNumbers (n, m, x) {
    console.log(x);
    let b
    if(1===1) {

    }
        console.log(b);
    return n + m;
}

*/

/*
next part

//                    0 1 2 3 4 5 6
//let ourArray = [1,2,3,4, ['a','b','c']];

let ourArray = [1,2,3,4,5,6,7];
// let newArr = ourArray[4]
// console.log(newArr[0]);

let arrLen = ourArray.length
for(let i= 0 ; i<arrLen; i++) {
//console.log("i is equal to " + i );
    console.log(ourArray[i]);
    for (let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j)
    }
}

*/

/*
let x = 0
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}

 */

/*
let dog = {
    name: "Steve",
    color: "brown",
    breed: "pug",
    size: "small",
    bark: function (typeOfBark){
        console.log("Bark!");
    },
};
// dog.bark();
 */

/*

function x(y) {
    y.num = y.num + 5;
    console.log(y);
}
let y = {
    name: "Tom",
    num: 10,
}
x(y);
console.log(y)

*/
