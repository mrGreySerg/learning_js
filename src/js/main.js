
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

var elem = document.querySelector('ul.list li:first-child');
console.log(elem.childNodes[0].data); // можно вывести любое свойство, прописанное в devtools 1.09