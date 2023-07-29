import Chef from "../chef.jpeg";

export const mainContentHome = () => {
  const mainContent = document.querySelector(".main-content");

  const card = document.createElement("div");
  card.classList.add("home-card");

  const p1 = document.createElement("p");
  p1.innerText = "A Celebration of Farm-to-Table Freshness!";
  card.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerText = "Experience the Bounty of Nature Infused into Every Dish.";
  card.appendChild(p2);
  const chefDiv = document.createElement("div");
  chefDiv.classList.add("chef");
  const chef = new Image();
  chef.src = Chef;
  chefDiv.appendChild(chef);
  card.appendChild(chefDiv);
  const p3 = document.createElement("p");
  p3.innerText =
    "Order Online or Savor the Garden-to-Plate Experience in Our Greenhouse Haven!";
  card.appendChild(p3);
  mainContent.appendChild(card);
};
