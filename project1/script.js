//create array to hold inventory of store items
let inventory =[];
//declare variables using var, let and const
const productTable = document.getElementById("productTable").getElementsByTagName('tbody')[0];
const productButton = document.getElementById("addProductButton");
// .getElementsByTagName('button');
const productNameInput = document.getElementById('productName');
const productModelInput = document.getElementById('productModel');
const productCostInput = document.getElementById('productCost');
const productQuantityInput = document.getElementById('productQuantity');
//create three product items
const product1 ={ name: "Laptop", model: "XPS 13", cost: 999.99, quantity: 10};
const product2 ={ name: "Smartphone", model: "Samsung Galaxy S21", cost: 799.99, quantity: 20};
const product3 ={ name: "Tablet", model: "iPad Pro", cost: 899.99, quantity: 15};
//add product objects to inventory array
inventory.push(product1, product2, product3);

displayInventory();


//function to display the inventory data in the HTML table
function displayInventory() {
  productTable.innerHTML = ''; //clear existing rows
  inventory.forEach(product => {
    let row = productTable.insertRow();
    row.insertCell(0).textContent = product.name;
    row.insertCell(1).textContent = product.model;
    row.insertCell(2).textContent = product.cost;
    row.insertCell(3).textContent = product.quantity;
  });
}
//event handler to to add a new product
function addProduct() {
  console.log("inserting");
  const name = document.getElementById("productName").value.trim();
  const model = document.getElementById("productModel").value.trim();
  const cost = parseFloat(document.getElementById("productCost").value.trim());
  const quantity = parseInt(document.getElementById("productQuantity").value.trim());
  if(name && model && !isNaN(cost) && !isNaN(quantity)) {
    inventory.push({name: name, model: model, cost: cost, quantity: quantity});
    displayInventory();
    productNameInput.value = '';
    productModelInput.value = '';
    productCostInput.value = '';
    productQuantityInput.value = '';
  }
}

productButton.addEventListener('click', addProduct)

displayInventory();