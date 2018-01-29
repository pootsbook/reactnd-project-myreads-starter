import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

class ListBookshelves extends Component {
  render = () => {
    const { books } = this.props;
    const shelves = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want to Read',
      read: 'Read'
    };

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Object.entries(shelves).map((bookshelf) => (
              <Bookshelf
                title={bookshelf[1]}
                books={books.filter(book => book.shelf === bookshelf[0])}
                key={bookshelf[0]}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  };
};

export default ListBookshelves;
