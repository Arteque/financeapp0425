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

//Budgets
const BudgetsData = () => {
    const budgets = getData().budgets
    return budgets
}


export {TransactionsData, BudgetsData};
