// // Событие

// // click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с 
// // сенсорными экранами оно происходит при касании)
// // contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// // mouseover / mouseout – когда мышь наводится на / покидает элемент.
// // mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе
// // mousemove – при движении мыши.
// // submit – пользователь отправил форму <form>
// // focus – пользователь фокусируется на элементе, например нажимает на <input>.
// // keydown и keyup – когда пользователь нажимает / отпускает клавишу

// // Обработчики событий
// // addEventListener
// //elem.addEventListener(событие, функция);

// //let button = document.querySelector('.click');
// //button.addEventListener('click', function() {alert('Hello')});


// //function myFunction(){
// //    alert('Hello');
// //}
// //function myFunction2(){
// //    alert('Hello mallo');
// //}
// //function myFunction3(){
// //    alert('Hello mallo babllo');
// //}
// //button.addEventListener('click', myFunction);
// //button.addEventListener('click', myFunction2);
// //button.addEventListener('click', myFunction3);
// //
// //button.removeEventListener('click', myFunction);
// ///////////////////////////////////

// //Задание: Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль 
// //выводилась строка “Hello world”.

// //let button = document.querySelector('.click');
// //function onclick(){
// //    console.log('Hello world');
// //}
// //button.addEventListener('click', onclick);
// /////////////////////////////////////////////

// // Задание: Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе 
// // значение увеличивалось на 1. В начале рассмотрите процесс, при котором мы каждый раз считываем 
// // число из параграфа, меняем и записываем обратно,
// //переделайте процесс так, чтобы значение хранилось в //переменной, изменялось при клике и записывалось в параграф.

// //let button = document.querySelector('.click');
// //let num = document.querySelector('p');
// //let number = (document.querySelector('p').innerText);
// //number +1;
// //
// //function onclick(){
// //document.querySelector('num').innerText = Number(document.//querySelector('.num').innerText +1);
// //button.addEventListener('click', onclick);
// //}

// //////////////////////////////////////
// //Задание: Написать программу, которая создает две кнопки и //вешает на них событие нажатия. При 
// //нажатии на первую выводится в консоль “минус”, а при нажатии //на вторую ‘плюс’.
// let button1 = document.createElement('button');
// let button2 = document.createElement('button');
// let num = 5;

// button1.innerText = '+';
// button2.innerText = '-';



// document.body.append(button1,button2);

// //function plus(){
// //    console.log('plus');
// //}
// //function minus(){
// //    console.log('minus');
// //}
// //button1.addEventListener('click', plus);
// //button2.addEventListener('click', minus);

// function plus() {
//     console.log(++num);
// }
// function minus() {
//     console.log(--num);
// }

//let p =document.querySelector('.p1');
//p.style.color = 'blue';
//p.style
/////////////////////////////////////

// Задание: Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на 
// введённый пользователем цвет (все шаги сделать с помощью JS)
let block = document.createElement('div');
block.style.width = '100px';
block.style.height = '100px';
block.style.border = '1xp solid black';
block.style.backgroundColor = 'black';
document.body.append(block);
function changecolor(){
    let newcolor = prompt('enter color');
    block.style.backgroundColor = newcolor;
}
