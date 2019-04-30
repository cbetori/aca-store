'use strict'
////////////////////////////////////////////////////////////////////////////////
let filter =( value, key) =>products.filter((element)=>{return element.name === value})
////////////////////////////////////////////////////////////////////////////////
let createList = (array, listView) =>{
    let getElements = document.getElementById('listAll')
    let list = array.map((element)=>{return element})
    let divInsert = createDIV(list)
    //Handle any time no results turn up
    divInsert = divInsert === undefined ? `<li class=list>No Results Found</li>`:divInsert
    listView = `<h1>${listView}</h1>`
    getElements.innerHTML = listView+divInsert
}

let createDIV = (array) =>{
    let divInsert = []
    let container
    array.map((element)=>{
        let li =    `<div id=list${element._id}
                    value=${element._id}
                    class=list>
                    ${productNamesDIV(element)}
                    ${viewDetailsDIV(element)}
                    ${addToCartDIV(element)}
                    </div>`
        divInsert.push(li)
        container = divInsert.join('')
    })
    return container
}

let productNamesDIV =(element)=>{
    let li =  `<li onclick=handleItemClick(${element._id}) class=listName>${element.name}</li>`
    return li
}

let viewDetailsDIV =(element)=>{
    let detailsBTN = `<button value=${element._id} class=listBTN onclick=handleItemClick(${element._id})>View Details</button>`
    return detailsBTN  
}

let addToCartDIV =(element)=>{
    let li = `<button value=${element._id} class=listBTN onclick=cartClick(value)>Add to Cart</button>`
    return li
}

let handleViewAll=()=>{createList(products, "All Products")}

////////////////////////////////////////////////////////////////////////////////
let handleItemClick=(id)=>{console.log(id)}

////////////////////////////////////////////////////////////////////////////////
//Handle Cart

//These hanlde session storage
let loadCart =()=>{return stringOfNumbersToArray(sessionStorage.getItem('id'))}
let clearCart=()=>{return sessionStorage.clear()}

let cartClick =(value)=>{
    let cart = loadCart()
    cart.push(parseFloat(value))
    cart = [...new Set(cart) ]
    console.log(cart)
    sessionStorage.setItem('id',cart)
    return
}

//Retrieving from session storage returns string rather than intger.
let stringOfNumbersToArray=(string)=>{
    if(string != null){
    let array = string.split(",").map((value)=>{
        return parseInt(value, 10)
     })
    return array
    }
    return []
}

let getCartItems=()=>{
    let cart = stringOfNumbersToArray(sessionStorage.getItem('id'))
    let cartItems = [] 
    cart.map((id)=>{
        products.filter((element)=>{
            if(element._id === id){
                cartItems.push(element)
            }
        })
    })
    return cartItems
}

let viewCart=()=>{
    let cartItems = getCartItems()
    cartItems = cartItems.length === 0 ? []:cartItems
    createList(cartItems, "Cart")
    console.log(cartItems)
    return cartItems
}
////////////////////////////////////////////////////////////////////////////////
//Handle Search
let handleSearchValue=()=>{
    let value = document.getElementById('searchBox').value
    return value
}

let searchList=()=>{
    let searchValue = handleSearchValue()
    let getSearchedValue =(searchValue)=>products.filter((element)=>{return element.name === searchValue})
    getSearchedValue = getSearchedValue(searchValue)
    createList(getSearchedValue, 'Search Results')
} 


////////////////////////////////////////////////////////////////////////////////
//Handle Login
let handleLogin=()=>{console.log("This cant sign anyone in yet...")}

//On Load Functions
handleViewAll(products, "All Products")
//Used to get cart from session memeory
loadCart()

