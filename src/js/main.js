
/*  
ищет один элемент, а querySelectorAll - массив (коллекцию)
var elem = document.querySelector('.container'); 
console.log(elem);
elem.style.color = "green";
*/


// firstElementChild - показывает первый элемент(node, без #text(текстовая нода))
// firstChild - показывает пробел (символ) если мы его физически не уберем.
// childNodes - все дети
// var elem = document.querySelector('ul.list');
// console.log(elem.childNodes);

/** var elem = document.querySelector('ul.list li:first-child');
console.log(elem.childNodes[0].data); // можно вывести любое свойство, прописанное в devtools
*/ 

/*
var elements = document.querySelector('ul.list');
console.log(elements.childNodes.length);
console.log(elements.children, elements.children.length)
*/ 

/*
console.log(elements.childNodes);
for (elem in elements.childNodes){
    console.log(elem);
}; 
*/

/* */
/* 
вывели все элементы
var elem = document.querySelectorAll('ul.list li');
var len = elem.length;

for(var item = 0; item < len; item++){
    console.log(elem[item]);
}
*/

/* 
    // изменили текст в li
    var elem = document.querySelectorAll('ul.list li');
    var len = elem.length;

    for(var item = 0; item < len; item++){
        elem[item].innerHTML = "changed"
    }
*/

/* 
    // проверка является ли элемент li
    var elem = document.querySelectorAll('ul.list li');
    console.log(elem[0].matches('li'));    
*/

/* 
// работа с классами, подмена
var elem = document.querySelector('ul.list');
console.log(elem.classList); // вывод списка классов
console.log(elem.classList.contains('active')) // проверяем нахождение класса active в списке
if(!elem.classList.contains('active')){
    console.log("нет класса active");
    elem.classList.add('active');
    elem.classList.remove('list');
}
*/

/* 
работа с событиями
var elem = document.querySelector(".btn");
console.log(elem);
elem.addEventListener('click', ()=>{
    console.log("click-click");
    var timer = setTimeout(() => {
        console.log("set timeout 2s") 
    }, 2000);
    console.log(timer);
    clearTimeout(timer); // обязательно закрывать timeout и eventlistener? память утекает.
    console.log(timer);

});
elem.addEventListener('mouseover', function(){
    console.log("over-over");
});
elem.addEventListener('mouseout', function(){
    console.log("out-out");
});
*/

/* 
// информация о событий
var elem = document.querySelector('button');
elem.addEventListener('click', function(event){
    console.log(event);
})
*/

/*
var elem = document.querySelectorAll('li');
console.log(elem);

for(var item = 0; item < elem.length; item++){
    elem[item].addEventListener('click', (event)=>{
        event.target.classList.toggle('active');
        // event.target - элемент, на котором произвели event, .classList - получили его классы, и добавляем отключатель/добавлятель класса.
    })
}
*/

/*
выпадашка на чистом js
var element = document.querySelectorAll('li');

for(var item = 0; item < element.length; item++){
    element[item].addEventListener('click', (event)=>{
        // event.target.classList.toggle('new');
        event.target.nextElementSibling.classList.toggle('new');
    })
}
*/