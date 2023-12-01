let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "oranguru.png",
  level: 45,

};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon;

let player = {
  Name: "Bjarne",
  Image: "pokemonTrainerIdle.png",
  Pokemon: [pikachu, bulbasaur, oranguru, drowzee],
}

  let app = document.getElementById("app");

  updateView();
  
  function updateView() {
    getRandomPokemon();
app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      
      <div class="bottomScreen">
          <div class="player">
              <img src="${player.Image}">
              <div>${player.Name}</div>
          </div>
  
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
  
      </div>
    </div>
    `;
  }

function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
    <div class="caughtContainer">
      <h1>Du fanget ${player.Pokemon[player.Pokemon.length - 1].name}</h1>
      <div class="buttonContainer">
                <button onclick="updateView()">Finn en annen</button>
                <button onclick="showPokemon()">Vis dine pokemon</button>       
            </div>
    </div>
    `;
}

function catchPokemon() {
  player.Pokemon.push(randomPokemon);
  caughtPokemonView();
  console.log(player.Pokemon)
}

function showPokemon() {
  console.log(playerPokemon);
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}