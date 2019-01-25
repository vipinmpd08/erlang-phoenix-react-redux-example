import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import PropTypes from 'prop-types';

import { fetchTransactionData, fetchTransactionDataSuccess, fetchTransactionDataFailure } from '../../actions/transactiondata';
import Breadcrumb from '../../organisms/Breadcrumb'
import TransactionList from '../../organisms/TransactionsList'
import AccountDetails from '../../organisms/AccountDetails'

import './TransactionsScene.scss';


export class TransactionsScene extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingStatus: false,
            transactionsData: [],
        };
    }

    componentWillMount() {
        this.props.fetchTransactionData();
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        console.log(this.props.transactionsData);

        return (
            <div class="flex-container">

                {/* Heading section */}
                <Breadcrumb pagetitle="Customer List" pagesubtitle="Customer Details" />

                {/*  Account Details Dashboard */}
                <AccountDetails />

                {/*  Transactions Search and List*/}
                <div class="transactions">

                    {this.props.loadingStatus && <p>Loading transactions...</p>}

                    {this.props.transactionsData && this.props.transactionsData.transactions &&
                        <TransactionList transactions={this.props.transactionsData.transactions} />}
                </div>
            </div>

        );
    }
}

/**
 * Map function from state to props
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
        transactionsData: state.transactionsReducer.transactionsData.trans.data,
        loadingStatus: state.transactionsReducer.transactionsData.loading
    };
}

/**
 * dispatcher function
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchTransactionData,
        fetchTransactionDataSuccess,
        fetchTransactionDataFailure
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScene);