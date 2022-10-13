window.addEventListener('click', function (event){

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        const counterBlock = event.target.closest('.order-card__buttons-summ');
        counter = counterBlock.querySelector('[data-counter]');
    }

    
    
    if(event.target.dataset.action === 'plus'){
        
        counter.innerText = ++counter.innerText;
    }
    
    if(event.target.dataset.action === 'minus'){

        if (parseInt(counter.innerText) > 1){

            counter.innerText = --counter.innerText;

        }

        

    }

    if (event.target.hasAttribute('data-action') && event.target.closest('.order-card')){
        
        total();

    }

});