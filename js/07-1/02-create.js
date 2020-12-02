// const titleRef = document.createElement("h1");

// titleRef.textContent = "Динамически созданный заголовок! Вау!";
// titleRef.classList.add("site-title");
// titleRef.id = "title";
// console.log(titleRef);

const product = {
  name: "Сервоприводы",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quia rem repellendus ea perferendis a quas assumenda odit nostrum eveniet.",
  price: 2000,
  available: true,
};

const containerRef = document.createElement("div");
containerRef.classList.add('product-card');

const titleRef = document.createElement('h2');
titleRef.classList.add("product-card__name");
titleRef.textContent = product.name;
console.log(titleRef);

const descrRef = document.createElement('p');
descrRef.classList.add("product-card__description");
descrRef.textContent = product.description;
console.log(descrRef);

const priceRef = document.createElement('p');
priceRef.textContent = `Цена: ${product.price} гривен`;
console.log(priceRef);

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);
containerRef.append(titleRef, descrRef, priceRef);
console.log(containerRef);


// const navRef = document.querySelector('.nav');
// console.log(navRef);

// const listItemRef = document.createElement('li');
// listItemRef.textContent = 'New Item';
// listItemRef.classList.add('nav__item');
// // navRef.prepend(listItemRef);
// navRef.insertBefore(listItemRef, navRef.firstElementChild);

const cardRootRef = document.querySelector('#root');
cardRootRef.appendChild(containerRef);