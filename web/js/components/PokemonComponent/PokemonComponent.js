import Component from "../Component.js";

class PokemonComponent extends Component {
  pokemon;

  constructor(parentElement, pokemon) {
    super(parentElement, "li", "");
    this.pokemon = pokemon;

    render();
    addListeners();
  }
  render = () => {
    this.element.innerHTML = `
      <div>
        <img src="${this.pokemon.image}" alt="${this.pokemon.name} picture" />
        <p>${this.pokemon.name}</p>
      </div>
      <div>
        <button class="button--details pokemon-details-${this.pokemon.id}">More details</button>
        <i class="icon--pokeball catch-pokemon-${this.pokemon.id}"
          ><img src="img/pokeball.png" alt="pokeball image"
        /></i>
      </div>
    `;
  };
  addListeners = () => {
    const detailsButton = document.querySelector(
      `pokemon-details-${this.pokemon.id}`
    );
    detailsButton.addEventListener("click");

    const catchedPokemon = document.querySelector(
      `catch-pokemon-${this.pokemon.id}`
    );
    catchedPokemon.addEventListener("click");
  };
}

export default PokemonComponent;
