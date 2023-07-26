const cartTable = document.querySelector(".cart-table");
const payBtn = document.querySelector(".cart-pay-btn");
const cartValue = document.querySelector(".cartValue");
const cartPrice = document.querySelector(".cart-price");
const tableContainer = document.querySelector(".table-container");
const navContainer = document.querySelector(".navContainer");

const currencyOptions = {
  style: "currency",
  currency: "USD",
};

let data = localStorage.getItem("productsAdded");
let productsAdded = JSON.parse(data);

if (productsAdded !== null) {
  cartValue.textContent = productsAdded.length;
  let finalPrice = productsAdded.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
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

const message = (dom) => {
  const html = `
    <div class="wrapper">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	    viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve">
        <path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4
	      C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/>
      </svg>
      <h1 class="wrapper__message">Thank you!</h1>
    </div>
`;
  return dom.insertAdjacentHTML("afterend", html);
};

payBtn.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  tableContainer.remove();
  cartPrice.remove();
  payBtn.remove();
  message(navContainer);
  cartValue.innerHTML = 0;
});
