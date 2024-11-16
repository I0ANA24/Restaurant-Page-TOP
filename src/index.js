import "./styles.css";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderAboutPage } from "./about";

document.addEventListener("DOMContentLoaded", () => renderHomePage());

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => renderHomePage());

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", () => renderMenuPage());

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", () => renderAboutPage());