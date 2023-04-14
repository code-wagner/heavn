// select all the product cards
const cards = document.querySelectorAll(".card");

// loop through each card
cards.forEach((card) => {
  // find the add-to-cart button
  const addToCartBtn = card.querySelector(".add-to-cart");

  // find the product price
  const productPrice = card.querySelector(".card-text");

  // get the product ID from the data-id attribute
  const productId = card.getAttribute("data-id");

  // add a click event listener to the add-to-cart button
  addToCartBtn.addEventListener("click", () => {
    // fetch the product price from the server
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        // update the product price on the card
        productPrice.textContent = `$${data.price}.00`;
      })
      .catch((error) => {
        console.error(error);
      });
  });
});
