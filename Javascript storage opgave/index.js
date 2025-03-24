

const liste = [
    {oppnant: "Kristian",   },
    {oppnant: "Philip",   },
    {oppnant: "Jonas",   },
    {oppnant: "Morten",   },
    {oppnant: "Martin",   },
    {oppnant: "Franco",   },
]



//Lave et bet system

//Randomizer mellem oppnants og hvem der vinder

//Finde en måde, at gemme data



function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomNumber2(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomWinner(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  
  let hej = document.querySelector('#hi')
  let hej2 = document.querySelector('#hi2')
  let king = document.querySelector('#winner')


function randomKnap() {
    const rndInt = randomNumber(0, 5);
    hej.innerHTML = liste[rndInt].oppnant

    const rndInt2 = randomNumber2(0, 5);
    hej2.innerHTML = liste[rndInt2].oppnant

}

function winnerKnap() {
    const rndIntWinner = randomNumber(0, 1);
    if(rndIntWinner == 0) {
    king.innerHTML = hej.innerHTML
    }
    
    if(rndIntWinner == 1) {
        king.innerHTML = hej2.innerHTML
        }
}



















let myTextField = document.querySelector('#myText')
let myNameField = document.querySelector('#myName')



myNameField.innerText = localStorage.getItem('varName')


function buttonClicked() {
    let name = myTextField.value

    myNameField.innerText = name

    localStorage.setItem('varName', name)
}






JSON.stringify(cart)


JSON.parse(localStorage.getItem())