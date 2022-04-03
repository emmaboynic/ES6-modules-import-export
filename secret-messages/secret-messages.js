import { toggleHiddenElement } from "../modules/dom-functions.js";
import { changeToFunkyColor } from "../modules/dom-functions.js";
const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-p");

buttonElement.addEventListener("click", () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
