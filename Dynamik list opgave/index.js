

fetch('https://dummyjson.com/todos')
.then(turnToJson)
.then(getItem)


function turnToJson(response) {
    return response.json()
}

function getItem(items) {
    console.log(items.todos)
    let myList = document.querySelector('#listeDisplay')
   
    
for (let mytodo of items.todos) {
    let todoText = mytodo.todo
    let complete = mytodo.completed

    let listStyle = ""
    listStyle += '<li>'+ todoText +'</li>'
    listStyle += '<li>'+ complete +'</li>'

    myList.innerHTML += listStyle;
}

}




function susKnapClick() {
     
}

fetch('https://dummyjson.com/todos?skip=30')
.then(turnToJson)
.then(getMoreThan)