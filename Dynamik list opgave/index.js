







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


