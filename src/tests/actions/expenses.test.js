import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpence, editExpense, removeExpense, setExpenses, startSetExpenses } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('set up remove expense action', () => {
    const action = removeExpense({id: 'asd123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asd123'
    }); 
});

test('set up edit expense action', () => {
    const action = editExpense('123asdf', {note:'456wer'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asdf',
        updates: {
            note: '456wer'
        }
    }); 
});


test('add expense action with provided value', () => {
    
    const action = addExpence(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this one is good',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

        // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
        //     expect(snapshot.val()).toEqual(expenseData);
        // });

        // done()
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done()
    });
        
})


test('add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })
        
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done()
    });
})


test('setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('fetch expenses from firebase', () => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

// test('add expense action with default value', () => {
    
//     const action = addExpence();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description:'', 
//             note:'', 
//             amount:0, 
//             createdAt:0,
//             id: expect.any(String)
//         }
//     })
// })