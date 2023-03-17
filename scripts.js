const products = [
  {
    name: "Cheese",
    weight: "200g",
    type: "Block",
    price: 10.0,
    src: "/cheese.png",
  },
  {
    name: "Milk",
    weight: "200ml",
    price: 5.0,
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

export let cache = JSON.parse(localStorage.getItem("cart-data"));
let productsAdded = [];
let closeBtn;

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

  const itemsBtn = Array.from(document.getElementsByTagName("button"));

  class Cart {
    constructor(name, price, quantity = 0, weight) {
      (this.name = name),
        (this.price = price),
        (this.quantity = quantity),
        (this.weight = weight);
    }
  }

  const showCloseBtn = function (el) {
    closeBtn = Array.from(document.getElementsByTagName("closeBtn"));
    let match = el.name;
    products.find((el, index) => {
      if (el.name === match) {
        closeBtn[index].classList.add("showBtn");
        const p = document.createElement("p");
        p.setAttribute("id", `${products[index].name}`);
        cartContainer.classList.add("cartContainerFocus");
        cartContainer.appendChild(p).textContent = el.name;
      }
    });
  };

  if (cache !== null) {
    cache.forEach((el) => {
      productsAdded.push(el);
      cartValue.textContent = cache.length;
      showCloseBtn(el);
    });
  }

  // Adding products to cart function
  itemsBtn.forEach((btn, index) =>
    btn.addEventListener("click", function () {
      if (!productsAdded.some((pro) => pro.name === products[index].name)) {
        showCloseBtn(products[index]);
        cartValue.textContent = productsAdded.length + 1;
        productsAdded.push(
          new Cart(
            products[index].name,
            products[index].price,
            1,
            products[index].weight
          )
        );
        localStorage.setItem("cart-data", JSON.stringify(productsAdded));
        productsAdded.forEach((el) => {
          cartContainer.appendChild(p).textContent = el.name;
        });
      }
    })
  );

  // Close btn function
  closeBtn = Array.from(document.getElementsByTagName("closeBtn"));
  closeBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      productsAdded.forEach((pro, position) => {
        if (pro.name === products[index].name) {
          productsAdded.splice(position, 1);
          let nodeRemove = document.getElementById(`${products[index].name}`);
          cartContainer.removeChild(nodeRemove);
          localStorage.setItem("cart-data", JSON.stringify(productsAdded));
        }
      });
      if (!productsAdded.some((pro) => pro.name === products[index].name)) {
        closeBtn[index].classList.remove("showBtn");
      }
      productsAdded.length === 0
        ? cartContainer.classList.remove("cartContainerFocus")
        : "";
      cartValue.textContent = productsAdded.length;
    });
  });
};

addEventListener("load", loadProducts);

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
