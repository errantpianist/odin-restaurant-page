import Chef from "../chef.jpeg";

export const onLoad = () => {
  const content = document.getElementById("content");
  const title = document.createElement("h1");
  title.innerText = "The Greenhouse Bistro";
  content.appendChild(title);

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  const card = document.createElement("div");
  card.classList.add("card");

  const p1 = document.createElement("p");
  p1.innerText = "A Celebration of Farm-to-Table Freshness!";
  card.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerText = "Experience the Bounty of Nature Infused into Every Dish.";
  card.appendChild(p2);
  const chef = new Image();
  chef.src = Chef;
  card.appendChild(chef);
  const p3 = document.createElement("p");
  p3.innerText =
    "Order Online or Savor the Garden-to-Plate Experience in Our Greenhouse Haven!";
  card.appendChild(p3);
  mainContent.appendChild(card);
  content.appendChild(mainContent);
};
