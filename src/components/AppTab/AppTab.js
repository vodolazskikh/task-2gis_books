import React, { Component } from 'react';
import './AppTab.css';

class AppTab extends Component {
  getTabSideClass() {
    let tabClass = '';
    if (this.props.tabPosition === 'center') {
      tabClass = 'AppTab-wrapper AppTab-wrapper_center AppTab-Tab_'+this.props.tabClass;
    } else {
      tabClass = 'AppTab-wrapper AppTab-Tab_'+this.props.tabClass;
    }
    return tabClass;
  }

  render() {
    return (
      <div className = {this.getTabSideClass()} onClick={() => { this.props.statusSelect(this.props.selector)}}>
        {this.props.tabName} ({this.props.booksNum})
      </div>
    );
  }
}

export default AppTab;
