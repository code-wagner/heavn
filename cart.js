const cards = document.querySelectorAll(".card");

let count = 0;

cards.forEach((card) => {
  // find the add-to-cart button
  const addToCartBtn = card.querySelector(".add-to-cart");

  // add a click event listener to the add-to-cart button
  addToCartBtn.addEventListener("click", () => {
    const counterElement = document.getElementById("cart-count-nav");
    count++;
    counterElement.innerHTML = count;
  });
});

const cartItems = [];

function updateCart(product) {
  const counterElement = document.getElementById("cart-count-nav");
  count++;
  counterElement.innerHTML = count;
  // add product to cart
  cartItems.push(product);

  // update cart items list
  const cartItemsList = document.querySelector(".cart-items ul");
  cartItemsList.innerHTML = "";
  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
      ${item.name} <span class="badge badge-primary badge-pill">${item.quantity}</span>
    `;
    cartItemsList.appendChild(listItem);
  });
}

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    listProducts(data.products);
  })
  .catch((error) => {
    console.error(error);
  });

function listProducts(productlist) {
  const listElement = document.getElementById("card-list");

  productlist.forEach((item) => {
    const listItem = document.createElement("div");
    listItem.classList = "col-md-6 col-lg-3 mb-4";
    listItem.innerHTML = `            
    <div class="card card-shadow border-0" data-id="Deck-1">
        <img src="${item.image}" class="card-img-top rounded-0"
            alt="Product 1">
        <div class="card-body">
            <h5 class="card-title mb-0">${item.name}</h5>
            <p class="card-text mb-2">${item.price}</p>
            <button class="btn btn-dark btn-block add-to-cart" onclick=updateCart()>Add to Cart</button>
        </div>
    </div>
`;
    listElement.appendChild(listItem);
  });
}
