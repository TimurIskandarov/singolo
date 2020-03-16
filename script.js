// Navigation Bar

// Найдём первый элемент с классом navigation на странице (навигационная панель)
let nav = document.querySelector(".navigation");

// В функцию-листенер передадим аргументом экземпляр класса Event
nav.addEventListener('click', function(event) {
    // из его свойства target получим целевой элемент
    let target = event.target; 
    // если клик не по ссылке, просто завершим выполнение 
    let notActive = !target.classList.contains('clicked_nav');
    if (notActive) { return; } 
    // отменим стандартную реакцию ссылки на клик                     
    event.preventDefault();
    // анимация скролла
    let element = document.querySelector(`${target.hash}`); 
    element.scrollIntoView( {block: "start", inline: "nearest", behavior: "smooth"} );
    // удалим класс active у всех наших ссылок... 
    for(let link of document.querySelectorAll('.clicked_nav')){
        link.classList.remove('active'); 
    }
    // ...и добавим его той, по которой выполнен клик
    target.classList.add('active');
})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

// Portfolio

const tagsNav = document.querySelector('.tags');
tagsNav.addEventListener('click', (event) => {
    let target = event.target;
    let notActive = !target.classList.contains('tag');
    if (notActive) { return; }
    filterPictures();    
    for(let link of document.querySelectorAll('.tag')){
        link.classList.remove('portfolio_active'); 
    }
    target.classList.add('portfolio_active');   
})

const filterPictures = () => {
    let img = {};
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
    var shuffledPictures = arr.sort(function(){
        return Math.random() - 0.5;
    });
    const gallery = document.querySelectorAll(".portfolio__grid .portfolio__picture");
    for(const [index, pic] of gallery.entries()){
        let tmp = pic.querySelector('.pic');
        img[index] = tmp;
        tmp.remove();
    }
    gallery.forEach((el, i) => {
        el.append(img[shuffledPictures[i]]);        
    })    
}

const setPictures = document.querySelector(".portfolio__grid");
setPictures.addEventListener('click', (event) => {
    let target = event.target;
    let notActive = !target.classList.contains('pic');
    if (notActive) { return; }
    for(let link of document.querySelectorAll(".pic")){
        link.classList.remove('pic_active'); 
    }   
    event.target.classList.add('pic_active');
})

//Get a quote

const subject = document.querySelector('#subject');
const inSubj =  document.querySelector('#result-subject');
const desc = document.querySelector('#details');
const inDesc = document.querySelector('#result-details');
const btnSubmit = document.querySelector('#submit-button');
const btnClose = document.querySelector('#message-button');
const modal = document.querySelectorAll('.modal_message');
document.forms.feedback_form.onsubmit = function () {  
    document.querySelector('#result-subject').innerText = /^Singolo$/.test(subject.value) ? 'Singolo' : 'Без темы';
    document.querySelector('#result-details').innerText = desc.value.includes('Portfolio project') ? 'Portfolio project' : 'Без описания';
    modal.forEach(item => {
        item.classList.remove('hidden__message');
    }) 
    return false
};

btnClose.addEventListener('click', (e) => {
    modal.forEach(item => {
        item.classList.add('hidden__message');
    })
})
