import {sendRequest, render} from './components/utils';
import {Card} from './components/card';
import {CardDetail} from './detail';

const urlRequest = `http://134.209.138.34/`;
const urlRequestItemList = urlRequest + `items/`;

const cardList = document.querySelector(`.card-list`);

const cardDetail = document.querySelector(`#card`);

if (cardList) {
  sendRequest(urlRequestItemList, (data) => {
    let dFragment = document.createDocumentFragment();

    data.map((cardData) => {
      dFragment.appendChild(new Card(cardData).getElement());
    });

    cardList.append(dFragment);
  });
}

if (cardDetail) {
  const id = window.location.search.replace(`?`, ``);
  const urlItem = urlRequest + `item/` + id;
  sendRequest(urlItem, (data) => {
    console.log(...data);
    render(`#card`, new CardDetail(...data).getElement(), `AFTERBEGIN`);
  });
}
