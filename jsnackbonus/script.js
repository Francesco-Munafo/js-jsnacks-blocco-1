/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/

// Creo un array vuoto
let numberList = [];

// Creo un ciclo per aggiungere i numeri dispari scelti dall'utente all'array
for (let i = 0; i < 6; i++) {
    const userNumber = prompt('Scegli un numero');
    if (userNumber % 2 == 0) {

    } else {
        numberList.push(userNumber);
    }
}

alert(numberList);



