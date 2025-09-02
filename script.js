// Part 1
var name = "Amianda Robinson";
let courses = ["HTML", "CSS", "JavaScript", "React", "Node"];
const age = 25;

if (age >= 18) {
    console.log("you canvote.");
} else {
    console.log("you cannot vote.");
}


// Part 2
function intro(){
    console.log("Welcome to introduction to JS with PLP. ")
}

const greetPerson = (name) => {
    console.log(`Hello ${name}`)
}


// Part3
for(let i = 0; i < 11; i++){
    console.log(i)
}

let i = 0
    while (i < 5) {
        console.log(`${i} is less than 5`)
        i ++;
    }


// Part 4
function manipulateTheDom(){
  let body = document.getElementById("body")
  let button = document.getElementById("button")
  let heading = document.getElementById("heading")
  let paragraph = document.getElementById("paragraph") 
  
  body.style.backgroundColor = "aqua"
  heading.style.textDecoration = "underlined"
  paragraph.style.color = "red"
  button.style.fontWeight = "bold"
  button.style.borderRadius = "10px"
}
    