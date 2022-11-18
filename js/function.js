
let random
let arrNum = []
let element = document.getElementById("number")

function randNumber(number){
    let randomNumber = Math.floor(Math.random()*100 + 1)

   if(!arrNum.includes(randomNumber)){
        arrNum.push(randomNumber)
   }
    console.log(randomNumber)
    element.innerHTML = `${arrNum}`
}

setTimeout(clock, 3000);

function clock(){
    element.classList.add("none")
}

