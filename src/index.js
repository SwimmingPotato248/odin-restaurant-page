import './style.css';
import { component as homepage} from './homepage.js';
import { component as menus } from './menus.js';
import { component as contact } from './contact.js'

document.querySelector("#content").appendChild(homepage())

const buttons = Array.from(document.querySelectorAll("header div button"))

buttons[0].addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren(homepage());
});

buttons[1].addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren(menus());
});

buttons[2].addEventListener("click", () => {
  const content = document.querySelector("#content");
  content.replaceChildren(contact());
});
