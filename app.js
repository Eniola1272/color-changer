const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //declared a variable containing an array.
const btn = document.getElementById("btn"); //Selected a button by its Id.
const color = document.querySelector(".color"); //selected a span so we can change it using javascript.

// We want numbers generated at random when we click on the button. We would need to create a function for random numbers.
btn.addEventListener("click", function () {
    
    // get random number between 0 and 3 colors[3]
    const randomNumber = getRandomNumber();
    
    // we are selecting what we want to change - that is, the backgroundcolor
    document.body.style.backgroundColor = colors[randomNumber]; // This changes the background color. Notice how we selected it. We used elements here but in other places, you can use ids or classes.
    document.body.style.transform = this.translateY()

    color.textContent = colors[randomNumber]; //This changes text that tells us the color we are using at the moment
   
});

// Function to get the random number
// This is where we set up the function for getting random numbers so we can use it in the event listener.
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

