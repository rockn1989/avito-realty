import {Card} from './components/card';

class CardDetail extends Card {
  constructor({ id, address, title, previewImage, price, description, sellerName, images}) {
    super({ id, address, title, previewImage, price, description, sellerName, images });
    this._description = description;
    this._sellerName = sellerName;
    this._images = images;
    console.log(this._description)
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
        ${this._images.forEach((img) => {
          return `<img src="${img}" />`
        })}
      </span>
      <span class="card__address">${this._address}</span>
      <span class="card__price">Цена: <span class="current-price">${this._price}</span></span>
      <span class="card__description">${this._description}</span>
    </a>
  </div>
    `;
  }
}

export {CardDetail};