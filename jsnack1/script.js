/*
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

let userNumber1 = prompt('Scegli un numero');
let userNumber2 = prompt('Scegli un altro numero');

if (userNumber1 > userNumber2) {
    alert(userNumber1);
} else {
    alert(userNumber2);
}