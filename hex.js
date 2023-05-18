const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener ("click", function(){
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    // A mistake! (color.textContent = colors[hexColor];)
    // We were choosing out of a set of values the last time that is why we had this piece of code ((color.textContent = colors[randomNumber];)) the colors[randomNumber] implies that we are getting a value from an array. but this time it is not from an array but from a variable that would have fluid/randomized values
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length);
}