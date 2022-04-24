import Component from "../Component.js";

class ListComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "main", "");

    render();
  }
  render = () => {
    this.element.innerHTML = `
      <ul class="main__list">
        <li>
          <ul class="list--row list--first-row">         
          </ul>
        </li>
        <li>
          <ul class="list--row list--second-row">             
          </ul>
        </li>
        <li>
          <ul class="list--row list--third-row">          
          </ul>
        </li>
      </ul>
    `;
  };
}

export default ListComponent;
