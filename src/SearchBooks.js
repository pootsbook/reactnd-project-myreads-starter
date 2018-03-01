import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book.js';
import * as BooksAPI from './BooksAPI';
import { DebounceInput } from 'react-debounce-input';

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  };

  updateQuery = (query) => {
    let trimmedQuery = query.trim();
    this.setState({ query: trimmedQuery })
    if (trimmedQuery === '') {
      this.setState({ books: [] })
    } else {
      BooksAPI.search(trimmedQuery).then((books) => {
        if (!!books.error) {
          this.setState({ books: [] })
        } else {
          this.setState({ books: books });
        }
      });
    }
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render = () => {
    const { query, books } = this.state;
    const { shelveBook, shelvedBooks } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              placeholder="Search by title or author"
              value={query}
              minLength={1}
              debounceTimeout={300}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <p>Query: {this.state.query}</p>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                book={book}
                shelveBook={shelveBook}
                key={book.id}
                shelvedBooks={shelvedBooks}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;
