import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render = () => {
    const { title, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book book={book} key={book.id} />
            ))}
          </ol>
        </div>
      </div>
    );
  };
};

export default Bookshelf;
