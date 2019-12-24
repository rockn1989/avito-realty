import {sendRequest, render} from './utils';
import {Card} from './components/card';

const url = `http://134.209.138.34/`;
const urlItemList = url+`items`;

const renderCard = ((data) => {
  const card = new Card(data);
  const link = card.getElement().querySelector(`a`);

  link.addEventListener(`click`, (e) => {
    e.preventDefault();
  });

  render(`.card-list`, card.getElement(), `AFTERBEGIN`);

});

sendRequest(urlItemList, (data) => {
  data.map((cardData) => {
    renderCard(cardData);
  });
});
