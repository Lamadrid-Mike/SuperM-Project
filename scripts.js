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

const items = document.querySelector(".productsContainer");
const cartValue = document.querySelector(".cartValue");
const cartContainer = document.querySelector(".cartContainer");

let valueOfCart = 0;
const loadProducts = function () {
  products.forEach((el, i) => {
    const p = document.createElement("p");
    const info = document.createElement("p");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const outerDiv = document.createElement("div");
    const button = document.createElement("button");
    const span = document.createElement("closeBtn");
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
    button.setAttribute("id", `${i + 1}`);
    button.setAttribute("type", "submit");
    span.classList.add("centerDivs");
    span.classList.add("closeBtn");
    div.appendChild(span).textContent = "x";
    div.appendChild(button).textContent = `${el.price}`;
  });
};
loadProducts();

//Adding products to cart function
const itemsBtn = Array.from(document.getElementsByTagName("button"));
itemsBtn.map((el, index) =>
  el.addEventListener("click", () => {
    const insertItem = document.createElement("div");
    const p = document.createElement("p");
    insertItem.classList.add("cartItemLayout");
    valueOfCart = Number(cartValue.textContent);
    cartValue.innerHTML = ++valueOfCart;
    cartContainer.classList.add("cartContainerFocus");
    cartContainer
      .appendChild(insertItem)
      .appendChild(
        p
      ).textContent = `${products[index].name}, $${products[index].price}`;
    insertItem.classList.add(`item-${index}`);
    closeBtn[index].style.display = "block";
  })
);

//Close btn function
const closeBtn = Array.from(document.getElementsByTagName("closeBtn"));
closeBtn.map((el, index) => {
  el.addEventListener("click", () => {
    let listItem = document.querySelector(`.item-${index}`);
    if (valueOfCart >= 1) {
      cartValue.innerHTML = --valueOfCart;
      listItem.remove();
    }
    if (valueOfCart === 0) {
      closeBtn[index].style.display = "none";
      cartContainer.classList.remove("cartContainerFocus");
    }
  });
});
