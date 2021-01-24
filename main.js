// Collection of elements
const articles = document.querySelector('.articles');
const musicNotes = document.querySelector('.music-notes');
const books = document.querySelector('.books');
const misc2 = document.querySelector('.misc2');
const watches = document.querySelector('.watches');
const cds = document.querySelector('.cds');
const postcards = document.querySelector('.postcards');
const coins = document.querySelector('.coins');
const misc1 = document.querySelector('.misc1');
const textBox = document.querySelector('.text-box');
const info = document.querySelector('.info');

let boxesMatrixShadow = [articles, books, watches, coins, musicNotes, misc2, cds, postcards, misc1];
let boxesAll = [articles, books, watches, coins, musicNotes, misc2, cds, postcards, misc1, info, textBox];

for (let box of boxesMatrixShadow) {
    box.addEventListener('mouseover', function() {
        for (let i=0; i<boxesAll.length; i++) {
            let boxes = boxesAll.filter(el => {return el !== box});
            boxes[i].classList.add('shadow');
        }
    })
    box.addEventListener('mouseout', function() {
        for (let i=0; i<boxesAll.length; i++) {
            let boxes = boxesAll.filter(el => {return el !== box});
            boxes[i].classList.remove('shadow');
        }
    })
}

let boxes = document.querySelectorAll('.boxes');

for (let box of boxes) {
    box.addEventListener('mouseover', function() {
        box.firstElementChild.classList.remove('invisibilityTop');
        box.firstElementChild.classList.add('animation');
    })

    box.addEventListener('mouseout', function() {
        box.firstElementChild.classList.add('invisibilityTop');
        box.firstElementChild.classList.remove('animation');
    })
}
