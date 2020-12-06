/* mouseenter mouseleave
* mouseover mouseout
* mousemove (chatty event - болтливое событие)
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseover', e => {
    event.target.classList.add('box-acive')
});
boxRef.addEventListener("mouseleave", (e) => {
  event.target.classList.remove("box-acive");
});

// boxRef.addEventListener('mousemove', e => console.log(e))