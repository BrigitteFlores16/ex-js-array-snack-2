//Crea una funzione che somma due numeri.
//Crea un array (longBooks) con i libri che hanno più di 300 pagine;
//Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
//Stampa in console ogni titolo nella console.

function sommaDueNumeri(a, b) {
  return a + b;
}
const longBooks = books.filter((book) => book.pages > 300);
const longBooksTitles = longBooks.map((book) => book.title);
longBooksTitles.forEach((title) => console.log("titolo:" + title));
