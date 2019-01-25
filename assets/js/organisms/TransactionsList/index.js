import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SortPointer from '../../atoms/SortPointer'

import './TransactionList.scss';

class TransactionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transactions: this.props.transactions,
            sortBy: 'date',
            sortType: 'A',
            searchQuery: ''
        };
    }

    doTransactionSort = (sortBy) => {
        const { transactions, sortType } = this.state;
        const newsortType = sortType === 'A' ? 'D' : 'A';

        //JS Sort
        const sortedTransactions = transactions.sort((left, right) => {
            if (left[sortBy] === right[sortBy]) return 0;
            const result = (left[sortBy] < right[sortBy]) ? -1 : 1;
            return newsortType === 'A' ? result : result * -1;
        });

        //Update States with new sorted list
        this.setState(
            {
                transactions: sortedTransactions,
                sortType: newsortType,
                sortBy
            }
        );
    }


    /**
     * 
     */
    doTransactionSearch = (e) => {

        let query = e.target.value;

        this.setState({
            searchQuery: query
        }, () => {
            
            //Start search if the length is more than 2
            if (query.length == 0 || query.length > 2) {
                this.setState({
                    transactions: this.doArrayFilter(this.props.transactions, query),
                });
            }
        });

    }

    /**
     * Simple javascript text search
     */
    doArrayFilter = (transactions, searchQuery) => {
        return transactions.filter((transaction) => {
            const find = Object.keys(transaction).find((key) => {
                const value = transaction[key].toUpperCase();
                return value.indexOf(searchQuery.toUpperCase()) > -1;
            });
            return find;
        });
    }

    render() {
        return (
            <React.Fragment>
                {/*  Heading and search box  */}
                <div class="heading_section">
                    <div class="title">
                        <h2 class="heading">Transactions</h2>
                    </div>
                    <div class="searchbox">
                        <div class="searchwidget">
                            <div class="searchwidget">
                                <form action="/" method="get">
                                    <span>
                                        <input name="query" placeholder="Search transactions..." value={this.state.searchQuery} onChange={this.doTransactionSearch} class="search rounded" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  Transaction table  */}
                <div class="table_section">
                    <table class="data-table">
                        {/*  Table Header with sort actions */}
                        <thead>
                            <tr>
                                <th>
                                    <a onClick={() => this.doTransactionSort('date')}>Date</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'date' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'date' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                                <th>
                                    <a onClick={() => this.doTransactionSort('ref_no')}>Ref No</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'ref_no' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'ref_no' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                                <th>
                                    <a onClick={() => this.doTransactionSort('order_no')}>Order No</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'order_no' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'order_no' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                                <th>
                                    <a onClick={() => this.doTransactionSort('payment_type')}>Payment Type</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'payment_type' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'payment_type' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                                <th>
                                    <a onClick={() => this.doTransactionSort('total_amount')}>Total Amount</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'total_amount' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'total_amount' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                                <th>
                                    <a onClick={() => this.doTransactionSort('balance')}>Balance</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'balance' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'balance' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                                <th>
                                    <a onClick={() => this.doTransactionSort('status')}>Status</a>
                                    <SortPointer pointerclass={this.state.sortBy === 'status' && this.state.sortType === 'A' ? "arrow down" : "hidden"} />
                                    <SortPointer pointerclass={this.state.sortBy === 'status' && this.state.sortType != 'A' ? "arrow up" : "hidden"} />
                                </th>
                            </tr>
                        </thead>
                        {/*  Lit of Transactions  */}
                        <tbody>
                            {this.state.transactions.map(transaction => (
                                <tr key={transaction.date}>
                                    <td><span class="reddot"></span>{transaction.date}</td>
                                    <td>{transaction.ref_no}</td>
                                    <td>{transaction.order_no}</td>
                                    <td>{transaction.payment_type}</td>
                                    <td>{transaction.total_amount}</td>
                                    <td>{transaction.balance}</td>
                                    <td>{transaction.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default TransactionList;
