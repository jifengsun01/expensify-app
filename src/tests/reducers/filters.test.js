import moment from "moment";
import filtersReducer from "../../reducers/filters";

test('setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    
    //const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})


test('set text filter', () => {
    const text = 'this is test'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
})

test('set startDate filter', () => {
    const startDate = moment();
    const action = {type: 'SET_START_DATE', startDate};
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
})

test('set endDate filter', () => {
    const endDate = moment();
    const action = {type: 'SET_END_DATE', endDate};
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
})

