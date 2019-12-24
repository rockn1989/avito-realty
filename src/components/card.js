
const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.insertAdjacentHTML(`beforeend`, template);
  return newElement.firstChild;
};


class Card {
  constructor({id, address, title, previewImage, price}) {
    this._id = id;
    this._address = address;
    this._title = title;
    this._previewImage = previewImage;
    this._price = price;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<li><div class="card">
    <a id="${this._id}" href="/detail.html">
      <span class="card__title">${this._title}</span>  
      <span class="card__img">
        <img src="${this._previewImage}" alt="${this._title}" />
      </span>
      <span class="card__address">${this._address}</span>
      <span class="card__price">Цена: <span class="current-price">${this._price}</span></span>
    </a>
  </div></li>
    `;
  }
}

export {Card};