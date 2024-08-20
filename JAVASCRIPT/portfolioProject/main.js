
const aggettivi = ["felice", "triste", "veloce", "grande", "forte", "debole", "intelligente", ];

// Array di verbi
const verbi = ["correre", "saltare", "mangiare", "bere", "scrivere", "leggere", "parlare", "ascoltare", "dormire", "sognare"];

// Array di luoghi
const luoghi = ["Roma", "Parigi", "Londra", "New York", "Tokyo", "Sydney", "Berlino", "Mosca", "Pechino", "Rio de Janeiro"];

// Array di nomi di personaggi famosi
const personaggiFamosi = ["Leonardo da Vinci", "Albert Einstein", "Marie Curie", "Galileo Galilei", "Isaac Newton", "Charles Darwin", "Nikola Tesla", "Ada Lovelace", "Stephen Hawking", "Martin Luther King Jr."];


function indexCasualeArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generaFraseCasualeFemminile(nomeGiocatore) {
    console.log(`${nomeGiocatore} si sentiva molto ${indexCasualeArray(aggettivi)}, quindi é andata a ${indexCasualeArray(verbi)} in un paese vicino ${indexCasualeArray(luoghi)} con ${indexCasualeArray(personaggiFamosi)}`);
}

function generaFraseCasualeMaschile(nomeGiocatore) {
    console.log(`${nomeGiocatore} si sentiva molto ${indexCasualeArray(aggettivi)}, quindi é andato a ${indexCasualeArray(verbi)} in un paese vicino ${indexCasualeArray(luoghi)} con ${indexCasualeArray(personaggiFamosi)}`);
}

generaFraseCasualeFemminile('Naomi');

generaFraseCasualeMaschile('Maurizio');


