import React, { Component } from 'react';

import './AccountSummaryBox.scss';

class AccountSummaryBox extends Component {
    render() {
        return (
            <div class="cornersbox">
                <div class="cornersbox_left">
                    <span class={"dot "+this.props.boxcolor}> </span>
                </div>
                <div class="cornersbox_right">
                    <div class="label">{this.props.label}</div>
                    <div class="value">{this.props.value}</div>
                </div>
            </div>
        );
    }
}

export default AccountSummaryBox;