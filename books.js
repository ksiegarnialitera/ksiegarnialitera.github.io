/*Resizing the image in the box*/

const feedBox = document.querySelectorAll('.list-box');
const feedImage = document.querySelectorAll('.boxImage');


for(let i=0; i<feedImage.length ; i++) {
    let imageWidth = feedImage[i].clientWidth;
    feedBox[i].style.width = (imageWidth + 3) + 'px';
};



