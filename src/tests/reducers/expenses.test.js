import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test('set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]])
})


test('not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})


test('add an expense', () => {

    const newExpense = {
        id:'4',
        description: 'neishe chongyang',
        note:'',
        amount: 251,
        createdAt: 12345
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense])

})

test('edit an expense', () => {
    const amount = 12200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
})

test('not edit an expense if no id', () => {
    const amount = 12200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})
