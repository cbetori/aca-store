//Creates list on load
function productList(products){

    let containerNames = document.getElementById('names')
    let containerButtons = document.getElementById('buttons')

    products.map((element, index)=>{ 

        let li = document.createElement('li')
        li.setAttribute('value', element._id)
        li.setAttribute('class', 'nameList')
        containerNames.appendChild(li)
        li.innerHTML = element.name

        let button = document.createElement('button')
        button.setAttribute('value', element._id)
        button.setAttribute('class', 'buttonList')
        containerButtons.appendChild(button)
        button.innerHTML = 'Add to Cart'
    })

    document.getElementById('handleSearch').onclick = searchBox=>{ 
        let searchValue = document.getElementById('searchBox').value
        searchProducts(searchValue)
    }
    
    let buttonClass = document.getElementsByClassName('buttonList')
    for(let i = 0;i<buttonClass.length; i++){
        buttonClass[i].onclick = function addToCart(){
        console.log(buttonClass[i].value)
        }
    }
}

window.onload = ()=> productList(products)

//Search
const searchProducts = (searchValue) =>{
    let filterredProducts = products.filter((p)=>{
        return p.name === searchValue
    })
    productList(filterredProducts)
}

//Shopping Cart


//r2pz
