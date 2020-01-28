import {requestUrl, API_URL} from './utils/utils';
import Card from './card';


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
            requestUrl(API_URL.apiUrlList)
            .then((result) => {
                this._render(result);
            });
        }
    }
}
