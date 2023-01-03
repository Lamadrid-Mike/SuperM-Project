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
const cartContainer = document.querySelector(".cartContainer");
const closeBtn = document.querySelector(".closeBtn");

let valueOfCart = 0;

const loadProducts = function () {
  products.forEach((el, i) => {
    const p = document.createElement("p");
    const info = document.createElement("p");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const outerDiv = document.createElement("div");
    const button = document.createElement("button");
    div.classList.add(`item${i + 1}`);
    div.classList.add("itemsLayout");
    div.appendChild(img).setAttribute("src", `${el.src}`);
    img.setAttribute("width", "150");
    img.setAttribute("height", 150);
    img.classList.add("centerDivs");
    items
      .appendChild(div)
      .appendChild(outerDiv)
      .appendChild(p).textContent = `${el.name}`;
    outerDiv.classList.add("centerDivs");
    outerDiv.appendChild(info).textContent = `${el.weight}`;
    button.classList.add("itemsBtn");
    button.setAttribute("id", `btn${i + 1}`);
    button.setAttribute("type", "submit");
    div.appendChild(button).textContent = `${el.price}`;
  });
};

loadProducts();

const itemsBtn = document.getElementById("btn1");
itemsBtn.addEventListener("click", () => {
  valueOfCart = Number(cartValue.innerHTML);
  cartValue.innerHTML = ++valueOfCart;
});

/*
itemOne.addEventListener("click", () => {
  valueOfCart = Number(cartValue.innerHTML);
  cartValue.innerHTML = ++valueOfCart;

  const p = document.createElement("p");
  const img = document.createElement("img");
  const div = document.createElement("div");
  div.appendChild(img).setAttribute("width", "100");
  img.setAttribute("height", "100");
  img.setAttribute("src", `${products[0].src}`);
  cartContainer
    .appendChild(div)
    .appendChild(p).innerHTML = `${products[0].name}`;

  div.classList.add("cartItemLayout");
  cartContainer.classList.add("cartContainerFocus");
  closeBtn.style.display = "block";
});
*/

/*
closeBtn.addEventListener("click", () => {
  if (valueOfCart >= 1) {
    cartValue.innerHTML = --valueOfCart;
  }
  if (valueOfCart === 0) {
    closeBtn.style.display = "none";
  }
  cartContainer.removeChild(cartContainer.lastElementChild);
});
*/

/*
const div = `<div class="cartItemLayout">
<img src=${products[0].src} width="50" height="50" />
<p>${products[0].name}</p>
<p>Quantity:${++quantity}</p>
</div>`;

cartContainer.classList.add("cartContainerFocus");
closeBtn.style.display = "block";
*/
