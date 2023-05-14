class Section {
  constructor({ renderer }, selectContainer) {
    this._selectContainer = selectContainer;
    this._renderer = renderer;
  }

  renderItems(result) {
    result.forEach(this._renderer);
  }

  addItem(element) {
    this._selectContainer.prepend(element);
  }
}

export { Section };
