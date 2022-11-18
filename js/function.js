
let random
let arrNum = [];

function randNumber(){
    let randomNumber = Math.floor(Math.random()*100 + 1)

   if(!arrNum.includes(randomNumber)){
        arrNum.push(randomNumber)
   }
    console.log(randomNumber)
    document.getElementById("number").innerHTML = `${arrNum}`
}