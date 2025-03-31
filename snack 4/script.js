//Creare un array (ages) che contiene le età degli autori dei libri.
//Calcola la somma delle età (agesSum) usando reduce.
//Stampa in console l’età media degli autori dei libri.

const ages = books.map((b) => b.author.age);

const agesTotal = ages.reduce((total, age) => total + age, 0);
console.log(`L'età media degli autori è: ${agesTotal / ages.length} anni`);
