
let random
let arrNum = []
let arrNumUtente = []
let element = document.getElementById("number")
let input = document.getElementById("text")
let numUno = document.getElementById("numUno")
let numDue = document.getElementById("numDue")
let numTre = document.getElementById("numTre")
let numQuattro = document.getElementById("numQuattro") 
let numCinque = document.getElementById("numCinque") 

function randNumber(number){
    let randomNumber = Math.floor(Math.random()*100 + 1)

   if(!arrNum.includes(randomNumber)){
        arrNum.push(randomNumber)
   }
    console.log(randomNumber)
    element.innerHTML = `${arrNum}`
}

function clock(){
    element.classList.add("none")
    input.classList.remove("none")
    input.classList.add("block")
}

function check(){
    arrNumUtente.push(numUno, numDue, numTre, numQuattro, numCinque);

    console.log(arrNumUtente)
}

