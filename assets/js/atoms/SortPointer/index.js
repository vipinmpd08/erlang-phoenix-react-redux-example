import React, { Component } from 'react';

import './SortPointer.scss';

class SortPointer extends Component {
    render() {
        return (
            <i class={this.props.pointerclass}></i>                                               
        );
    }
}

export default SortPointer;