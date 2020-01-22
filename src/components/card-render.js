import {sendRequest, getHash} from './utils/utils';
import RequestUrl from './utils/request';
import CardDetail from './card-detail';
import Slider from './slider';

const Request = new RequestUrl();

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
      sendRequest(Request.sendRequest(`detail`, getHash()), (data) => {
        this._render(data);
      });
    } 
  }
}
