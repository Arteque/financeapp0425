import Data from "../API/data.json";

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
  return Data;
};

// return the current date()
const getDate = () => {
  return new Date();
};

//Transactions
const TransactionsData = () => {
  const transactions = getData().transactions;
  return transactions;
};

//pots
const PotsData = () => {
  const pots = getData().pots;
  // Calculate the total amount in pots
  const potsSavingTotal = pots.reduce(
    (accumulator, potTotal) => accumulator + potTotal.total,
    0
  );

  return { pots, potsSavingTotal };
};

//Budgets
const BudgetsData = () => {
  // get the budget data and the transactions data
  const { transactions, budgets } = getData();

  //Extract the categories from the budget list
  const budgetsCategories = budgets.map(({ category }) => category);

  // Get total budgets
  const budgetsTotal = budgets.reduce((acc, budget) => acc + budget.maximum, 0);

  //get the transactions total maount
  const transactionsBudgetTotal = transactions.reduce((acc, transaction) => {
    if (budgetsCategories.includes(transaction.category)) {
      return acc + Math.abs(transaction.amount);
    }
    return acc;
  }, 0);

  //Sort the transactions data to the budgets
  const sortTransactionsToBudgets = budgetsCategories.map((category) => {
    const matchingTransactions = transactions.filter((transaction) => {
      return transaction.category === category;
    });
    return {
      category,
      transactions: matchingTransactions,
    };
  });

  //  get the total amoun for evry category
  const budgetsCategoriesTransactionTotalAmout = sortTransactionsToBudgets.map(
    (item) => {
      // console.log(item)
      const transactionsTotal = item.transactions.reduce(
        (acc, transaction) => acc + Math.abs(transaction.amount),
        0
      );

      return { category: item.category, total: transactionsTotal };
    }
  );

  return {
    transactions,
    budgets,
    budgetsTotal,
    transactionsBudgetTotal,
    sortTransactionsToBudgets,
    budgetsCategoriesTransactionTotalAmout,
  };
};

const recurringBillsData = () => {
  // defin the needed date data
  const currentDate = getDate();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentTime = currentDate.getTime();

  // get recurring bills from getData()
  const data = getData().transactions;
  const recurringBills = data.filter((data) => data.recurring);

  // return all bills having the same month
  const currentMonthRecurringBills = recurringBills.filter((bill) => {
    const billDate = new Date(bill.date);
    return billDate.getMonth() === currentMonth;
  });
  // check if the bill of the current month is before or after the current day
  const currentMontPaidBills = currentMonthRecurringBills.map((bill) => {
    const billDate = new Date(bill.date);
    const billDay = billDate.getDate();

    return {
      ...bill,
      paidBill: billDay < currentDay,
    };
  });

  // PaidBills Total
  const paidBillsTotal = currentMontPaidBills.reduce((acc, bill) => {
    return bill.paidBill ? acc + Math.abs(bill.amount) : acc;
  }, 0);

  // Upcoming bills Total

  const upcomingBillsTotal = currentMontPaidBills.reduce(
    (acc, bill) => !bill.paidBill && acc + Math.abs(bill.amount),
    0
  );

  //dueSoon Bills Total
  const dueSoonBillsTotal = currentMontPaidBills.reduce((acc, bill) => {
    const billDate = new Date(bill.date);

    billDate.setFullYear(currentDate.getFullYear());
    billDate.setHours(billDate.getUTCHours());
    const billToLocalDate = billDate;
    const UTCbillDate = new Date(billToLocalDate);

    const billDay = UTCbillDate.getDate();

    const billTime = UTCbillDate.getTime();

    if (billDay - currentDay < 5 && billDay - currentDay > 0) {
      return acc + Math.abs(bill.amount);
    }

    if (billDay === currentDay && billTime > currentTime) {
      return acc + Math.abs(bill.amount);
    }

    return acc;
  }, 0);

  console.log(currentMontPaidBills);

  return {
    recurringBills,
    currentMontPaidBills,
    paidBillsTotal,
    upcomingBillsTotal,
    dueSoonBillsTotal,
  };
};

//Exporting the functions
export { TransactionsData, PotsData, BudgetsData, recurringBillsData };
