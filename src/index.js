import "./styles.css";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";

document.addEventListener("DOMContentLoaded", () => renderHomePage());

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => renderHomePage());

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => renderMenuPage());