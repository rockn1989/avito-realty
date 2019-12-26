
class Slider {
  constructor(images = []) {
    this._images = images;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return `<div class="main-slider"></div>`
  }

}