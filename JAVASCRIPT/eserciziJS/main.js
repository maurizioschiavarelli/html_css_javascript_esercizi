//(1)Scrivi una funzione sum(a, b) che prende due numeri come argomenti e restituisce la loro somma.

function sum(a,b){
    return a + b;
}

sum(5,5);

// -------------------------------------------------------------------------

const sum1 = function(a,b){
    return a + b;
}

// -------------------------------------------------------------------------

const sum2 = (a,b)=>{
    return a + b;
}

// -------------------------------------------------------------------------

const sum3 = (a,b) => a+b;

// -------------------------------------------------------------------------

const sum4 = (a,b) => {return a+b};


// console.log(sum4(8,8));

// console.log(sum3(7,7));

// console.log(sum2(6,6));

// console.log(sum1(5,6));

// console.log(sum(5,5));


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//(2)Scrivi una funzione isEven(n) che prende un numero come argomento e restituisce true se il numero è pari, altrimenti false.


function isEven(n){
    if( n % 2 === 0){
        console.log(`Il numero scelto (${n}) é pari`);
        return true;
    }else{
        console.log(`Il numero scelto (${n}) é dispari`);
        return false;
    }
}

// -------------------------------------------------------------------------

const isEven1 = function (n){
    if( n % 2 === 0){
        console.log(`Il numero scelto (${n}) é pari`);
        return true;
    }else{
        console.log(`Il numero scelto (${n}) é dispari`);
        return false;
    }
}

// -------------------------------------------------------------------------

const isEven2 = n => {
    if( n % 2 === 0){
        console.log(`Il numero scelto (${n}) é pari`);
        return true;
    }else{
        console.log(`Il numero scelto (${n}) é dispari`);
        return false;
    }
}

// -------------------------------------------------------------------------

const isEven3 = n => n % 2 === 0 ?  true : false;


// console.log(isEven3(11));

// console.log(isEven2(9));

// console.log(isEven1(7));

// console.log(isEven(5));


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//(3)Scrivi una funzione stringLength(str) che prende una stringa come argomento e restituisce la sua lunghezza.

const stringTest = 'Hello world';
const stringTest2 = 'Try another string';
const stringTest3 = 'Another one';
const stringTest4 = 'last one';
const stringTest5 = 'Try another string for compact arrow function';

function stringLength(string){
    return string.length;
}

// -------------------------------------------------------------------------

const stringLength1 = function(string){
    return string.length;
}

// -------------------------------------------------------------------------

const stringLength2 = string => {
    return string.length;
}

// -------------------------------------------------------------------------

const stringLength3 = string => {return string.length};

// -------------------------------------------------------------------------

const stringLength4 = string => string.length;


// console.log(stringLength4(stringTest5));

// console.log(stringLength3(stringTest4));

// console.log(stringLength2(stringTest3));

// console.log(stringLength1(stringTest2));

// console.log(stringLength(stringTest));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//(4)Scrivi una funzione findMax(arr) che prende un array di numeri come argomento e restituisce il numero massimo presente nell’array.

let numbers = [6, 7, 8, 9, 10, 15, 45, 23, 5, 34, 76, 2, 29, 87, 12];


function findMax(arr){
    return Math.max(...arr);
}

console.log(findMax(numbers));