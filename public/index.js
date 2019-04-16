//Creates list on load
let cartArray = [];
let listArray = [];
let buttonText = "Add to Cart";

let divCreator = (element) => {
  let li =
    `<div id=list${element._id} value=${element._id} class=list>
        <li
        class=listItems 
        value=${element._id}>
        ${element.name}
        </li>` +
    `<button
        id=button_${element._id}
        value=${element._id} 
        class=buttons
        onclick=handleAddToCart(value)>
        ${buttonText}
        </button>
    </div>`;
  listArray.push(li);
};

let listArrayGenerator = (location, elementID) => {
  location = document.getElementById(location);
  products.map(element => {
    if (elementID === element._id || elementID === undefined)
      divCreator(element);
  });
  listArray = listArray.join("");
  location.innerHTML = listArray;
};

//This returns product id
let handleAddToCart = id => {
  console.log(id)
  let elementID = document.getElementById("shoppingCart").appendChild(document.getElementById("list" + id));
  console.log(id)
  // cartArray.push(elementID);
  // listArrayGenerator("shoppingCart", elementID, array);
};

window.onload = listArrayGenerator("listAll");
//console.log("list- "+listArray,'\n' ,"cart- "+cartArray)

// function productList(products, list) {
//   let containerNames = document.getElementById("names" + list);
//   let containerButtons = document.getElementById("buttons" + list);

//   products.map((element, index) => {
//     let li = document.createElement("li");
//     li.setAttribute("id", list + element._id);
//     li.setAttribute("class", "nameList");
//     containerNames.appendChild(li);
//     li.innerHTML = element.name;

//     let button = document.createElement("button");
//     button.setAttribute("value", element._id);
//     containerButtons.appendChild(button);
//     button.setAttribute("class", "buttonList");
//     if (list === "List") {
//       button.innerHTML = "Add to Cart";
//     } else {
//       button.innerHTML = "Remove";
//     }
//   });

//   document.getElementById("handleSearch").onclick = searchBox => {
//     let searchValue = document.getElementById("searchBox").value;
//     searchProducts(searchValue);
//   };

//   let buttonClass = document.getElementsByClassName("buttonList");
//   for (let i = 0; i < buttonClass.length; i++) {
//     buttonClass[i].onclick = function handleCart() {
//       if (buttonClass[i].innerHTML === "Add to Cart") {
//         addToCart(parseInt(buttonClass[i].value));
//       } else {
//         console.log(document.getElementById("shoppingCart"));
//         buttonClass[i].innerHTML = "";
//         document.getElementById("Cart" + (i + 1)).innerHTML = "";
//       }
//     };
//   }

//   let shoppingCartBtn = document.getElementById("shoppingCartBtn");
//   let cartView = document.getElementById("shoppingCart");
//   shoppingCartBtn.onclick = () => {
//     toggleCartView(cartView);
//   };
// }

// window.onload = () => productList(products, list);

// //Search
// const searchProducts = searchValue => {
//   let filteredProducts = products.filter(p => {
//     return p.name === searchValue;
//   });
//   productList(filteredProducts, list);
// };

// //Shopping Cart
const toggleCartView = cartView => {
  if (cartView.className === "list hide") {
    cartView.className = "list show";
  } else {
    cartView.className = "list hide";
  }
};

// let cartArray = [];
// const addToCart = value => {
//   products.map((element, index) => {
//     if (value === element._id) {
//       cartArray.push(element);
//     }
//   });
//   removeProducts("Cart");
//   productList(cartArray, "Cart");
// };

// //remove products
// const removeProducts = list => {
//   let containerNames = document.getElementById("names" + list);
//   let containerButtons = document.getElementById("buttons" + list);
//   containerNames.innerHTML = "";
//   containerButtons.innerHTML = "";
// };
