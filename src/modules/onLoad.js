import { emptyMainContent } from "./emptyMainContent";
import { mainContentHome } from "./mainContentHome";
import { mainContentMenu } from "./mainContentMenu";
import { mainContentContact } from "./mainContentContact";

export const onLoad = () => {
  const content = document.getElementById("content");
  const title = document.createElement("h1");
  title.innerText = "The Greenhouse Bistro";
  content.appendChild(title);

  const nav = document.createElement("nav");
  const home = document.createElement("a");
  home.innerText = "Home";
  home.classList.add("active");
  home.addEventListener("click", () => {
    home.classList.add("active");
    menu.classList.remove("active");
    contact.classList.remove("active");
    emptyMainContent();
    mainContentHome();
  });
  nav.appendChild(home);
  const menu = document.createElement("a");
  menu.innerText = "Menu";
  menu.addEventListener("click", () => {
    menu.classList.add("active");
    home.classList.remove("active");
    contact.classList.remove("active");
    emptyMainContent();
    mainContentMenu();
  });

  nav.appendChild(menu);
  const contact = document.createElement("a");
  contact.innerText = "Contact";
  contact.addEventListener("click", () => {
    contact.classList.add("active");
    home.classList.remove("active");
    menu.classList.remove("active");
    emptyMainContent();
    mainContentContact();
  });
  nav.appendChild(contact);

  content.appendChild(nav);

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  content.appendChild(mainContent);
  mainContentHome();
};
