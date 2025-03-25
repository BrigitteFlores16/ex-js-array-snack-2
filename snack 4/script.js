//Creare un array (ages) che contiene le età degli autori dei libri.
//Calcola la somma delle età (agesSum) usando reduce.
//Stampa in console l’età media degli autori dei libri.

const ages = books
  .sort((a, b) => a.author.age - b.author.age)
  .map((book) => book.author.age);
console.log(ages);

const agesSum = ages.reduce((total, age) => total + age, 0);
console.log(agesSum);

const averageAge = agesSum / ages.length;
console.log(averageAge.toFixed(2));
