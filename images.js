const imgData = sessionStorage.getItem("img-taken");

const img = document.createElement('img');
img.src = imgData;
img.width = 360;

document.body.appendChild(img);