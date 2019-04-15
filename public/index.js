//Creates list on load
let list = "List";

function productList(products, list) {
  let containerNames = document.getElementById("names" + list);
  let containerButtons = document.getElementById("buttons" + list);

  products.map((element, index) => {
    let li = document.createElement("li");
    li.setAttribute("id", list + element._id);
    li.setAttribute("class", "nameList");
    containerNames.appendChild(li);
    li.innerHTML = element.name;

    let button = document.createElement("button");
    button.setAttribute("value", element._id);
    containerButtons.appendChild(button);
    button.setAttribute("class", "buttonList");
    if (list === "List") {
      button.innerHTML = "Add to Cart";
    } else {
      button.innerHTML = "Remove";
    }
  });

  document.getElementById("handleSearch").onclick = searchBox => {
    let searchValue = document.getElementById("searchBox").value;
    searchProducts(searchValue);
  };

  let buttonClass = document.getElementsByClassName("buttonList");
  for (let i = 0; i < buttonClass.length; i++) {
    buttonClass[i].onclick = function handleCart() {
      if (buttonClass[i].innerHTML === "Add to Cart") {
        addToCart(parseInt(buttonClass[i].value));
      } else {
        console.log(document.getElementById("shoppingCart"));
        buttonClass[i].innerHTML = "";
        document.getElementById("Cart" + (i + 1)).innerHTML = "";
      }
    };
  }

  let shoppingCartBtn = document.getElementById("shoppingCartBtn");
  let cartView = document.getElementById("shoppingCart");
  shoppingCartBtn.onclick = () => {
    toggleCartView(cartView);
  };
}

window.onload = () => productList(products, list);

//Search
const searchProducts = searchValue => {
  let filteredProducts = products.filter(p => {
    return p.name === searchValue;
  });
  productList(filteredProducts, list);
};

//Shopping Cart
const toggleCartView = cartView => {
  if (cartView.className === "list hide") {
    cartView.className = "list show";
  } else {
    cartView.className = "list hide";
  }
};

let cartArray = [];
const addToCart = value => {
  products.map((element, index) => {
    if (value === element._id) {
      cartArray.push(element);
    }
  });
  removeProducts("Cart");
  productList(cartArray, "Cart");
};

//remove products
const removeProducts = list => {
  let containerNames = document.getElementById("names" + list);
  let containerButtons = document.getElementById("buttons" + list);
  containerNames.innerHTML = "";
  containerButtons.innerHTML = "";
};
