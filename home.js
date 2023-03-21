import { cache } from "./scripts.js";
const cartValue = document.querySelector(".value");

if (cache !== null) {
  cartValue.textContent = cache.length;
  console.log(cache);
}
