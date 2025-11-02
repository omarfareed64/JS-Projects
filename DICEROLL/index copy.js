
let diceRollBtn = document.getElementById("dicerollbtn");
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
diceRollBtn.onclick = function(){
  let numberOfDice = document.getElementById("numofdice").value;
  let diceRollResult = document.getElementById("dicerollresult");
  let diceImages = document.getElementById("diceimages");

  let values = [];
  let images = [];

    for (let i=0 ; i<numberOfDice;i++){
        let value = getRandomInt(1,7);
        values.push(value);
        images.push(`<img src= "pics/${value}.svg" style = "width: 150px"alt = ${value}></img>`);
    };
    diceRollResult.textContent = `Dice : ${values.join(" , ")}`;
    diceRollResult.innerHTML = images.join('');
    
}


