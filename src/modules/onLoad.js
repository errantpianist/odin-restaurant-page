import { emptyMainContent } from "./emptyMainContent";
import { mainContentHome } from "./mainContentHome";
import { mainContentMenu } from "./mainContentMenu";

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
    emptyMainContent();
    mainContentHome();
  });
  nav.appendChild(home);
  const menu = document.createElement("a");
  menu.innerText = "Menu";
  menu.addEventListener("click", () => {
    emptyMainContent();
    mainContentMenu();
  });

  nav.appendChild(menu);
  const contact = document.createElement("a");
  contact.innerText = "Contact";
  nav.appendChild(contact);
  content.appendChild(nav);

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  content.appendChild(mainContent);
  mainContentHome();
};
