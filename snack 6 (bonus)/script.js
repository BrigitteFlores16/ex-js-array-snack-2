//Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
//Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
//Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

const areThereAvailableBooks = books.some((book) => book.available);
console.log(areThereAvailableBooks);

const booksByPrice = books.slice().sort((a, b) => {
  const priceA = parseFloat(a.price.replace("€", ""));
  const priceB = parseFloat(b.price.replace("€", ""));
  return priceA - priceB;
});

booksByPrice.sort((a, b) => b.available - a.available);
console.log(booksByPrice);
