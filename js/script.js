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
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

// seleziono il container
const containerImg = document.querySelector('.container-img');

// ciclo per le immagini dell'array, le inserisco tutte display none
for (let index = 0; index < items.length; index++) {
    let image = `<img src="${items[index]}" alt="">`;

    containerImg.innerHTML += image;
}

// lista nodi
const imageDom = document.querySelectorAll('.container-img img');
imageDom[0].classList.add('first', 'active'),
imageDom[imageDom.length - 1].classList.add('last');

// EVENTO FRECCIA GIU'
const downButton = document.querySelector('.arrow-down');

downButton.addEventListener('click', function(){
    const imageActive = document.querySelector('.active');
    let classes = imageActive.classList;
    // variabile per uscire dal ciclo
    let last = false; 

  
    for (let index = 0; index < classes.length; index++) {
        if (classes[index] == 'last') {
           last = true;
       }    
    }

    // immagina attiva ha anche last?
        // se non contiene last
    if (last == false) {
        imageActive.classList.remove('active');
        // vado ad elemento successivo
        const imageNext = imageActive.nextElementSibling;
        imageNext.classList.add('active');
    
    } else {
        downButton.classList.remove('enabled');
        
    } 
})
