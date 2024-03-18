

const getExpensesTotal = (expenses) => {
    // if (!expenses || expenses.length === 0) {
    //     return 0;
    // }

    // Using reduce to sum up the amounts of all expenses
    const total = expenses.reduce((acc, expense) => {
        return acc + expense.amount;
    }, 0);

    return total; 
}

export default getExpensesTotal;