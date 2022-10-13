function total() {
	const productCards = document.querySelectorAll('.basket__order-block');
	const totalPriceElement1 = document.querySelector('.order-card__summ');
	const totalPriceElement2 = document.querySelector('.total__price');
    

    
	let totalPrice = 0;

    productCards.forEach(function(card) {
        

        const productCount = card.querySelector('[data-counter]');
        const productPrice = card.querySelector('.order-card__price');

        const currentPrice = parseInt(productCount.innerText) * parseInt(productPrice.innerText);

        totalPrice+= currentPrice;
        
    });

    totalPriceElement1.innerText = totalPrice;
    totalPriceElement2.innerText = totalPrice;

    
}