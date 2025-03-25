//Creare un array (availableBooks) che contiene tutti i libri disponibili.
//Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
//Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = books.filter((book) => book.available);
console.log(availableBooks);

const discountedBooks = availableBooks.map((book) => {
  const discountedPrice =
    (parseFloat(book.price.replace("€", "")) * 0.8).toFixed(2) + "€";

  return { ...book, price: discountedPrice };
});
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find((book) => {
  const priceValue = parseFloat(book.price.replace("€", ""));
  return Number.isInteger(priceValue);
});
console.log(fullPricedBook);
