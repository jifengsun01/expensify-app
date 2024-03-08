import React from "react";
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expenses) => {
                    return <ExpenseListItem key={expenses.id} {...expenses}/>;
                })
            )
        }
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
