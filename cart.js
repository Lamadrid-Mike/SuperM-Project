const cartTable = document.querySelector(".cart-table");
const payBtn = document.querySelector(".cart-pay-btn");
const cartValue = document.querySelector(".cartValue");
const cartPrice = document.querySelector(".cart-price");

const currencyOptions = {
  style: "currency",
  currency: "USD",
};

let data = localStorage.getItem("productsAdded");
let productsAdded = JSON.parse(data);

console.log(productsAdded);
if (productsAdded !== null) {
  cartValue.textContent = productsAdded.length;
  let finalPrice = productsAdded.reduce((acc, curr) => acc + curr.price, 0);
  productsAdded.forEach((el) => {
    const html = `
        <tr>
          <td>${el.name}</td>
          <td>${el.weight}</td>
          <td>${el.quantity}</td>
          <td>$${el.price}</td>
      </tr>
        `;
    cartTable.insertAdjacentHTML("beforeend", html);
  });
  cartPrice.textContent = new Intl.NumberFormat(
    "en-US",
    currencyOptions
  ).format(finalPrice);
}

payBtn.addEventListener("click", function () {
  localStorage.clear();
});
