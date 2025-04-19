import Data from '../API/data.json'

//fetch the data
/*
const getData = async () => {
  fetch(url, {
    method: "GET", // Specify the request method
    headers: {
      // Specify any headers if needed
      "Content-Type": "application/json"
    },
  })
    .then((response) => response.json())
    .then((data) => {
        // Handle the data received from the API
        console.log("Data fetched successfully:");
        financeData = data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
*/

// all the data
const getData = () => {
    return Data
}

//Transactions
const TransactionsData = () => {
    const transactions = getData().transactions
    return transactions
};

//pots
const PotsData = () => {
    const pots = getData().pots
    // Calculate the total amount in pots
    const potsSavingTotal = pots.reduce((accumulator, potTotal) => accumulator + potTotal.total, 0)
    
    return {pots, potsSavingTotal}
  }

//Budgets
const BudgetsData = () => {
    // get the budget data and the transactions data
    const {transactions, budgets} = getData()

    //Extract the categories from the budget list
    const budgetsCategories = budgets.map(({category}) => category)

    // Get total budgets
    const budgetsTotal = budgets.reduce((acc, budget) => acc + budget.maximum,0)

    //get the transactions total maount
    const transactionsBudgetTotal = transactions.reduce((acc, transaction) => {
      if(budgetsCategories.includes(transaction.category)) {
        return acc + Math.abs(transaction.amount)
      }
      return acc 
    },0)

    //Sort the transactions data to the budgets
    const sortTransactionsToBudgets = budgetsCategories.map((category) => {
      const matchingTransactions = transactions.filter( transaction => {
       return transaction.category === category
      })
      return{
        category,
        transactions: matchingTransactions
      }
    })


     //  get the total amoun for evry category
    const budgetsCategoriesTransactionTotalAmout = sortTransactionsToBudgets.map(item => {
      // console.log(item)
      const transactionsTotal = item.transactions.reduce((acc, transaction) => acc + Math.abs(transaction.amount),0)
      
      return {category: item.category, total:transactionsTotal}
    })


    return {transactions, budgets, budgetsTotal, transactionsBudgetTotal, sortTransactionsToBudgets, budgetsCategoriesTransactionTotalAmout }
}


const recurringBillsData = () => {
  // get recurring bills from getData()
  const data = getData().transactions
  const recurringBills = data.filter(data => data.recurring)
  return recurringBills
}


//Exporting the functions
export {TransactionsData, PotsData, BudgetsData, recurringBillsData};
