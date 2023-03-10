import { cache } from "./scripts.js";
const cartTable = document.querySelector(".cart-table");
const payBtn = document.querySelector(".cart-pay-btn");
const cartValue = document.querySelector(".cartValue");

cartValue.textContent = cache.length;

addEventListener("load", function () {
  let finalPrice = cache.reduce((acc, curr) => acc + curr.price, 0);
  console.log(finalPrice);
  if (finalPrice === null) return;
  cache.forEach((el) => {
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
});

payBtn.addEventListener("click", function () {
  localStorage.clear();
});
