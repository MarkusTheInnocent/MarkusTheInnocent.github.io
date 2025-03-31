



async function fetchCart() {
    let response = await fetch('https://dummyjson.com/carts/1')
    let jsonResponse = await response.json()

   

    //vise todos - Tilføje dem til vores liste

    let list = document.querySelector('#listeDisplay')
    
    for (let cartItem of jsonResponse.products) {
        let response = await fetch('https://dummyjson.com/carts/')
        let userResponse = await response.json()

        let myList = ""
        myList += `<section class=styleTime onclick="detail(${cartItem.id})">`
        myList += `<p>Navn: ${cartItem.title}</p>`
        myList += `<p>Pris: ${cartItem.price} kr.</p>`
        myList += `<img src=${cartItem.thumbnail}></img>`
        myList += `</section>`


        list.innerHTML += myList

    
}
}

async function detail(productID) {
    let response = await fetch(`https://dummyjson.com/products/${productID}`)
    let jsonResponse = await response.json()

    let list = document.querySelector('#listeDisplay')
    
    

    let myList = ""
    myList += `<section class=styleTime>`
    myList += `<h1>Navn: ${jsonResponse.title}</h1>`
    myList += `<p>Pris: ${jsonResponse.price} kr.</p>`
    myList += `<p>Beskrivelse: ${jsonResponse.description}</p>`
    myList += `<p>Katagori: ${jsonResponse.category}</p>`
    myList += `<p>Discount: ${jsonResponse.discountPercentage}%</p>`
    myList += `<p>Rating: ${jsonResponse.rating} ⭐</p>`
    myList += `<p>Antal: ${jsonResponse.stock}</p>`
    myList += `<p>Tags: ${jsonResponse.tags}</p>`
    myList += `<p>Dimensioner: Width:${jsonResponse.dimensions.width} Height: ${jsonResponse.dimensions.height} Depth: ${jsonResponse.dimensions.depth}</p>`
    myList += `<img src=${jsonResponse.images}</img>`
    myList += `</section>`
    

    list.innerHTML = myList


}




fetchCart()