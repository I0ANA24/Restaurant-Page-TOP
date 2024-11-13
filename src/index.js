import "./styles.css";
import { renderHomePage } from "./home";

document.addEventListener("DOMContentLoaded", () => renderHomePage());

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => renderHomePage());