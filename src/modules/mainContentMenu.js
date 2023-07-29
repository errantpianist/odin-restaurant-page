export const mainContentMenu = () => {
  const mainContent = document.querySelector(".main-content");
  const menuItems = [
    {
      name: "Classic Cheeseburger",
      price: 10.99,
    },
    {
      name: "Margherita Pizza",
      price: 12.5,
    },
    {
      name: "Grilled Chicken Caesar Salad",
      price: 9.75,
    },
    {
      name: "Vegetable Stir-Fry",
      price: 8.99,
    },
    {
      name: "Seafood Linguine",
      price: 15.25,
    },
    {
      name: "BBQ Pulled Pork Sandwich",
      price: 11.5,
    },
    {
      name: "Mushroom Swiss Burger",
      price: 10.75,
    },
    {
      name: "Spinach and Feta Omelette",
      price: 7.99,
    },
    {
      name: "Mango Tango Smoothie",
      price: 5.25,
    },
    {
      name: "Chocolate Lava Cake",
      price: 6.5,
    },
  ];
  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    const name = document.createElement("h3");
    name.innerText = item.name;
    card.appendChild(name);
    const price = document.createElement("p");
    price.innerText = `£${item.price}`;
    card.appendChild(price);
    mainContent.appendChild(card);
  });
};
