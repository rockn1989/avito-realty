import {requestUrl, API_URL, getHash} from './utils/utils';
import CardDetail from './card-detail';
import Slider from './slider';


export default class RenderCardList {
  constructor() {
    this._container = document.querySelector(`#card`);
  }

  _render(data) {
    const card = new CardDetail(...data);
    const slider = new Slider(...data);
    const slideContainer = card.getElement().querySelector(`.slider-wrapper`);

    this._container.append(card.getElement());
    slideContainer.append(slider.getElement());
    slider.init();
  }
  

  init() {
    if (this._container) {
      requestUrl(API_URL.apiUrlDetail + getHash())
        .then((result) => {
          this._render(result);
        });
    } 
  }
}
