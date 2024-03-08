import { addExpence, editExpense, removeExpense } from "../../actions/expenses";

test('set up remove expense action', () => {
    const action = removeExpense({id: 'asd123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asd123'
    }) 
})

test('set up edit expense action', () => {
    const action = editExpense('123asdf', {note:'456wer'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asdf',
        updates: {
            note: '456wer'
        }
    }) 
})


test('add expense action with provided value', () => {
    const expenseData={
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'last month rent'
    };
    const action = addExpence(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('add expense action with default value', () => {
    
    const action = addExpence();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:'', 
            note:'', 
            amount:0, 
            createdAt:0,
            id: expect.any(String)
        }
    })
})