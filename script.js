function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let randomNumber = getRandomInt(1, 100);   
  let guessedNumber;
  let count = 0;
  const compute = () => {
    count++;
    guessedNumber = document.getElementById("guess").value;
    if (guessedNumber < randomNumber) {
        document.getElementById("score").innerHTML = ``;
        document.getElementById("ans").innerHTML = "The number is Greater than you guessed";
    } else if (guessedNumber > randomNumber) {
        document.getElementById("ans").innerHTML = "The number is Smaller than you guessed";
    } else {
         document.getElementById("ans").innerHTML=`<b>CONGRATULATION</b><br>Your score is ${100 - count}`;
//         document.getElementById("score").innerHTML = `Your score is ${100 - count}`;
        randomNumber = getRandomInt(1, 100);
        count=0;
    }
}
 
