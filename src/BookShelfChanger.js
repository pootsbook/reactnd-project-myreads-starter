import React, { Component } from 'react';

class BookShelfChanger extends Component {
  shelfChanged = (shelf) => {
    this.props.shelveBook(this.props.book, shelf);
  };

  render = () => {
    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf || "none"} onChange={(event) => this.shelfChanged(event.target.value)}>
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
