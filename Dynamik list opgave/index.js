







async function fetchTodos() {
    let response = await fetch('https://dummyjson.com/todos')
    let jsonResponse = await response.json()

    //vise todos - Tilføje dem til vores liste

    let list = document.querySelector('#listeDisplay')
    
    for (let todoItem of jsonResponse.todos) {
        if(todoItem.completed) {
            list.innerHTML += `<li>✅ ${todoItem.todo}</li>`
        } else {
            list.innerHTML += `<li>❌ ${todoItem.todo}</li>`
        }
    }
}

fetchTodos()


let nextSkip = 30
let totalt = 0

async function susKnapClick() {

    //Tilføj de næste 30 todos til vores API/liste


    
    if(totalt != 0 && nextSkip >= totalt){
        return alert("Ikke mere")
    }
    
    let response = await fetch(`https://dummyjson.com/todos?skip=${nextSkip}`)
    let jsonResponse = await response.json()
    totalt = jsonResponse.total

    nextSkip += 30


    //vise todos - Tilføje dem til vores liste

    let list = document.querySelector('#listeDisplay')
    
    for (let todoItem of jsonResponse.todos) {
        if(todoItem.completed) {
            list.innerHTML += `<li>✅ ${todoItem.todo}</li>`
        } else {
            list.innerHTML += `<li>❌ ${todoItem.todo}</li>`
        }
    }
}










let listeOfPeople = document.querySelector('#testPlace')

let testArray = [
    {name:"Caesar", hobby:"Baseball"},
    {name:"Mona", hobby:"footkic"},
    {name:"peter", hobby:"tambo"},
    {name:"lars", hobby:"pool"},
]


let testNum = 2

function testFuncktion() {
    
    listeOfPeople.innerHTML = ""

for (const abe of testArray) {
    if(testNum == 2) {
        listeOfPeople.innerHTML += `<li>${abe.hobby}</li>`
    } else {
        listeOfPeople.innerHTML += `<li>${abe.name}</li>`
    }
   

    
}

}
testFuncktion()


function bigClick() {
    
    testNum = 1
    testFuncktion()
    
}










async function fetchTodos() {
    let response = await fetch('https://dummyjson.com/todos?limit=10')
    let jsonResponse = await response.json()

   

    //vise todos - Tilføje dem til vores liste

    let list = document.querySelector('#listeDisplay')
    
    for (let todoItem of jsonResponse.todos) {
        let response = await fetch('https://dummyjson.com/' + todoItem.userId)
        let userResponse = await response.json()

        if(todoItem.completed) {
            list.innerHTML += `<li>✅ ${todoItem.todo} - UserID: ${userResponse.firstName}</li>`
        } else {
            list.innerHTML += `<li>❌ ${todoItem.todo}- UserID: ${userResponse.firstName}</li>`
        }
    }
}

fetchTodos()