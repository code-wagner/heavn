const productsArray = [
  { products: "boards", numberProducts: 2 },
  { products: "apparel", numberProducts: 2 },
];

function selectProducts(criteria) {
  return productsArray.filter((product) => product[criteria] > 0);
}

const name = productsArray.map((o) => o.name);
console.log(productsArray);
// [ 'decks', 'apparel' ]
const numberProdutcs = productsArray.map((o) => o.number);
// [ '2', '2' ]

const nameProducts = [
  {
    name: "Arctic Mist",
    description: "Deck size 5'3",
    price: "$65.00",
  },
  {
    name: "Obsidian Noir",
    description: "Deck size 5'3",
    price: "$65.00",
  },
  {
    name: "Rebel Rider Backpack",
    description: "leather backpack",
    price: "$450.00",
  },
  {
    name: "Rider's Denim Jacket",
    description: "Denim Jacket",
    price: "$240.00",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("#newsletter1");
  const subscribeBtn = document.querySelector("#subscribeButton");

  subscribeBtn.addEventListener("click", function () {
    const email = emailInput.value;

    let emailList = JSON.parse(localStorage.getItem("emailList")) || [];

    if (emailList.includes(email)) {
      swal("Oops!", "This email is already subscribed!", "error");
    } else {
      emailList.push(email);
      localStorage.setItem("emailList", JSON.stringify(emailList));
      let count = emailList.length;
      swal({
        title: "Nice!",
        text: `Thank you for subscribing! You now have ${count} emails registered.`,
        icon: "success",
        buttons: ["Cancel", "Clear List"],
      }).then((value) => {
        if (value) {
          emailList = [];
          localStorage.setItem("emailList", JSON.stringify(emailList));
          const emailListElement = document.querySelector("#emailList");
          emailListElement.innerHTML = "";
        }
      });
    }
  });

  let emailList = JSON.parse(localStorage.getItem("emailList")) || [];

  const emailListElement = document.querySelector("#newsletter1");
  emailListElement.innerHTML = emailList
    .map((email) => `<li>${email}</li>`)
    .join("");
});

// Pause the video when the user scrolls the page.
jQuery(window).scroll(function () {
  var height = jQuery(window).scrollTop();
  if (height > 0) {
    jQuery("#my-video")[0].pause();
  } else {
    jQuery("#my-video")[0].play();
  }
});
