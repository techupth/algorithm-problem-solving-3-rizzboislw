function sortCustomerName(customers) {
  for (let i = 0; i < customers.length; i++) {
    for (let j = 0; j < customers.length - i - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }

  return customers;
}

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));

// ตอบคำถามตรงนี้จ้า

// Time Complexity = O(n^2)
// เนื่องจากมีการใช้ Bubble Sort ซึ่งเป็นการ Sort โดยใช้ nested loop จึงได้ออกมาเป็น O(n^2)
