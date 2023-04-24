let numberCart = localStorage.getItem("productsAdded");
let number = JSON.parse(numberCart);

const cartValue = document.querySelector(".value");

if (number !== null) {
  cartValue.textContent = number.length;
}
