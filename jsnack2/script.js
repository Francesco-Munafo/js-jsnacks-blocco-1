/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/*
let userWord1 = prompt('Scrivi una parola a caso');
let userWord2 = prompt("Scegli un'altra parola");

if (userWord1.length > userWord2.length) {
    alert(userWord2 + " " + userWord1);
} else {
    alert(userWord1 + " " + userWord2);
}
*/

// WHILE SOLUTION

let i = 1;
let userWordList = [];

while (i <= 2) {
    const userWord = prompt('Inserisci una parola')
    userWordList.push(userWord)
    i++

}
if (userWordList[0].length > userWordList[1].length) {

    alert('La parola' + " " + userWordList[1] + " " + "è più corta" + " " + "rispetto a" + " " + userWordList[0])

} else if (userWordList[0].length < userWordList[1].length){

    alert('La parola' + " " + userWordList[0] + " " + "è più corta" + " " + "rispetto a" + " " + userWordList[1])

} else {

    alert('La lunghezza delle parole è uguale')

}