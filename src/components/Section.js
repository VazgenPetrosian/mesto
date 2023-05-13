class Section {
  constructor({ renderer }, selectContainer) {
    this._selectContainer = selectContainer;
    this._items = renderer;
  }

  renderItems(result) {
    result.forEach(this._items);
  }

  addItem(element) {
    this._selectContainer.prepend(element);
  }
}

export { Section };
