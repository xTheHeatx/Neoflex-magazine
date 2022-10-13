const headphones = document.querySelector('#headphones');


getProducts();

async function getProducts(){

    const response = await fetch('./js/headphones.json');

    const productsArray = await response.json();

    renderProducts(productsArray);
}


function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const cardHtml = `<div class="product-card" data-id="${item.id}">
                            <div class="product-card__img-container">
                                <img class="product-card__img" src="./src/img/products/${item.img}" alt="Apple BYZ S852I">
                            </div>
                            <div class="product-card__property">
                                <div class="prduct-card__name-rate">
                                    <h1 class="product-card__product-name">${item.name}</h1>
                                    <div class="product-card__rate-block">
                                        <img class="product-card__rate-icon" src="./src/img/icons/star.png" alt="Star" >
                                        <span class="product-card__rate-count">${item.rate}</span>
                                    </div>
                                </div>
                                <div class="product-card__price-buy">
                                    <div class="product-card__prices">
                                        <ins class="product-card__price">${item.price}</ins>
                                        <del class="product-card__old-price">${item.oldPrice}</del>
                                    </div>
                                    <button class="product-card__buy-button" data-action="buy">Купить</button>
                                </div>
                            </div>
                        </div>`;

        headphones.insertAdjacentHTML('beforeend', cardHtml);
        
    });

}

