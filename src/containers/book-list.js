import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Le retour de cette fonction apparaîtra comme des props dans BookingList
  return {
    books: state.books
  };
}

// Tout ce qui est retourné par cette fonction terminera en props
// dans BookingList
function mapDispatchToProps(dispatch) {
  // Quand selectBook est apellé, le resultat devra passer
  // par tous les reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promouvoir Booklist d'un composant à un conteneur - il doit connaître
// cette nouvelle méthode de distribution, selectBook. Rendez-le disponible
// comme props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
