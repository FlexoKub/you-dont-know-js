'use strict';
/*1-Восстановить порядок книг.

2-Заменить картинку заднего фона на другую из папки image

3-Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

4-Удалить рекламу со страницы

5-Восстановить порядок глав во второй и пятой книге 
(внимательно инспектируйте индексы элементов, поможет dev tools)

6-в шестой книге добавить главу “Глава 8: За пределами ES6”
и поставить её в правильное место
 */
const book = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    h2 = document.getElementsByTagName('h2'),
    bookLi = document.querySelectorAll('li');

    console.log(book);
    //1
    book[0].before(book[1]);
    book[5].after(book[2]);
    book[4].after(book[3]);
    //2
    document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
    //3
    h2[2].textContent = 'Книга 3. this и Прототипы Объектов';
    h2[2].style.color = 'darkkhaki';
    //4
    adv.remove();
    //5
    console.log(bookLi);
    bookLi[9].before(bookLi[2]);
    bookLi[3].after(bookLi[6]);
    bookLi[6].after(bookLi[8]);
    bookLi[7].after(bookLi[9]);
    bookLi[46].after(bookLi[55]);
    bookLi[55].after(bookLi[49]);
    bookLi[46].after(bookLi[47]);
    bookLi[49].after(bookLi[50]);
    bookLi[54].before(bookLi[51]);
    //6
    const newElemLi = document.createElement('li');
    newElemLi.textContent = 'Глава 8: За пределами ES6';
    bookLi[25].insertAdjacentElement('afterend', newElemLi);
