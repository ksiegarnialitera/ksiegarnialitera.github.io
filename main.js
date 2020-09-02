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

let boxesWithoutArticles = [musicNotes, books, misc2, watches, cds, postcards, coins, misc1, textBox, info];

articles.addEventListener('mouseover', function() {
    musicNotes.classList.add('move-right');
    boxesWithoutArticles.forEach(el => el.classList.add('shadow'));
})

articles.addEventListener('mouseoout', function() {
    musicNotes.classList.remove('move-right');
    boxesWithoutArticles.forEach(el => el.classList.remove('shadow'));
})