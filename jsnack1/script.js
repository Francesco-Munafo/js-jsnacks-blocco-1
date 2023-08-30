/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/*

let userNumber1 = prompt('Scegli un numero');
let userNumber2 = prompt('Scegli un altro numero');

if (userNumber1 > userNumber2) {
    alert(userNumber1);
} else {
    alert(userNumber2);
}
*/


// WHILE SOLUTION

let i = 1;
const whileNumberList = []

while (i <= 2) {
    const whileUserNumber = Number(prompt('Scegli un numero'))

    if (isNaN(whileUserNumber)) {
        i--
    } else {
        whileNumberList.push(whileUserNumber)
        i++
    }
}

if (whileNumberList[0] > whileNumberList[1]) {

    alert(whileNumberList[0])
    
} else {
    alert(whileNumberList[1])
}