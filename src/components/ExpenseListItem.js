import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
// import { connect } from "react-redux"
// import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({id, description,amount,createdAt}) => (
    <Link className="list-item" to={`/edit/${id}`} >
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>

        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>

    </Link>     
);


// const ExpenseListItem = (props) => (
//     <div>
//         <h3>{props.description}</h3>
//         <p>{props.amount} - {props.createdAt}</p>
//     </div>
// );



export default ExpenseListItem