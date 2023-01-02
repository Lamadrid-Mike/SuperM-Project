const products = [
  {
    name: "Cheese",
    weight: "200g",
    type: "Block",
    price: 10,
    src: "/cheese.png",
  },
  {
    name: "Milk",
    weight: "200ml",
    price: 5,
    src: "/milk.png",
  },
  {
    name: "Tomato",
    weight: "100g",
    price: 2.75,
    src: "/tomato.png",
  },
  {
    name: "Pineapple",
    weight: "500g",
    price: 3.25,
    src: "/pineapple.png",
  },
];

console.log(products);

const items = document.querySelector(".productsContainer");
const cartValue = document.querySelector(".cartValue");
const itemOne = document.querySelector(".itemOne");
const itemTwo = document.querySelector(".itemTwo");
const cartContainer = document.querySelector(".cartContainer");

itemOne.addEventListener("click", () => {
  cartValue.innerHTML = Number(++cartValue.innerHTML);
  let quantity = 0;
  const div = `<div class="cartItemLayout">
    <img src=${products[0].src} width="50" height="50" />
    <p>${products[0].name}</p>
    <p>Quantity:${++quantity}</p>
  </div>`;
  cartContainer.insertAdjacentHTML("beforeend", div);
  cartContainer.classList.add("cartContainerFocus");
});

itemTwo.addEventListener("click", () => {
  cartValue.innerHTML = Number(++cartValue.innerHTML);
  let quantity = 0;
  const div = `<div class="cartItemLayout">
    <img src=${products[1].src} width="50" height="50" />
    <p>${products[1].name}</p>
    <p>Quantity:${++quantity}</p>
  </div>`;
  cartContainer.insertAdjacentHTML("beforeend", div);
  cartContainer.classList.add("cartContainerFocus");
});
