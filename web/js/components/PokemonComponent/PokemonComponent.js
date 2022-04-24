import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, pokemon) {
    super(parentElement, "li", "");

    this.element.innerHTML = `
      <div>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name} picture" />
        <p>${pokemon.name}</p>
      </div>
      <div>
        <button class="button--details pokemon-details-${pokemon.id}">More details</button>
        <i class="icon--pokeball catch-pokemon-${pokemon.id}"
          ><img src="img/pokeball.png" alt="pokeball image"
        /></i>
      </div>
    `;

    const detailsButton = document.querySelector(
      `pokemon-details-${pokemon.id}`
    );
    // detailsButton.addEventListener("click");

    const catchedPokemon = document.querySelector(
      `catch-pokemon-${pokemon.id}`
    );
    // catchedPokemon.addEventListener("click");
  }
}

export default PokemonComponent;
