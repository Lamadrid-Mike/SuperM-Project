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

const productsContainer = document.querySelector(".productsContainer");
const hiddenCartContainer = document.querySelector(".cartContainer");
const cartValue = document.querySelector(".cartValue");

export let productsAdded = [];
let cartContainerNames = [];
let closeBtn;

const loadProducts = function () {
  products.forEach((el, i) => {
    const p = document.createElement("p");
    const info = document.createElement("p");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const outerDiv = document.createElement("div");
    const button = document.createElement("button");
    const closeBtn = document.createElement("closeBtn");
    div.classList.add(`item${i + 1}`);
    div.classList.add("itemsLayout");
    div.appendChild(img).setAttribute("src", `${el.src}`);
    img.setAttribute("width", "120");
    img.setAttribute("height", "110");
    img.classList.add("centerDivs");
    productsContainer
      .appendChild(div)
      .appendChild(outerDiv)
      .appendChild(p).textContent = `${el.name}`;
    outerDiv.classList.add("centerDivs");
    outerDiv.appendChild(info).textContent = `${el.weight}`;
    button.classList.add("itemsBtn");
    button.setAttribute("id", `${i}`);
    button.setAttribute("type", "submit");
    closeBtn.classList.add("centerDivs");
    closeBtn.classList.add("closeBtn");
    closeBtn.setAttribute("id", `${i}`);
    div.appendChild(closeBtn).textContent = "x";
    div.appendChild(button).textContent = `${el.price}`;
  });

  let storage = localStorage.getItem("productsAdded");
  let loadedData = JSON.parse(storage);

  class Cart {
    constructor(id, name, price, weight) {
      (this.id = id),
        (this.name = name),
        (this.price = price),
        (this.weight = weight);
    }
  }

  const displayCartContainer = (productName) => {
    if (!cartContainerNames.includes(productName)) {
      cartContainerNames.push(productName);
      const p = document.createElement("p");
      p.setAttribute("id", productName);
      p.innerHTML = productName;
      hiddenCartContainer.classList.add("cartContainerFocus");
      hiddenCartContainer.append(p);
    } else {
      console.log(productsAdded);
    }
  };

  const cartContainerRemoval = (productName) => {
    let selectedProduct = products[productName].name;
    let filtered = cartContainerNames.filter((el) => el != selectedProduct);
    let productToRemove = document.querySelector(`#${selectedProduct}`);
    productToRemove.remove();
    cartContainerNames = filtered;
    displayCartValue();
  };

  const showCloseBtn = (productBtn) => {
    closeBtn = Array.from(document.getElementsByTagName("closeBtn"));
    closeBtn[productBtn].classList.add("showBtn");
  };

  const hideCloseBtn = (productBtn) => {
    closeBtn[productBtn].classList.remove("showBtn");
  };

  const displayCartValue = () => {
    cartValue.innerHTML = cartContainerNames.length;
    if (cartContainerNames.length === 0) {
      hiddenCartContainer.classList.remove("cartContainerFocus");
    }
  };

  const addToLocalStorage = (product) => {
    localStorage.setItem("productsAdded", JSON.stringify(product));
  };

  const cartQuantity = (array, name, quantity) => {
    array.find((el) => {
      if (el.name === name) {
        return Object.assign(el, { quantity: quantity });
      }
    });
  };

  if (loadedData !== null) {
    cartValue.innerHTML = loadedData.length;
    loadedData.forEach((el) => {
      displayCartContainer(el.name);
      showCloseBtn(el.id);
      productsAdded.push(el);
    });
  }

  let quantity = 0;
  productsContainer.addEventListener("click", function (e) {
    let productId = e.target.getAttribute("id");
    let productName = products[productId].name;
    quantity++;

    if (
      e.target.classList.contains("itemsBtn") &&
      !cartContainerNames.includes(productName)
    ) {
      displayCartContainer(productName);
      showCloseBtn(productId);
      displayCartValue();
      productsAdded.push(
        new Cart(
          productId,
          products[productId].name,
          products[productId].price,
          products[productId].weight
        )
      );
    }

    if (cartContainerNames.includes(productName)) {
      cartQuantity(productsAdded, productName, quantity);
      addToLocalStorage(productsAdded);
    }

    if (e.target.classList.contains("closeBtn")) {
      let productId = e.target.getAttribute("id");
      hideCloseBtn(productId);
      cartContainerRemoval(productId);
      let filteredProducts = productsAdded.filter((el) => el.id !== productId);
      addToLocalStorage(filteredProducts);
    }
  });
};

addEventListener("load", loadProducts);
