/*Напиши скрипт для создания галлереи изображений по массиву данных

Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
*/
const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createImage = image => {
  const itemRef = document.createElement('li');
  itemRef.classList.add("gallery-item");
  const imageRef = document.createElement('img');
  imageRef.src = image.url;
  imageRef.alt = image.alt;
  imageRef.width = 320;
  itemRef.appendChild(imageRef);
  return itemRef;
};

const items = images.map(item => createImage(item));

const listRef = document.querySelector("#gallery");
listRef.append(...items);