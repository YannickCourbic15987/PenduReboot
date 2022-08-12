const word = [
  "php",
  "symfony",
  "laravel",
  "apache",
  "javascript",
  "html",
  "css",
  "password",
  "passwordverify",
  "passwordhash",
  "design",
  "button",
  "container",
  "emoji",
  "secret",
  "token",
  "java",
  "python",
];
let randomId = Math.floor(Math.random() * word.length);
let randomWord = word[randomId];
let letters = "azertyuiopqsdfghjklmwxcvbn";
let letter = letters.split("");

function MaskedWord() {
  let Masked = randomWord.split("");
  for (let i = 0; i < Masked.length; i++) {
    Masked[i] = "*";
  }
  return Masked;
}

function displayMaskedWord() {
  const containerWord = document.querySelector("#containerWord");
  const btnGen = document.createElement("button");
  const wordGen = document.createElement("p");
  containerWord.appendChild(btnGen);
  containerWord.appendChild(wordGen);
  btnGen.id = "btnGen";
  btnGen.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
  wordGen.id = "wordGen";
  wordGen.textContent = MaskedWord().join(" ");
  btnGen.addEventListener("click", () => {
    location.reload();
  });
}
function KeyboardCreate(letter) {

  const keyboard = document.querySelector("#keyboard");
  let life = 7;
  let numero = 1;
  for (let i = 0; i < letter.length; i++) {
    const btnLetter = document.createElement("button");
    keyboard.appendChild(btnLetter);
    btnLetter.textContent = letter[i];
    btnLetter.className = "btnLetter"
    btnLetter.addEventListener("click", (e) => {
      indexof(e.target.textContent, randomWord);
      btnLetter.disabled=true
      
      if(randomWord.indexOf(e.target.textContent) === -1 ){
        life--
        numero++
        lifePoint(life);
        changePicture(numero);
      }
      



    });
  }
}

function indexof(btnText, randomWord) {
  //   console.log(btnText);
  let position = [];
  //   let tabRandomWord = randomWord.split("");
  //   console.log(tabRandomWord);
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === btnText) {
      position.push(i);
      updateMaskedWord(position, btnText);
  
    }
    
  }
}

function updateMaskedWord(position, btnText) {
  const wordGen = document.querySelector("#wordGen");
  //   console.log(position);
  let updateWordTab = wordGen.textContent.split(" ");
  for (let i = 0; i <= position.length; i++) {
    updateWordTab[position[i]] = btnText;
    // console.log(updateWordTab);
  }
  wordGen.textContent = updateWordTab.join(" ");
}

function lifePoint(life){
  const keyboard = document.querySelector("#keyboard");
   if(life === 0 ){
    keyboard.style.display = "none"
   }
}

function changePicture(numero){
  // console.log(numero);
  const img = document.querySelector("#imgPendu");
  img.src =`/asset/img/image-${numero}.jpg`;
  
}

KeyboardCreate(letter);
displayMaskedWord();
