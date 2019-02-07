import React, { Component } from 'react';
import './ItemButton.css'

class ItemButton extends Component {
  changeStatus() {
    //Смена статуса книги
    let status;
    if (this.props.selectedStatus === 'toread') {
      status = 'inprogress'
    } else if (this.props.selectedStatus === 'inprogress') {
      status = 'done'
    } else {
      status = 'toread'
    }
    return status;
  }

  render() {
    return (
      <div className="Item-button_wrapper" onClick={() => { this.props.changeStatus(this.changeStatus())}}>
        {this.props.caption}
      </div>
    );
  }
}

export default ItemButton;
