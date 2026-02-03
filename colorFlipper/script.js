//select all elements
const btn = document.querySelector("#btn");
const colorCode = document.querySelector("#color-code");

//Hex characeters for generating color code
const hexChars = "0123456789ABCDEF";

//function to generate random hex color code
function generateHexColor() {
  let color = "#";

  //Generate 6 random hex characters
    for (let i = 0; i < 6; i++) {
        //get random index from hexChars(0-15)
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        //append the character at randomIndex to color
        color += hexChars[randomIndex];
    }
    return color;
}

//add event listener to button
btn.addEventListener("click", function() {
    //generate random hex color
    const randomColor = generateHexColor();
    //set the background color of body
    document.body.style.backgroundColor = randomColor;
    //update the color code display
    colorCode.textContent = randomColor;
});
