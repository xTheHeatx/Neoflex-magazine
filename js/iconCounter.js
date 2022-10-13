window.addEventListener('click', function (event){

    let counter;

    if (event.target.dataset.action === 'buy') {

        const counterBlock = event.target.closest('body');
        counter = counterBlock.querySelector('[data-counter]');
    }

    
    
    if(event.target.dataset.action === 'buy'){
        
        counter.innerText = ++counter.innerText;
    }
    

});