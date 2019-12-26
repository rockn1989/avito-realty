import {Card} from './card';

class CardDetail extends Card{
  constructor(data) {
    super(data);
    this._description = data.description;
    this._sellerName = data.sellerName;
    this._images = data.images;
  }

  eventsHandler() {
    return false;
  }

  getTemplate() {
    return `<div class="card-detail">
    <div class="card-detail__top">
      <h1 class="card-detail__title">${this._title}</h1>
      <div class="card-detail__price">${this._price}</div>
    </div>
    <div class="card-detail__sliders-wrapper">
      <div class="main-slider">
        ${this._images.map((img) => {
          return `<div class="slide"><img src="${img}" /></div>`
        }).join(``)}
      </div>
      <div class="preview-slider"></div>
    </div>
    <div class="card-detail__bottom">
      <div class="card-detail__author">${this._sellerName}</div>
      <div class="card-detail__desc">${this._description}</div>
    </div>
  </div>
    `;
  }
}

export {CardDetail};