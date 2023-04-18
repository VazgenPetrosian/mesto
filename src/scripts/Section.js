class Section {
  constructor({ items, renderer }, selectContainer) {
    this._selectContainer = selectContainer;
    this._items = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._selectContainer.prepend(element);
  }
}

export { Section };
