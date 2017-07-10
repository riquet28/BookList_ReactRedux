export function selectBook(book) {
  // selectBook est un actionCreator, il a besoin de retourner une action,
  // un objet avec une propriété type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
