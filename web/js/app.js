import pokemonDetails from "./api_comunication.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import ListComponent from "./components/ListComponent/ListComponent.js";
import PokemonComponent from "./components/PokemonComponent/PokemonComponent.js";

const container = document.querySelector(".container");
const pokemons = ["missingno"];
const showedPokemons = 9;
const totalNumberOfPokemons = 898;
let actualIndex = 1;

const pokemonLists = (index) => {
  const indexHeader = document.querySelector(".text--index");
  const firstRow = document.querySelector(".list--first-row");
  const secondRow = document.querySelector(".list--second-row");
  const thirdRow = document.querySelector(".list--third-row");

  for (let i = index; i < index + showedPokemons; i++) {
    (async () => {
      pokemons[i] = await pokemonDetails(i);
      if (i < 3 + index) {
        new PokemonComponent(firstRow, pokemons[i]);
      } else if (i < 6 + index) {
        new PokemonComponent(secondRow, pokemons[i]);
      } else {
        new PokemonComponent(thirdRow, pokemons[i]);
      }
    })();
  }
  indexHeader.textContent = `${index} / ${totalNumberOfPokemons}`;
};

const pokedexMain = (index) => {
  new ListComponent(container);
  pokemonLists(index);
};
const cleanMain = () => {
  const blockMain = document.querySelector("main");
  blockMain.remove();
};

new HeaderComponent(container);
pokedexMain(actualIndex);

const mainPageEvent = () => {
  const mainPage = document.querySelector("h1");
  mainPage.addEventListener("click", () => {
    cleanMain();
    pokedexMain(actualIndex);
  });
};
const returnPageEvent = () => {
  const returnPage = document.querySelector(".return-page");
  returnPage.addEventListener("click", () => {
    cleanMain();
    if (actualIndex - showedPokemons > 0) {
      actualIndex -= showedPokemons;
    }
    pokedexMain(actualIndex);
  });
};
const nextPageEvent = () => {
  const nextPage = document.querySelector(".next-page");
  nextPage.addEventListener("click", () => {
    cleanMain();
    if (actualIndex + showedPokemons < totalNumberOfPokemons) {
      actualIndex += showedPokemons;
    }
    pokedexMain(actualIndex);
  });
};
mainPageEvent();
returnPageEvent();
nextPageEvent();
