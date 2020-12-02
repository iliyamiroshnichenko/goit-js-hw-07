// const listRef = document.querySelector('#categories');
// const countCategories = list => list.children.length;
// console.log(`В списке ${countCategories(listRef)} категории.`); 

const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);


itemsRef.forEach(item => {
    const titleRef = item.querySelector("h2");
    const subItems = item.querySelectorAll("li");
    console.log(
      `Категория: ${titleRef.textContent}\nКоличество элементов: ${subItems.length}`
    );
})
