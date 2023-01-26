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

const product = document.querySelector(".productsContainer");
const cartValue = document.querySelector(".cartValue");
const cartContainer = document.querySelector(".cartContainer");

cartValue.addEventListener("click", function (e) {
  e.preventDefault();
});

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
    img.setAttribute("width", "120");
    img.setAttribute("height", "110");
    img.classList.add("centerDivs");
    product
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

// Adding products to cart function
const itemsBtn = Array.from(document.getElementsByTagName("button"));

let productsAdded = [];
itemsBtn.forEach((el, index) =>
  el.addEventListener("click", function () {
    const p = document.createElement("p");
    p.setAttribute("id", `${products[index].name}`);
    cartContainer.classList.add("cartContainerFocus");
    closeBtn[index].classList.add("showBtn");
    if (!productsAdded.includes(products[index].name)) {
      cartValue.textContent = productsAdded.length + 1;
      productsAdded.push(products[index].name);
      productsAdded.forEach((el) => {
        cartContainer.appendChild(p).textContent = el;
      });
    }
    console.log(productsAdded);
  })
);

// Close btn function
const closeBtn = Array.from(document.getElementsByTagName("closeBtn"));
closeBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (productsAdded.includes(products[index].name)) {
      let itemToDelete = productsAdded.indexOf(products[index].name);
      productsAdded.splice(itemToDelete, 1);
      let nodeRemove = document.getElementById(`${products[index].name}`);
      cartContainer.removeChild(nodeRemove);
    }
    if (!productsAdded.includes(products[index].name)) {
      closeBtn[index].classList.remove("showBtn");
    }
    if (productsAdded.length === 0) {
      cartContainer.classList.remove("cartContainerFocus");
    }
    console.log(productsAdded);
    cartValue.textContent = productsAdded.length;
  });
});

// Mobile layout
addEventListener("resize", function () {
  let windowSize = window.innerWidth;
  if (windowSize <= 710) {
    product.classList.remove("mainContainer");
    product.classList.add("mobileContainer");
  }
  if (windowSize >= 710) {
    product.classList.add("mainContainer");
    product.classList.remove("mobileContainer");
  }
});
