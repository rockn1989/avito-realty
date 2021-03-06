import {createElement} from './utils/utils';

export default class Card {
  constructor({id, address, title, previewImage, price}) {
    this._id = id;
    this._address = address;
    this._title = title;
    this._previewImage = previewImage;
    this._price = price;
  }
  
  eventsHandler() {
    this._link = this.getElement().querySelector(`a`);
    this._link.addEventListener(`click`, (e) => {
      e.preventDefault();
      window.location.href = `detail.html${`?` + this._id}`;
    });
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this.eventsHandler();
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
