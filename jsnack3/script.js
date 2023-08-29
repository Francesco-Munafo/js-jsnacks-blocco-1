/*

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

let numberList = []
let numberSum = 0


// Creo un ciclo per aggiungere i numeri dati dall'utente all'array
for (let i = 0; i < 10; i++) {
    const userNumber = prompt('Scegli un numero');
    numberList.push(userNumber);
    
}

// Creo un ciclo che farà la somma dei numeri aggiunti all'array dal ciclo precedente

for (let i = 0; i < numberList.length; i++) {
    numberSum += Number(numberList[i])
    
}
alert(numberSum);


