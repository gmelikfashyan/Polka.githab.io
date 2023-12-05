function addEventListenersToCards()
{
    const productCards = document.querySelectorAll('.card');

    productCards.forEach(function(card) {
        const productId = card.dataset.productId; // Получаем идентификатор товара
        const increaseQuantityBtn = card.querySelector('#plus');
        
        
        increaseQuantityBtn.addEventListener('click', function() {
            const storedProducts = JSON.parse(localStorage.getItem('productsData'));
            ++storedProducts[productId];
            localStorage.setItem('productsData', JSON.stringify(storedProducts));
        });

    });
}
addEventListenersToCards();