import React from 'react';
import { Route } from 'react-router-dom';
import ListBookshelves from './ListBookshelves';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  shelveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.loadBooks());
  };

  loadBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.loadBooks();
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBookshelves
            books={this.state.books}
            shelveBook={this.shelveBook}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            shelveBook={this.shelveBook}
            shelvedBooks={this.state.books}
          />
        )} />
      </div>
    );
  };
};

export default BooksApp;
