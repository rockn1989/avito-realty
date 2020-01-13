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

const createSmallImages = (images) => {
  const imagesList = [...images];
  const newImagesList = [];
  

  const canvas = document.createElement(`canvas`);
  canvas.width = `100`;
  canvas.height = `100`;
  const ctx = canvas.getContext(`2d`);
  
  imagesList.map((imgSrc) => {
    const newImg = new Image();
    newImg.src = imgSrc;
    newImg.onload = () => {
      ctx.drawImage(newImg, 0, 0, 100, 100);
    };  
    newImg.src = canvas.toDataURL("image/png");
    newImagesList.push(newImg); 
  });
  console.log(newImagesList)
  
  return newImagesList;

};

export {sendRequest, createElement};
