export const mainContentContact = () => {
  const mainContent = document.querySelector(".main-content");
  const staffContacts = [
    {
      name: "John Doe",
      occupation: "Chef",
      phone: "+1 (555) 123-4567",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      occupation: "Waiter/Waitress",
      phone: "+1 (555) 987-6543",
      email: "jane.smith@example.com",
    },
    {
      name: "Michael Johnson",
      occupation: "Bartender",
      phone: "+1 (555) 777-8888",
      email: "michael.johnson@example.com",
    },
    {
      name: "Emily Williams",
      occupation: "Manager",
      phone: "+1 (555) 222-3333",
      email: "emily.williams@example.com",
    },
  ];
  staffContacts.forEach((contact) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const name = document.createElement("h3");
    name.innerText = contact.name;
    card.appendChild(name);
    const occupation = document.createElement("p");
    occupation.innerText = contact.occupation;
    card.appendChild(occupation);
    const phone = document.createElement("p");
    phone.innerText = contact.phone;
    card.appendChild(phone);
    const email = document.createElement("p");
    email.innerText = contact.email;
    card.appendChild(email);
    mainContent.appendChild(card);
  });
};
