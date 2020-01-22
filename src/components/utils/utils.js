const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.insertAdjacentHTML(`beforeend`, template);
  return newElement.firstChild;
};

const sendRequest = (url, callback) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    })
    .then((result) => {
      callback(result);
    })
    .catch((err) => console.error(err));
};


const getHash = () => {
  const id = window.location.search.replace(`?`, ``);
  return id;
}

export {sendRequest, createElement, getHash};
