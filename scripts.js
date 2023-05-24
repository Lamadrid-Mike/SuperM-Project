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
let quantity = 0;
let closeBtn;

const loadProducts = function () {
  products.forEach((el, i) => {
    const html = `
  <div class="item${i + 1} itemsLayout">
      <img class="centerDivs" src="${el.src}" width="120" height="110" />
        <div class="centerDivs">
          <p>${el.name}</p>
          <p>${el.weight}</p>
        </div>
      <closeBtn class="closeBtn centerDivs" id="${i}" name="${
      el.name
    }">x</closeBtn>
    <button type="submit" class="itemsBtn" id="${i}" name="${el.name}" >$${
      el.price
    }</button>
  </div>
    `;
    productsContainer.insertAdjacentHTML("beforeend", html);
  });

  let storage = localStorage.getItem("productsAdded");
  let loadedData = JSON.parse(storage);

  class Cart {
    constructor(id, name, price, weight, quantity) {
      (this.id = id),
        (this.name = name),
        (this.price = price),
        (this.weight = weight),
        (this.quantity = quantity);
    }
  }

  const displayCartContainer = (productName) => {
    cartContainerNames.push(productName);
    const p = document.createElement("p");
    p.setAttribute("id", productName);
    p.innerHTML = productName;
    hiddenCartContainer.classList.add("cartContainerFocus");
    hiddenCartContainer.append(p);
  };

  const cartContainerRemoval = (productName) => {
    let productToRemove = document.querySelector(`#${productName}`);
    productToRemove.remove();
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

  if (loadedData !== null) {
    cartValue.innerHTML = loadedData.length;
    loadedData.forEach((el) => {
      displayCartContainer(el.name);
      showCloseBtn(el.id);
      productsAdded.push(el);
      cartContainerNames.push(el);
    });
  }

  productsContainer.addEventListener("click", function (e) {
    let productIndex = e.target.getAttribute("id");
    let productName = e.target.getAttribute("name");
    if (
      e.target.classList.contains("itemsBtn") &&
      !cartContainerNames.includes(productName)
    ) {
      quantity++;
      displayCartContainer(productName);
      showCloseBtn(productIndex);
      displayCartValue();
      productsAdded.push(
        new Cart(
          productIndex,
          products[productIndex].name,
          products[productIndex].price,
          products[productIndex].weight,
          quantity
        )
      );
      quantity = 0;
    } else {
      for (let i = 0; i < productsAdded.length; i++) {
        if (productsAdded[i].name === productName) {
          productsAdded[i].quantity++;
        }
      }
    }

    // console.log(productsAdded);

    if (e.target.classList.contains("closeBtn")) {
      let closeBtnId = e.target.getAttribute("name");
      cartContainerRemoval(closeBtnId);
      hideCloseBtn(productIndex);
      displayCartValue();
    }
  });
};

addEventListener("load", loadProducts);
