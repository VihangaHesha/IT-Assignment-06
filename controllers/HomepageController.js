function loadCount() {
  const customerCount = customerDatabase.length.toString();
  $("#customerCount").text(customerCount);

  const itemCount = itemDatabase.length.toString();
  $("#itemCount").text(itemCount);

  const orderCount = orderDatabase.length.toString();
  $("#orderCount").text(orderCount);
}
