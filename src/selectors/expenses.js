import moment from "moment";

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') : true ;
        const textMatch = typeof text!== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

export default getVisibleExpenses;