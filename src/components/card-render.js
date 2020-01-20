import {sendRequest} from './utils/utils';
import RequestUrl from './utils/request';
import Card from './card';
import CardDetail from './card-detail';

const Request = new RequestUrl();

export default class CardList {
    constructor() {
        this._cardList = document.querySelector(`.card-list`);
        this._cardDetail = document.querySelector(`#card`);
    }

    _renderCards(data) {
        let dFragment = document.createDocumentFragment();
        data.map((cardData) => {
            dFragment.appendChild(new Card(cardData).getElement());
        });

        this._cardList.append(dFragment);  
    }

    _renderCard(data) {
        this._cardDetail.append(new CardDetail(...data).getElement());
    }

    _getHash() {
        const id = window.location.search.replace(`?`, ``);
        return id;
    }

    init() {
        if (this._cardList) {
            sendRequest(Request.sendRequest(`list`), (data) => {
                this._renderCards(data);
            });
        }
        if (this._cardDetail) {
            sendRequest(Request.sendRequest(`detail`, this._getHash()), (data) => {
                this._renderCard(data);
                console.log('123');
            });
        }
    }
}
