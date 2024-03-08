import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

// test('render ExpenseListItem correctly', () => {
//     const wrapper = shallow(
//         <ExpenseListItem 
//         id={expenses[0].id} 
//         description={expenses[0].description}
//         amount = {expenses[0].amount}
//         createdAt = {expenses[0].createdAt}
//         />);
//     expect(wrapper).toMatchSnapshot();
// })

test('render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})