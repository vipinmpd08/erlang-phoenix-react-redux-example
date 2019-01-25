import React, { Component } from 'react';

import AccountSummaryBox from '../../molecules/AccountSummaryBox'

import './AccountDetails.scss';

class AccountDetails extends Component {
    render() {
        return (
            <div class="accountdetails">
                <span>Account Details</span>

                <div class="boxes">
                    <AccountSummaryBox boxcolor='orange' label="Trading Limit" value="AED 193, 655,555.00"/>
                
                    <AccountSummaryBox boxcolor='green' label="Security Deposit" value="AED 500, 000,000.00"/>

                    <AccountSummaryBox boxcolor='red' label="Account Balance" value="AED 5,344,500.00"/>
                </div>
            </div>
        );
    }
}

export default AccountDetails;