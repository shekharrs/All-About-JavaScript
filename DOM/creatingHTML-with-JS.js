const parentElement = document.getElementById("parent-container");

// Creating the card container element
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// Create card image element
const cardImgElement = document.createElement("img");
cardImgElement.classList.add("image");

cardImgElement.setAttribute("src", "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=sph");

cardImgElement.setAttribute("alt", "programming-img");
cardContainer.appendChild(cardImgElement);

// Creating the card text element
const cardTextElement = document.createElement("span");
cardTextElement.innerText = "Be superb in your field, and the world will be superb for you.";

cardContainer.appendChild(cardTextElement);

parentElement.appendChild(cardContainer);
