import Component from "../Component.js";
import detailsPageEvent from "../../app.js";

class PokemonComponent extends Component {
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

    const catchedPokemon = document.querySelector(
      `.catch-pokemon-${pokemon.id}`
    );
    catchedPokemon.addEventListener("click", () => {});

    const detailsButton = document.querySelector(
      `pokemon-details-${pokemon.id}`
    );
    detailsButton.addEventListener("click", detailsPageEvent(pokemon.id));
  }
}
export default PokemonComponent;
