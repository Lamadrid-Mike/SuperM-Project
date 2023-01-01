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
const cartValue = Number(document.querySelector(".cartValue").innerHTML);

const loadItems = function () {
  products.forEach(function (el, i) {
    let div = ` <div class="item${i + 1} itemsLayout">
    <img src="${el.src}" width="150" height="150" />
    <div>
      <p>${el.name}</p>
      <p>${el.weight}</p>
    </div>
    <button class="itemsBtn">$${el.price}</button>
  </div>`;
    items.insertAdjacentHTML("beforeend", div);
  });
};
loadItems();
