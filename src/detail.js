import {Card} from './components/card';
import { createElement } from './components/utils';
/* class CardDetail extends Card {
  constructor({ id, address, title, previewImage, price, description, sellerName, images}) {
    super({id, address, title, previewImage, price});
    this._description = description;
    this._sellerName = sellerName;
    this._images = images;
    this._link = this.getElement().querySelector(`a`);
    console.log(this._description);
  }

  pageMoving() {
    this._link.addEventListener(`click`, (e) => {
      e.preventDefault();
    });
  }

  getTemplate() {
    return `<div class="card">
    <a id="${this._id}" href="#">
      <span class="card__title">${this._title}</span>
      <span class="card__img">
      ${this._images.forEach((img) => `<img src="${img}" />`)}
      </span>
      <span class="card__address">${this._address}</span>
      <span class="card__price">Цена: <span class="current-price">${this._price}</span></span>
      <span class="card__description">${this._description}</span>
    </a>
  </div>
    `;
  }
} */

class CardDetail{
  constructor({ id, address, title, previewImage, price, description, sellerName, images }) {
    this._id = id;
    this._address = address;
    this._title = title;
    this._previewImage = previewImage;
    this._price = price;
    this._description = description;
    this._sellerName = sellerName;
    this._images = images;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<div class="card">
    <a id="${this._id}" href="/detail.html">
      <span class="card__title">${this._title}</span>  
      <span class="card__img">
        ${this._images.map((img) => `<img src="${img}" />`)}
      </span>
      <span class="card__address">${this._address}</span>
      <span class="card__address">${this._sellerName}</span>
      <span class="card__address">${this._description}</span>
      <span class="card__price">Цена: <span class="current-price">${this._price}</span></span>
    </a>
  </div>
    `;
  }
}

export {CardDetail};