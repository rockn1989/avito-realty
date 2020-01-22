import Card from './card';

export default class CardDetail extends Card {
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
    <a href="/" class="back">Вернуться назад</a>
    <div class="card-detail__top">
      <h1 class="card-detail__title">${this._title}</h1>
      <div class="card-detail__price">${this._price}</div>
    </div>
    <div class="slider-wrapper"></div>
    <div class="card-detail__bottom">
      <div class="card-detail__author">${this._sellerName}</div>
      <div class="card-detail__desc">${this._description}</div>
    </div>
  </div>
    `;
  }

  init() {
    console.log(12312)
  }

}
