export const createP = (text = " ", elementClass = " ") => {
    let element = document.createElement("p")
    element.innerHTML = text
    element.classList.add(elementClass)
    document.body.appendChild(element)
}

export const createDiv = (id= "myDiv") => {
    let element = document.createElement("div")
    element.id = id
    document.body.appendChild(element)
    
}