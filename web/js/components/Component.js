class Component {
  element;

  constructor(parentElement, tag, selectorNames) {
    this.element = document.createElement(tag);
    this.element.className = selectorNames;
    parentElement.append(this.element);
  }
}
export default Component;
