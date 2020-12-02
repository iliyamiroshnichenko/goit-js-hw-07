import products from './products.js';
console.table(products);

const createProductCard = product => {
    const containerRef = document.createElement("div");
    containerRef.classList.add("product-card");

    const titleRef = document.createElement("h2");
    titleRef.classList.add(
      "product-card__name",
      product.available
        ? "product-card__name--available"
        : "product-card__name--not-available"
    );
    titleRef.textContent = product.name;

    const descrRef = document.createElement("p");
    descrRef.classList.add("product-card__description");
    descrRef.textContent = product.description;

    const priceRef = document.createElement("p");
    priceRef.textContent = `Цена: ${product.price} гривен`;

    containerRef.append(titleRef, descrRef, priceRef);

    return containerRef;
 };

const productCard = products.map((product) => createProductCard(product));
console.log(productCard);

const productsListRef = document.querySelector('.js-products');
console.log(productsListRef);
productsListRef.append(...productCard);