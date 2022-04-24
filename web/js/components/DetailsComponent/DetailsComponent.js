import Component from "../Component.js";

class DetailsComponent extends Component {
  constructor(parentElemental, pokemon) {
    super(parentElemental, "main", "main--details");

    this.element.innerHTML = `
      <div>
        <img
          src="${pokemon.sprites.front_default}"
          alt="${pokemon.name} picture"
        />
        <p>${pokemon.name}</p>
      </div>
      <div>
        <ul>
          <li>Id : ${pokemon.id}</li>
          <li>Type : ${pokemon.types[0].type.name}/ ${pokemon.types[1].type.name} </li>
          <li>Height : ${pokemon.height}</li>
          <li>Weight : ${pokemon.weight}</li>
        </ul>
      </div>
    `;
  }
}

export default DetailsComponent;
