const Currency = (amount, fraction) => {
  //be sure thats a number
  const a = Number(amount);

  // convert to currency format using toLocaleString method
    
  const currency = a.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fraction ? fraction : 0,
    maximumFractionDigits: fraction ? fraction : 0,
  });

  return currency;
};

export default Currency;
