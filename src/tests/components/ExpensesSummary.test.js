import React from "react";
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with one expense snapshot', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenses={expenses[0]} 
            expenseCount={1} 
            expensesTotal={195}
        />
    )
    expect(wrapper).toMatchSnapshot();
}) 

test('should render ExpensesSummary with two expenses snapshot', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenses={expenses} 
            expenseCount={3} 
            expensesTotal={24195}
        />
    )
    expect(wrapper).toMatchSnapshot();
}) 

