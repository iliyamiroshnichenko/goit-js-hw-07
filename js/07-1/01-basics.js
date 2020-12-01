const titleRef = document.querySelector('.page-title');
console.dir(titleRef);
titleRef.textContent = 'halo friendz'

const linkRef = document.querySelector('.nav__link');
console.log(linkRef);

const linksRef = document.querySelectorAll('.nav__link');
console.log(linksRef);

const imageRef = document.querySelector(".hero-image");
imageRef.alt = 'this is not my photo(';
// imageRef.width = 320;
imageRef.src =
  "https://images.pexels.com/photos/2170231/pexels-photo-2170231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
