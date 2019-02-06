import React, { Component } from 'react';
import './ItemTag.css'

class ItemTag extends Component {

  render() {
    return (
      <div className="Item-tag_wrapper" onClick={() => this.props.tagClick(this.props.tag)}>
        #{this.props.tag}
      </div>
    );
  }
}

export default ItemTag;
