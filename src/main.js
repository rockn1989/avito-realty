import {sendRequest, render} from './components/utils';
import {Card} from './components/card';

const url = `http://134.209.138.34/`;
const urlItemList = url+`items`;

const renderCard = ((data) => {
  const card = new Card(data);
  const link = card.getElement().querySelector(`a`);

  link.addEventListener(`click`, (e) => {
    e.preventDefault();
    window.location.href = `detail.html${`?=`+card._id}`;
  });

  //render(`.card-list`, card.getElement(), `AFTERBEGIN`);
  return card.getElement();
});

sendRequest(urlItemList, (data) => {
  let dFragment = document.createDocumentFragment();

  data.map((cardData) => {
    dFragment.appendChild(renderCard(cardData));
  });

  document.querySelector(`.card-list`).append(dFragment);
});
