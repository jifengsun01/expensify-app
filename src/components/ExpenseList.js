import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expenses) => {
                    return <ExpenseListItem key={expenses.id} {...expenses}/>;
                })
            )
        }
        </div>
    </div>
);

// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
        
//         {props.expenses.map((expenses) => {
//             return <ExpenseListItem 
//                     key={expenses.id} 
//                     description = {expenses.description}
//                     amount = {expenses.amount}
//                     createdAt = {expenses.createdAt}
//                     />
//         })}
//     </div>
// );



const mapStateToProps = (state) => {
    return {
       expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
