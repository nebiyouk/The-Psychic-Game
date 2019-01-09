
var alphabet, rand, compChoice, win, loss, gLeft, uGSF
//1 get array of alphabet
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


win = 0;
loss = 0;
gLeft = 9;
uGSF = [];

// functions to update
function updateGL() {
  document.querySelector('#g-l').innerHTML = gLeft;
}

function updateGSF() {
  document.querySelector('#g-s-f').innerHTML = uGSF
}

function resetCompGuess() {
  rand = Math.floor(Math.random() * 25) + 1;
  //get random choice from comp
  compChoice = alphabet[rand]
}


function reset() {
  uGSF = []
  gLeft = 9
  updateGSF()
  updateGL()
  resetCompGuess()
}

//run on app start
resetCompGuess()
updateGL()

//when user presses key grab the letter
document.addEventListener("keypress", function (event) {
  gLeft--;
  var letter = String.fromCharCode(event.keyCode).toLowerCase();
  if (letter === compChoice) {
    win++;
    document.querySelector("#w").innerHTML = win;
    reset();
  } else {
    if (gLeft === 0) {
      loss++
      document.querySelector('#l').innerHTML = loss
      reset()
    } else {
      uGSF.push(letter)
      updateGL();
      updateGSF()
      resetCompGuess()
    }
  }
})
//update the ui
