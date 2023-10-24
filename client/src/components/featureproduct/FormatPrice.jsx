const FormatPrice = ({ price }) => {
  const rupees = price / 100;

  const PKR_PRICE = rupees.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
  });
  // const PKR_PRICE = rupees.toLocaleString("ur-PK", {
  //   currency: "PKR",
  //   style: "currency",
  // });

  return PKR_PRICE;
};

export default FormatPrice;