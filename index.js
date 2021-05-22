// make sound from animal name
function makeSound(animal) {
  var audio = new Audio("sounds/" + animal + ".mp3");
  audio.play();
};


// play sound on button click
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playSoundFromClick);
};

function playSoundFromClick() {
  var animal = this.className;
  makeSound(animal);
};


// play sound with key press
addEventListener("keydown", function(event) {
    playSoundFromKey(event.key)
  }
);

function playSoundFromKey(letter) {
  var animal = "none";
  switch (letter) {
      case "a": animal = "cat"; break;
      case "s": animal = "frog"; break;
      case "d": animal = "dog"; break;
      case "f": animal = "cow"; break;
      case "g": animal = "monkey"; break;
      case "h": animal = "bear"; break;
      case "j": animal = "donkey"; break;
      case "k": animal = "pig"; break;
      case "l": animal = "lion"; break;
      case "q": animal = "rooster"; break;
      case "w": animal = "chicken"; break;
      default: animal = "bubble"; break;
    }
  makeSound(animal);
};


//request new animal (submissions filed in google sheets)
const sheetURL = "https://script.google.com/macros/s/AKfycbxZMXhoVt_pn0J4UsgvK8nkFr4pH2oTzlnFAwjx_W_JprG27i7nczB6Eid5Fi8kpJjX/exec";

document.getElementById("newAnimal").addEventListener("click", getSuggestion);

function getSuggestion() {
  const newAnimal = prompt("Suggest a new animal:");
  const formData = new FormData();
  formData.append("suggestion", new String(newAnimal));
  fetch(sheetURL, {
        method: "POST",
        body: formData,
      })
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message))
};
