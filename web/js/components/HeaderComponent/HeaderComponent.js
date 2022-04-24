import Component from "../Component.js";

class HeaderComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "header", "");

    render();
  }
  render = () => {
    this.element.innerHTML = ` 
      <header>
        <div><h1>Pokedex</h1></div>
        <div class='header--index>
          <i class="return-page"
            ><img src="img/arrow.png" alt="arrow to previous page"
          /></i>
          <p class="text--index"></p>
          <i class="next-page"
            ><img src="img/arrow.png" alt="arrow to next-page page"
          /></i>
        </div>
        <div><h2>My pokemons</h2></div>
      </header>
    `;
  };
}

export default HeaderComponent;
