// Dati tre array contenenti:
// - una lista ordinata di 5 immagini,
// - una lista ordinata dei relativi 5 luoghi e
// - una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
//     MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
//     MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// - titolo e
//     - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
//     BONUS:
// Aggiungere il ciclo infinito del carosello.Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];


const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
]

// dichiaro elementi html nei quali voglio che vengano creati i tag
const containerImg = document.querySelector('.container-left');
const containerThumbs = document.querySelector('.container-thumbs');


// per ogni elemento di ogni array creo gli elementi che servono
for (let i = 0; i < items.length; i++) {
   let thumb = 
   `<div class="thumb">
        <img src=${items[i]} alt="">
    </div>`;
    containerThumbs.innerHTML += thumb;
    
    let wideImg = 
    `<div class="wide-img">
        <img src=${items[i]} alt="">
        <div class="caption">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;
    containerImg.innerHTML +=  wideImg;
}

const active = document.querySelectorAll('.wide-img');
const bright = document.querySelectorAll('.thumb');

active[0].classList.add("active", "first");
active[active.length - 1].classList.add("last");
bright[0].classList.add("bright", "first");
bright[bright.length - 1].classList.add("last");

// console.log(active, bright);

const arrowDown = document.querySelector('.arrow-down');

arrowDown.addEventListener("click", function () {

    
    const brightThumb = document.querySelector(".container-thumbs .thumb.bright");
    const activeWideImg = document.querySelector(".wide-img.active");

    let brightThumbClass = brightThumb.classList;
    let find = false;

    for (let i = 0; i < brightThumbClass.length; i++) {

        if (brightThumbClass[i] == "last") {
           find = true;
        }
    }

    if (find == false) {
        brightThumbClass.remove("bright");
        brightThumb.nextElementSibling.classList.add("bright");

        activeWideImg.classList.remove("active");
        activeWideImg.nextElementSibling.classList.add("active");

    } else {
        active[0].classList.add("active");
        bright[0].classList.add("bright");
        active[active.length - 1].classList.remove("active");
        bright[bright.length - 1].classList.remove("bright");
    }


});

const arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener("click", function () {


    const brightThumb = document.querySelector(".container-thumbs .thumb.bright");
    const activeWideImg = document.querySelector(".wide-img.active");

    let brightThumbClass = brightThumb.classList;
    let find = false;

    for (let i = 0; i < brightThumbClass.length; i++) {

        if (brightThumbClass[i] == "first") {
            find = true;
        }
    }

    if (find == false) {
        brightThumbClass.remove("bright");
        brightThumb.previousElementSibling.classList.add("bright");

        activeWideImg.classList.remove("active");
        activeWideImg.previousElementSibling.classList.add("active");

    } else {
        active[0].classList.remove("active");
        bright[0].classList.remove("bright");
        active[active.length - 1].classList.add("active");
        bright[bright.length - 1].classList.add("bright");
    }


});