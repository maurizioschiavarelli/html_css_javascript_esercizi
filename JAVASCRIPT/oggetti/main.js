//oggetti

//Crea un oggetto "Person" con le proprietà "nome" e "età".

let Person = {
    name : 'Maurizio',
    age : 28,
};

Person.name // accedere alle proprieta di un oggetto ,in questo caso alla proprieta 'name';
Person.age // accedere alle proprieta di un oggetto ,in questo caso alla proprieta 'age';

Person.age = 18; //modifica la proprieta age dell'oggetto Persona;

Person.sex = 'Uomo'; //aggiunge una proprieta all'oggetto Person;

//delete Person.name;

//delete Person.sex;

//delete Person.age; // con la keyword delete rimuoviamo una proprieta dall'oggetto Person;


for(let key in Person){

    if (Object.keys(key).length === 0) {
        console.log('questo oggetto non ha nessuna proprieta');
    }

    if (key === 'sex'){
        console.log(`questo oggetto ha una proprieta chiamata sex`);
        
    }else if(key === 'name'){
        console.log(`questo oggetto ha una proprieta chiamata name`);
        
    }else if(key === 'age'){
        console.log(`questo oggetto ha una proprieta chiamata age`);

    }

    //console.log(`${key} ${Person[key]}`)
}





// console.log(`Nome : ${Person.name}`);
// console.log(`Etá : ${Person.age}`);
console.log(Person);