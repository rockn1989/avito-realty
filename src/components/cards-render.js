import {sendRequest} from './utils/utils';
import RequestUrl from './utils/request';
import Card from './card';

const Request = new RequestUrl();

export default class RenderCardList {
    constructor() {
        this._cardList = document.querySelector(`.card-list`);
    }

    _render(data) {
        let dFragment = document.createDocumentFragment();
        data.map((cardData) => {
            dFragment.appendChild(new Card(cardData).getElement());
        });

        this._cardList.append(dFragment);  
    }


    init() {
        if (this._cardList) {
            sendRequest(Request.sendRequest(`list`), (data) => {
                this._render(data);
            });
        }
    }
}
