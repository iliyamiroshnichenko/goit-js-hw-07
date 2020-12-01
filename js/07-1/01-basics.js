const titleRef = document.querySelector('.page-title');
// console.dir(titleRef);
titleRef.textContent = 'halo friendz';
titleRef.style.color = 'tomato';


const activeLinkRef = document.querySelector(".nav__link__active");
// console.log(activeLinkRef);
activeLinkRef.href = "https://www.flashscore.com.ua/football/";
activeLinkRef.target = "_blank";
activeLinkRef.style.color = "palevioletred";
activeLinkRef.style.textDecoration = "none";
console.log(activeLinkRef.classList.contains("nav__link")); 
activeLinkRef.classList.add('nav__link--primary');
activeLinkRef.classList.remove('nav__link');


const linksRef = document.querySelectorAll('.nav__link');
// console.log(linksRef);


const imageRef = document.querySelector(".hero-image");
// console.log(imageRef.getAttribute('src'));
// console.log(imageRef.getAttribute("alt"));
// imageRef.setAttribute(
//   "src",
//   "https://images.pexels.com/photos/2170231/pexels-photo-2170231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
// );
// imageRef.setAttribute("alt", "this is not my photo(");
imageRef.alt = 'this is not my photo(';
imageRef.src =
  "https://images.pexels.com/photos/2170231/pexels-photo-2170231.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";


const ulRef = document.querySelector('.nav');
ulRef.querySelector('.nav__link').textContent = 'JS rules';
