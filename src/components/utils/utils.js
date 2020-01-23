const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.insertAdjacentHTML(`beforeend`, template);
  return newElement.firstChild;
};

const requestUrl = (url) => {
  const fetchResult = fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    })
    .then((result) => {
      return result;
    })
    .catch((err) => console.error(err));

  return fetchResult;
}


const getHash = () => {
  const id = window.location.search.replace(`?`, ``);
  return id;
}

const API_URL = {
  apiUrl: `http://134.209.138.34/`,
  apiUrlList: `http://134.209.138.34/items/`,
  apiUrlDetail: `http://134.209.138.34/item/`
};

export {requestUrl, createElement, getHash, API_URL};
