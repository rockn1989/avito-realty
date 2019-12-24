
const render = ((container, el, position) => {
  const containerHTML = document.querySelector(container);
  switch(position) {
    case `AFTERBEGIN` :
      containerHTML.prepend(el);
      break;
    case `BEFOREEND` :
      containerHTML.append(el);
      break;
  }
});

const sendRequest = (url, callback) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      };

      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    })
    .then((result) => {
      callback(result);
    })
    .catch((err) => console.error(err));
};

export {sendRequest, render};