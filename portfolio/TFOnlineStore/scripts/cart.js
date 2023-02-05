/* Function list
1. ready() - load the ready state of the store
2. addCartClicked(event) - add the item to cart when the cart button of that item is clicked
3. addProductToCart(title, price, productImg) - get the item details when that item is added to cart
4. removeCartItem(event) - remove an item from cart
5. quantityChanged(event) - make sure the quantity number is always positive and the total amount is updated when the quantity is changed
6. buyButtonClicked() - show an alert when the buy button is clicked
7. updateItemsTotal() - update the total cost of the items (not including shipping fee and tax)
8. calculateShipping(shipOption) - calculates the shipping value
9. calculateTotal - calculates the total of placed order
*/

let priceValue;
let shipValue;
let shipIncValue;

//prepare the state
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

/**
 * load the ready state of the store
 */
function ready() {
  //add to cart
  var addCart = document.getElementsByClassName("add-cart");

  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }

  //remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //change quantity
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  //click the buy button
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

/**
 * add the item to cart when the cart button of that item is clicked
 * @param {*} event
 */
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updateItemsTotal();
}

/**
 * get the item details when that item is added to cart
 * @param {*} title
 * @param {*} price
 * @param {*} productImg
 * @returns
 */
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already added this item to cart");
      return;
    }
  }

  var cartBoxContent = `
    <img src="${productImg}" alt="${title}" class="cart-img" />
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity" />
    </div>
    <i class='bx bxs-trash-alt cart-remove'></i>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

/**
 * remove an item from cart
 * @param {*} event
 */
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateItemsTotal();
}

/**
 * make sure the quantity number is always positive
 * and the total amount is updated when the quantity is changed
 * @param {*} event
 */
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateItemsTotal();
}

/**
 * show an alert when the buy button is clicked
 */
function buyButtonClicked() {
  alert("Your order is placed!");
  // var cartContent = document.getElementsByClassName("cart-content")[0];
  // while (cartContent.hasChildNodes()) {
  //   cartContent.removeChild(cartContent.firstChild);
  // }
  // updateItemsTotal();
}

/**
 * update the total cost of the items (not including shipping fee and tax)
 */
function updateItemsTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementById("txtPrice").value = total.toFixed(2);
  document.getElementsByClassName("summary-price")[0].innerText =
    "$" + total.toFixed(2);
}

/**
 * calculates the shipping value
 * @param {Number} shipOption
 */
function calculateShipping(shipOption) {
  document.getElementById("txtShipMethod").value = shipOption.value;
  calculateTotal();
}

/**
 * calculates the total of placed order
 */
function calculateTotal() {
  priceValue = window.parseFloat(document.getElementById("txtPrice").value);
  shipValue = parseFloat(document.getElementById("txtShipMethod").value);
  shipIncValue = (priceValue + shipValue).toFixed(2);

  // display the subtotal of the order in the textfield txtSubtotal, including items total + shipping
  console.log((priceValue + shipValue).toFixed(2));
  document.getElementById("txtSubtotal").value = shipIncValue;
  document.getElementById("txtSubtotal").innerText = "$" + shipIncValue;

  // declare the tax rate
  const TAX_RATE = 0.05;

  let taxValue = (priceValue + shipValue) * TAX_RATE;

  // display the tax value in the textfield txtTax
  document.getElementById("txtTax").value = taxValue.toFixed(2);
  document.getElementById("txtTax").innerText = taxValue.toFixed(2);

  // display the grand total value of the order in the txtfield txtTotal
  document.getElementById("txtTotal").value = (
    priceValue +
    shipValue +
    taxValue
  ).toFixed(2);

  document.getElementById("txtTotal").innerText =
    "$" + (priceValue + shipValue + taxValue).toFixed(2);
} // end function calculateTotal
