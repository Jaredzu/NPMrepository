import { createDiv, createP } from "./components"
import { multipleOf } from "./utils";

import "./styles/text.sass";

let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum ut sed accusamus quae magni molestias at modi, praesentium voluptate provident est perspiciatis enim distinctio soluta aliquid omnis quasi numquam?"
let words = lorem.split(" ")

const DIV_ID = "top"
createDiv("top")

let div = document.getElementById(DIV_ID)
let p = document.createElement("p")
p.innerHTML = "Holas :)"
div.appendChild(p)


words.forEach((word, index) => {

    let elementClass = "black-test"
    if (multipleOf(index, 2)) { // si es multiplo de 2
        elementClass = "red-text"
    }
    if (multipleOf(index, 3)) {
        elementClass = "green-text"
    }
    if (multipleOf(index, 5)) {
        elementClass = "blue-text"
    }

    createP(word, elementClass)
})