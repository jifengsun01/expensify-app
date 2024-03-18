import React from "react";
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = (props) => (
    <div>
        <h1>
            Viewing {props.expenseCount} expense{props.expenseCount !== 1 ? 's' : ''} totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenses: visibleExpenses,
        expenseCount: visibleExpenses.length, // Calculate expense count based on filtered expenses
        expensesTotal: getExpensesTotal(visibleExpenses) // Calculate total based on filtered expenses
    };
};

export default connect(mapStateToProps)(ExpensesSummary);