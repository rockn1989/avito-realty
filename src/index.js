import "./scss/base.scss";

import CardList from './components/cards-render';
import CardDetail from './components/card-render';

const cardList = new CardList();
const cardDetail = new CardDetail();

cardList.init();
cardDetail.init();

/*

https://tproger.ru/translations/configure-webpack4/
https://webpack.js.org/plugins/html-webpack-plugin/
https://webpack.js.org/loaders/
https://webpack.js.org/plugins/

*/