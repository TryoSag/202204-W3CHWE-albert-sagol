import { pokemonDetails } from "./api_comunication.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import ListComponent from "./components/ListComponent/ListComponent.js";
import PokemonComponent from "./components/PokemonComponent/PokemonComponent.js";

const totalNumberOfPokemons = 898;
const showedPokemons = 9;




const pokemonLists = (pokemons, index) => {

const pokemons = ["missingno"];
const container = document.querySelector(".container");
const actualIndex = 1;

const pokemonLists = (pokemonsToShow, index) => {

  const firstRow = document.querySelector(".list--first-row");
  const secondRow = document.querySelector(".list--second-row");
  const thirdRow = document.querySelector(".list--third-row");

  for (let i = 1; i < i + showedPokemons; i++) {

    const pokemon = pokemonsToShow[index + i];

    if (i < 4) {
      new PokemonComponent(firstRow, pokemon);
    } else if (i < 7) {
      new PokemonComponent(secondRow, pokemon);
    } else {
      new PokemonComponent(thirdRow, pokemon);
    }
  }
};

const pokedexMain = (pokemons, index) => {
  new ListComponent(container);
  pokemonLists(pokemons, index);
};

for (let i = 1; i <= totalNumberOfPokemons; i++) {
  (async () => {
    pokemons[i] = pokemonDetails(i);
  })();
}

const container = document.querySelector(".container");

new HeaderComponent(container);
pokedexMain(pokemons, actualIndex);
