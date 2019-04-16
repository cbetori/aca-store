//Creates list on load
let cartArray = [];
let listArray = [];
let buttonText = "Add to Cart";

let divCreator = (element) => {
  let li =
    `<div id=list${element._id} value=${element._id} class=list>
    <button id=dropdown_${element._id} class='buttons dropdowns' onclick=handleDropDown(${element._id})>&#9660</button>
        <li
        class=listItems 
        value=${element._id}>
        ${element.name}
        </li> 
    <button
        id=button_${element._id}
        value=${element._id} 
        class=buttons
        onclick=handleAddToCart(value)>
        ${buttonText}
        </button>
    </div>
    <div id=dropdownClick_${element._id} class='description hide'>
    Description - ${element.description} <br>
    Rating - ${element.rating} <br>
    Price - ${element.price} <br>
    Category - ${element.catergory} <br>
    </div>`
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
  document.getElementById("button_"+id).innerHTML = 'Remove'
  document.getElementById("shoppingCart").appendChild(document.getElementById("list" + id));
  document.getElementById("shoppingCart").appendChild(document.getElementById("dropdownClick_" + id));
};

//Search
const searchProducts = searchValue => {
  let filteredProducts = products.filter(p => {
    return p.name === searchValue;
  });
  productList(filteredProducts, list);
};

const setSearch=()=>{
  document.getElementById("handleSearch").onclick = searchBox => {
    let searchValue = document.getElementById("searchBox").value;
    searchProducts(searchValue);
  };
}

//Shopping Cart
const toggleCartView = cartView => {
  if (cartView.className === "hide") {
    cartView.className = "show";
  } else {
    cartView.className = "hide";
  }
  console.log(cartView.className)
};

const setCart=()=>{
  let shoppingCartBtn = document.getElementById("shoppingCartBtn");
  let cartView = document.getElementById("cart");
  shoppingCartBtn.onclick = () => {
    toggleCartView(cartView);
  };
}

const handleDropDown= elementID =>{
     let dropdown = document.getElementById('dropdownClick_'+elementID)
     console.log(dropdown)
     if (dropdown.className === "description hide") {
      dropdown.className = "description show";
    } else {
      dropdown.className = "description hide";
    }
    
}

// const fillDrowpDown=()=>{
//   console.log(elementID)
// }

window.onload = listArrayGenerator("listAll");
window.onload = setSearch();
window.onload = setCart();


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



// window.onload = () => productList(products, list);





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
