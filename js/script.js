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

const containerImg = document.querySelector('.container-left');
const containerThumbs = document.querySelector('.container-thumbs');



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
            <h1>${title[i]}</h1>
            <h2>${text[i]}</h2>
        </div>
    </div>`;
    containerImg.innerHTML +=  wideImg;
}

const active = document.querySelectorAll('.wide-img');
const bright = document.querySelectorAll('.thumb img');

active[0].classList.add("active", "first");
active[active.length - 1].classList.add("last");
bright[0].classList.add("bright", "first");
bright[bright.length - 1].classList.add("last");

const arrowDown = document.querySelector('.arrow-down');

arrowDown.addEventListener("click", function () {

    let find = false;
    const brightThumb = document.querySelector(".thumb img.bright");
    const activeWideImg = document.querySelector(".wide-img.active");

    for (let i = 0; i < bright.length; i++) {

        if (brightThumb.classList[i] == "last") {
           find = true
        }
    }

    if (find == false) {
        brightThumb.classList.remove("bright");
        brightThumb.nextElementSibling.classList.add("bright");

        activeWideImg.classList.remove("active");
        activeWideImg.nextElementSibling.classList.add("active");

    } else {
        active[0].classList.add("active");
        bright[0].classList.add("bright");
        active[active.length - 1].classList.remove("active");
        bright[bright.length - 1].classList.remove("bright");
    }


})