import { cache } from "./scripts.js";
const cartTable = document.querySelector(".cart-table");
const payBtn = document.querySelector(".cart-pay-btn");
const cartValue = document.querySelector(".cartValue");
cartValue.textContent = cache.length;

addEventListener("load", function () {
  cache.forEach((el) => {
    const html = `
      <tr>
        <td>${el.name}</td>
        <td>${el.price}</td>
        <td>${el.quantity}</td>
        <td>${el.quantity}0</td>
    </tr>
      `;
    cartTable.insertAdjacentHTML("beforeend", html);
  });
});

payBtn.addEventListener("click", function () {
  localStorage.clear();
});
