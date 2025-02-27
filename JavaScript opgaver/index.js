


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






/*
function addVare1() {
    produkt1Antal = produkt1Antal + 1
    produkt1Pris = produkt1Pris + 8
    document.getElementById("produkt1Antal").innerText = produkt1Antal
    document.getElementById("produkt1Pris").innerText = produkt1Pris
}

function tagVare1() {
    produkt1Antal = produkt1Antal - 1 
    produkt1Pris = produkt1Pris - 8
    if (produkt1Pris < 0) {
        return produkt1Pris = 8;
    }
    if (produkt1Antal < 30) {
        return produkt1Antal = 29;
    }
    document.getElementById("produkt1Antal").innerText = produkt1Antal
    document.getElementById("produkt1Pris").innerText = produkt1Pris
}


function addVare2() {
    produkt2Antal = produkt2Antal + 1
    produkt2Pris = produkt2Pris + 70
    document.getElementById("produkt2Antal").innerText = produkt2Antal
    document.getElementById("produkt2Pris").innerText = produkt2Pris
}

function tagVare2() {
    produkt2Antal = produkt2Antal - 1
    produkt2Pris = produkt2Pris - 70
    document.getElementById("produkt2Antal").innerText = produkt2Antal
    document.getElementById("produkt2Pris").innerText = produkt2Pris
}
*/
 
