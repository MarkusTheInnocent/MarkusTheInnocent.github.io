

let billederSort = [
    "Images/black-front.png",
    "Images/black-back.png",
    "Images/black-slide.png",
]
let billederHvid = [
    "Images/white-front.png",
    "Images/white-back.png",
    "Images/white-slide.png",
]

let imageIndex = 0;

let imageConSort = document.querySelector('.sortTshirt img');
let imageConHvid = document.querySelector('.hvidTshirt img');

let fremKnapV = document.querySelector('#fremKnap');
let tilbageKnapV = document.querySelector('#tilbageKnap');



function tilbageKnap1() {
   if(imageIndex > 0) { 
    imageIndex = imageIndex - 1
    imageConSort.src = billederSort[imageIndex]
    }
}

function fremKnap1() {
    if(imageIndex < 2){
        imageIndex = imageIndex + 1
    imageConSort.src = billederSort[imageIndex]
    }
}


let hvidFarve = document.querySelector('#white');
let sortFarve = document.querySelector('#black');

function whiteKnap() {
    imageConSort.src = null
}

function blackKnap() {
    imageConHvid.src = null
}



let produkt1AntalV = document.querySelector('#produkt1Antal');

let addVare1KnapVariable = document.querySelector('#addVare1Knap');
let tagVare1KnapVariable = document.querySelector('#tagVare1Knap');

console.log(produkt1AntalV.innerText);


function addVare1() {
    if(produkt1AntalV.innerText > 0 || produkt1AntalV.innerText == 0) {
        produkt1AntalV.innerText = Number(produkt1AntalV.innerText) + 1;
    }

}

function tagVare1() {
    if(produkt1AntalV.innerText > 0) {
        produkt1AntalV.innerText = produkt1AntalV.innerText - 1;
    }

}


let produkt2AntalV = document.querySelector('#produkt2Antal');

let addVare2KnapVariable = document.querySelector('#addVare2Knap');
let tagVare2KnapVariable = document.querySelector('#tagVare2Knap');

console.log(produkt2AntalV.innerText);


function addVare2() {
    if(produkt2AntalV.innerText > 0 || produkt2AntalV.innerText == 0) {
        produkt2AntalV.innerText = Number(produkt2AntalV.innerText) + 1;
    }

}

function tagVare2() {
    if(produkt2AntalV.innerText > 0) {
        produkt2AntalV.innerText = produkt2AntalV.innerText - 1;
    }

}

let produkt1PrisV = document.querySelector('#produkt1Pris');



