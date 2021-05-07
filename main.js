/*Istruzioni:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti.
4. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
5.Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/



// 1.
var student = {
    'name' : 'Federico',
    lastName : 'Celia',
    age:  2021 - 1989,
} 
console.log(student);
// 2.
for(var key in student){
    console.log(student[key]);
}