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

function updateCart() {
  const counterElement = document.getElementById("cart-count-nav");
  count++;
  counterElement.innerHTML = count;
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
