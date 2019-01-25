import React, { Component } from 'react';

import './Breadcrumb.scss';

class Breadcrumb extends Component {
  render() {
    return (
      <div class="heading">
        <span>{this.props.pagetitle}</span>
        <span class="current">/ <a href="/">{this.props.pagesubtitle}</a></span>
      </div>
    );
  }
}

export default Breadcrumb;