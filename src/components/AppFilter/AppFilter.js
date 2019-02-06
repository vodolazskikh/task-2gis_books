import React, { Component } from 'react';
import './AppFilter.css'
import ItemTag from '../ItemTag/ItemTag';

class AppFilter extends Component {
  render() {
    if (this.props.filterTags.length > 0) {
      return (
        <div className="App-filter_wrapper">
          <span>Filtered by tags: </span>{this.props.filterTags.map((tag, index) =>
            <ItemTag
              key= {index}
              tag = {tag}
              tagClick = {this.props.tagClick}
            />
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AppFilter;
