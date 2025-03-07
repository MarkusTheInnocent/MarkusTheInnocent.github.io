const products = [
    {name: "Product 1", price: 10, image: "black-front.png", available: true},
    {name: "Product 2", price: 15, image: "white-front.png", available: false},
    {name: "Product 3", price: 20, image: "black-front.png", available: true},
    {name: "Product 4", price: 10, image: "black-front.png", available: false},
    {name: "Product 5", price: 5, image: "white-front.png", available: true},
    {name: "Product 6", price: 30, image: "black-front.png", available: true},
];


let showUnavailabeProducts = false

let produktCardList = document.querySelector('#produktCard');


produktCardList.innerHTML = ""


for (let produkt of products) {
    let myList = ""
    myList += "<section class='stylecool'>"
    myList += "<p>"+ produkt.name +"</p>"
    myList += "<img src='Images/"+ produkt.image +"'></img>"
    myList += "<p>"+ produkt.price +" Kr.</p>"
    myList += "<p>available: "+ produkt.available +"</p>"
    myList += "</section>"
    produktCardList.innerHTML += myList;

   
}

function show(){

    produktCardList.innerHTML = ""

    if (showUnavailabeProducts == false && produkt.available == true || showUnavailabeProducts == true ) {
        produktCardList.innerHTML += myList;

    }
}


let filterButton = document.querySelector('#filter');

 function hide() {
    showUnavailabeProducts = true;
    show()

    }
 
