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

const arrowLeft = document.querySelector('.angle-left');
const arrowRight = document.querySelector('.angle-right');
const pictureFirst = document.querySelector('.pic1');
const pictureSecond = document.querySelector('.pic2');
const pictureThird = document.querySelector('.pic3');
const carrousel = document.querySelector('.booksTop');

books.addEventListener('mouseover', function() {
    carrousel.classList.remove('invisibilityTop');
    carrousel.classList.add('animation');
})

books.addEventListener('mouseout', function() {
    carrousel.classList.add('invisibilityTop');
    carrousel.classList.remove('animation');
})

let images =[pictureSecond, pictureThird, pictureFirst];

arrowRight.addEventListener('onClick', function() {
for (let i=0; i<images.length; i++) {
    
}
})
// let boxesWithoutArticles = [musicNotes, books, misc2, watches, cds, postcards, coins, misc1, textBox, info];

// articles.addEventListener('mouseover', function() {
//     musicNotes.classList.add('move-down');
//     cds.classList.add('move-down');
//     postcards.classList.add('move-down');
//     books.classList.add('move-down-right');
//     misc1.classList.add('move-down-right');
//     coins.classList.add('move-down-right');
//     watches.classList.add('move-down-right');
//     misc2.classList.add('move-down-right');
//     info.classList.add('move-down-right');
//     textBox.classList.add('move-down-right');
//     boxesWithoutArticles.forEach(el => el.classList.add('shadow'));
// })

// articles.addEventListener('mouseout', function() {
//     musicNotes.classList.remove('move-down');
//     cds.classList.remove('move-down');
//     postcards.classList.remove('move-down');
//     books.classList.remove('move-down-right');
//     misc1.classList.remove('move-down-right');
//     coins.classList.remove('move-down-right');
//     watches.classList.remove('move-down-right');
//     misc2.classList.remove('move-down-right');
//     info.classList.remove('move-down-right');
//     textBox.classList.remove('move-down-right');
//     boxesWithoutArticles.forEach(el => el.classList.remove('shadow'));
// })




// let boxesMatrix = [[articles, books, watches, coins], [musicNotes, books, misc2, info], [cds, books, textBox, textBox], [postcards, misc1, textBox, textBox]];


// for (let i=0; i<4; i++) {
//     for (let j=0; j<4; j++) {
//         // console.log(boxesMatrix[i][j]);
//         // boxesMatrix[i][j].addEventListener('mouseover', function() {
//         //      let boxesWithoutTheBox = (box) => {
                
//         //     )}
//             // let boxes = boxesMatrix[i][j].filter(
//             //     box => {return boxesMatrix[i][j] !== boxesMatrix[0][1]});
            
//             boxesMatrix[i][j].addEventListener('mouseover', function() {
//                 // function isBox(elements) {
//                 //     return boxesMatrix[i][j] !== elements;
//                 // }
//                 // console.log(boxesMatrix.filter(isBox));
//                 boxesMatrix.forEach(el => console.log(...el));
//                     //.classList.add('shadow')
//             })
//         }
//     }

    //el.classList.add('shadow')