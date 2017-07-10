// Le state argument n'est pas celui de l'appli, seulement le state
// dont ce reducer est responsable

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }

  return state
}
