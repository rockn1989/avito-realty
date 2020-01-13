export default class RequestUrl {
  constructor() {
    this._urlMain = `http://134.209.138.34/`;
    this._urlList = this._urlMain + `items/`;
    this._urlDetail = this._urlMain + `item/`;
  }

  sendRequest(type, id) {
    let url;
    switch (type) {
      case `list`:
        url = this._urlList;
        break;
      case `detail`:
        url = this._urlDetail + id;
        break;
      default:
        url = this._urlMain;
    }
    return url;
  }
}
