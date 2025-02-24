
let produkt1 = "Bannan"

console.log(produkt1)

let produkt1Pris = 8

console.log("Pris i kr:", produkt1Pris)

let produkt1Antal = 30

console.log("Antal:", produkt1Antal)


let produkt2 = "Burger"

console.log(produkt2)

let produkt2Pris = 70

console.log("Pris i kr:", produkt2Pris)

let produkt2Antal = 20

console.log("Antal:", produkt2Antal)



let samletAntal = produkt1Antal + produkt2Antal

console.log("Samlet Antal:",samletAntal)


let samletPris = (produkt1Pris * produkt1Antal) + (produkt2Pris * produkt2Antal)

console.log("Samlet Pris:",samletPris)




document.getElementById("produkt1").innerText = produkt1
document.getElementById("produkt1Pris").innerText = produkt1Pris
document.getElementById("produkt1Antal").innerText = produkt1Antal



document.getElementById("produkt2").innerText = produkt2
document.getElementById("produkt2Pris").innerText = produkt2Pris
document.getElementById("produkt2Antal").innerText = produkt2Antal



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

