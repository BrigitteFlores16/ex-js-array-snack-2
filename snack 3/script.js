//Creare un array (authors) che contiene gli autori dei libri.
//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
//Ordina l’array authors in base all’età, senza creare un nuovo array.
//(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

const authors = books.map((book) => book.author);
console.log(authors);

const areAuthorsAdults = authors.every((author) => author.age >= 18);
authors.sort((a, b) => {
  if (areAuthorsAdults) {
    return a.age - b.age;
  } else {
    return b.age - a.age;
  }
});
console.log(areAuthorsAdults);
