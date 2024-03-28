import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpence = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
        description='', 
        note='', 
        amount=0, 
        createdAt=0
        } = expenseData;
        
        const expense = { description, note, amount, createdAt };
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpence({
                id: ref.key,
                ...expense
            }))
        })
    }
}


//REMOVE_EXPENSE
export const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


export const startRemoveExpense = ({id}={}) => {
    return (dispatch) => {
        // Return a promise to allow chaining or handling in the component
        return database.ref(`expenses/${id}`).remove().then(() => {
          // If removal is successful, dispatch the action to update the store
          dispatch(removeExpense({ id }));
        }).catch(error => {
          // Handle error if removal fails (optional)
          console.error('Error removing expense:', error);
        });
    };
}


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        }); 
    };
};


// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                });
                dispatch(setExpenses(expenses));
            })
    }
};