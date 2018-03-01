import React, { Component } from 'react';

class BookShelfChanger extends Component {
  state = {
    updatedShelf: null
  }

  shelfChanged = (shelf) => {
    this.props.shelveBook(this.props.book, shelf);
    this.setState({ updatedShelf: shelf })
  };

  calculateShelf = (book) => {
    if (this.state.updatedShelf) {
      return this.state.updatedShelf;
    };
    if (this.props.shelvedBooks) {
      var book = this.props.shelvedBooks.filter(shelvedBook => book.id === shelvedBook.id)[0];
      if (book) {
        return book.shelf || "none";
      } else {
        return "none";
      }
    };
  }

  render = () => {
    const { book, shelvedBooks } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          value={this.calculateShelf(book)}
          onChange={(event) => this.shelfChanged(event.target.value)}
          >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  };
};

export default BookShelfChanger;
