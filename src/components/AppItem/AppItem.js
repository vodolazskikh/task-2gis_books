import React, { Component } from 'react';
import ItemTag from '../ItemTag/ItemTag';
import ItemButton from '../ItemButton/ItemButton';
import './AppItem.css';

class AppItem extends Component {
  getTags() {
    const tagsList = this.props.bookItem.tags.map((tag, index) =>
      <ItemTag
        tag={tag}
        key={index}
        tagClick={this.props.tagClick}
      />
    );
    return tagsList;
  }

  changeStatus = (value) => {
    //Смена статуса книги
    const book = this.props.bookItem;
    this.props.listFilter(book, value);
  }

  render() {
    const book = this.props.bookItem;
    return (
      <div className="App-item_wrapper">
        <div className="App-item-row">
          <div className="App-item-main">
            <div className="App-item-author">{book.author}</div>
            <div className="App-item-title">{book.title}</div>
          </div>
          <div className="App-item-button">
            <ItemButton
              caption={this.props.buttonCaption}
              changeStatus={this.changeStatus}
              selectedStatus={this.props.selectedStatus}
            />
          </div>
        </div>
        <div className="App-item-row">
          {book.description}
        </div>
        <div className="App-item-row_tags">
          {this.getTags()}
        </div>
      </div>
    );
  }
}

export default AppItem;
