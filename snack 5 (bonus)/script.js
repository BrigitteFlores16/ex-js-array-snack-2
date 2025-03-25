//Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare utilizzare l'url base:https://boolean-spec-frontend.vercel.app/freetestapi
//al posto di:https://freetestapi.com/api/v1

//Ad esempio:
//https://boolean-spec-frontend.vercel.app/freetestapi/users
//per chiamare l'endpoint /users

//Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(),
//per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
//Testala con l’array [2, 13, 7, 21, 19] .

const URL = "https://boolean-spec-frontend.vercel.app/freetestapi/books/";

function getBooks(ids) {
  return Promise.all(
    ids.map((id) =>
      fetch(`${URL}${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Errore ${id}: ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => {
          console.error(error);
          return null;
        })
    )
  ).then((books) => books.filter((book) => book !== null));
}

const ids = [2, 13, 7, 21, 19];
getBooks(ids).then((books) => {
  console.log("Books:", books);
});
