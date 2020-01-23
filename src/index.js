import "./scss/base.scss";

import CardList from './components/cards-render';
import CardDetail from './components/card-render';

const cardList = new CardList();
const cardDetail = new CardDetail();

cardList.init();
cardDetail.init();
