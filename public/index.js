'use strict'
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let filter =( value, key) =>products.filter((element)=>{return element.name === value})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let createDIV = (array) =>{
    let divInsert = []
    let container
    array.map((element)=>{
        let li =    `<div id=list${element._id}
                    value=${element._id}
                    class=list>
                    ${productNamesDIV(element)}
                    ${addToCartDIV(element)}
                    </div>`
        divInsert.push(li)
        container = divInsert.join('')
    })
    return container
}

let productNamesDIV =(element)=>{
    let li =  `<li class=listName>${element.name}</li>`
    return li
}

let addToCartDIV =(element)=>{
    let li = `<button id=list${element._id} value=${element._id} class=listBTN onclick=cartClick(value)>Add to Cart</button>`
    return li
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let insertDOM = () =>{
    getElements()
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let createList = (array) =>{
    let list = array.map((element)=>{return element})
    let divInsert = createDIV(list)
    // let cartInsert = addToCartDIV(list)
    // cartInsert = cartInsert.join('')
    //divInsert = divInsert.join('')
    getElements().innerHTML = divInsert
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let getElements =()=>{
    let allListElement = document.getElementById('listAll')
    return allListElement
}
let cartListElement = document.getElementById('shoppingCart')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    console.log(cartItems)

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let handleSearchValue=()=>{
    let value = document.getElementById('searchBox').value
    return value
}

let searchList=()=>{
    let searchValue = handleSearchValue()
    let getSearchedValue =(searchValue)=>products.filter((element)=>{return element.name === searchValue})
    getSearchedValue = getSearchedValue(searchValue)
    createList(getSearchedValue)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
createList(products)
loadCart()

