class Products {
    constructor(name, message) {
      this.name = name.toLowerCase();
      this.message = message;
    }
  
    ask() {
      console.log(this.name + this.message);
    }
  }
  
  const boards = new Products("Skates", "Decks Models");
  const apparel = new Products("Apparel", "Clothes");
  
  function selectproducts() {
    let products = prompt("What product do you want?");
  
    if (products.toLowerCase() === "boards") {
      alert(boards.message);
    } else if (products.toLowerCase() === "apparel") {
      alert(apparel.message);
    } else {
      alert("Not Found");
    }
  }
  
  selectproducts();
  
  const productsArray = [
    { products: "boards", numberProdutcs: 2 },
    { products: "apparel", numberProdutcs: 2 },
  ];
  
  const name = productsArray.map((o) => o.name);
  console.log(productsArray);
  // [ 'decks', 'apparel' ]
  const numberProdutcs = productsArray.map((o) => o.number);
  // [ '2', '2' ]
  
  // Get references to the form elements
  const emailInput = document.querySelector("#newsletter1");
  const subscribeBtn = document.querySelector("#subscribeButton");
  
  // Add event listener to the Subscribe button
  subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value;
  
    // Retrieve existing email list from local storage
    let emailList = JSON.parse(localStorage.getItem("emailList")) || [];
  
    // Add new email to the list
    emailList.push(email);
  
    // Save updated email list to local storage
    localStorage.setItem("emailList", JSON.stringify(emailList));
  
    // Display a success message to the user
    alert("Thank you for subscribing!");
  });
  
  // Initialize the email list from local storage
  let emailList = JSON.parse(localStorage.getItem("emailList")) || [];
  
  // Display the email list on the page
  const emailListElement = document.querySelector("#emailList");
  emailListElement.innerHTML = emailList.join(", ");
  
  const nameProducts = [
    {
      name: "Arctic Mist",
      description: "Deck size 5'3",
      price: 65.00,
    },
    {
      name: "Obsidian Noir",
      description: "Deck size 5'3",
      price: 65.00,
    },
    {
      name: "Rebel Rider Backpack",
      description: "leather backpack",
      price: 450.00,
    },
    {
      name: "Rider's Denim Jacket",
      description: "Denim Jacket",
      price: 240.00,
    },
  ];
  
  const printProducts = () => {
    const listaElemento = document.getElementById("product-list");
  
    products.forEach((product) => {
      const itemElemento = document.createElement("li");
  
      itemElemento.innerText = `name: ${product.name} - price: $ ${product.price}\n${product.description}`;
  
      listaElemento.appendChild(itemElemento);
    });
  };
  printProducts();
  
  // Pause the video when the user scrolls the page.
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 0) {
      $("#my-video")[0].pause();
    } else {
      $("#my-video")[0].play();
    }
  });