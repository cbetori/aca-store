//Creates list on load
function productList(){
    let containerNames = document.getElementById('names')
    let containerButtons = document.getElementById('buttons')

    for(let i = 0; i<products.length; i++){
    
        let li = document.createElement('li')
        let text = document.createTextNode(products[i].name)
        li.appendChild(text)
        li.setAttribute('id', 'name_'+products[i].id)
        li.setAttribute('class', 'nameList')

        let button = document.createElement('button')
        let buttonText = document.createTextNode('Add to Cart')
        button.appendChild(buttonText)
        button.setAttribute('id', 'button_'+products[i]._id)
        button.setAttribute('class','buttonList')

        containerNames.appendChild(li)
        containerButtons.appendChild(button)

        list.appendChild(containerNames)
        list.appendChild(containerButtons)
    }

    document.getElementById('handleSearch').onclick = function searchBox(){ 
        let searchValue = document.getElementById('searchBox').value
        searchProducts(searchValue)
    }
    
    let buttonClass = document.getElementsByClassName('buttonList')
    for(let i = 0;i<buttonClass.length; i++){
        buttonClass[i].onclick = function addToCart(){
        console.log(buttonClass[i].id)
        }
    }
}

window.onload = productList
//Search
function searchProducts(searchValue){
    for(let i = 0; i<products.length; i++){
        if(searchValue === products[i]['name']){
            document.getElementById('searchResult').innerHTML = products[i]['name']
            return
        }
    }
}

//Shopping Cart


//r2pz
