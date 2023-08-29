/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let userWord1 = prompt('Scrivi una parola a caso');
let userWord2 = prompt("Scegli un'altra parola");

if (userWord1.length > userWord2.length) {
    alert(userWord2 + " " + userWord1);
} else {
    alert(userWord1 + " " + userWord2);
}