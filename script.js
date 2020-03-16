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
