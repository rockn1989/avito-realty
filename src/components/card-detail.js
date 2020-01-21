import Card from './card';
import Slider from './slider';


export default class CardDetail extends Card {
  constructor(data) {
    super(data);
    this._description = data.description;
    this._sellerName = data.sellerName;
    this._images = data.images;
    this._slider = new Slider(this._images);
  }

  eventsHandler() {
    return false;
  }

  _initSlider() {
    const slider = new Slider(this._images);
    console.log(slider.getElement());
    const container = this.getElement().querySelector(`.card-detail__images-wrapper`);
    console.log(container);
    container.append(slider.getElement())
  }

  getTemplate() {
    return `<div class="card-detail">
    <a href="/" class="back">Вернуться назад</a>
    <div class="card-detail__top">
      <h1 class="card-detail__title">${this._title}</h1>
      <div class="card-detail__price">${this._price}</div>
    </div>
    <div class="card-detail__images-wrapper"></div>
    <div class="card-detail__bottom">
      <div class="card-detail__author">${this._sellerName}</div>
      <div class="card-detail__desc">${this._description}</div>
    </div>
  </div>
    `;
  }

}
