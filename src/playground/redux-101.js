import { createStore } from "redux";

// Action generators - functions that return action objects

// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     };
// };

const incrementCount = ({incrementBy = 1} = {}) => ({
    
        type: 'INCREMENT',
        incrementBy: incrementBy
    
});


const decrementCount = ( {decrementBy = 1} = {} ) => ({
    
        type: 'DECREMENT',
        decrementBy: decrementBy
    
});

const setCount = ({ count } = {}) => ({
    
        type: 'SET',
        count

});


const resetCount = () => ({

        type: 'RESET'
        
});



// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
    
    switch (action.type) {

        case 'INCREMENT':         
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':         
            return {
                count: state.count - action.decrementBy
            }

        case 'SET':
            return {
                count: action.count
            }

        case 'RESET': 
            return {
                count: 0
            }

        default:
            return state;
    }
    
    // if (action.type === 'INCREMENT') {
        
    // }
    // else {
    //     return state;
    // }
    
}


const store = createStore(countReducer);


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})



//Actions - than an object that gets sent to the store


//Increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     ncrementBy: 5  
// });

store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch({
//     type: 'INCREMENT'  
// });

store.dispatch(incrementCount());



//Reset

// store.dispatch({
//     type: 'RESET'  
// });

store.dispatch(resetCount())

// store.dispatch({
//     type: 'DECREMENT'  
// });

store.dispatch(decrementCount())


// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10  
// });



store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))


// store.dispatch({

//     type: 'SET',
//     count: 101

// });