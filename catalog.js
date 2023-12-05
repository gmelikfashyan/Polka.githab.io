

function generateCards(cardsData, sort, category){
    


    const cards = [];
    cardsData.forEach(element => {
        if (element.category == category){
            let quantity = JSON.parse(localStorage.getItem('productsData'))[element.id];

            cards.push(`<div class="card" data-product-id=${element.id}>
                            <div class="cart-image"><img src="images/red/${element.png}" alt=""></div>
                            
                            <p class="cart-title">${element.title}</p>
                            <p class="rate"><i class='bx bxs-star'></i>${element.rate} </p>
                            <p class="price">${element.cost} <span>руб.</span></p>
                        
                            <div id="container-btns">
                                <button id="minus"><p>-</p></button>
                                <p id="quantity">${quantity}</p>
                                <button id="plus"><p>+</p></button>
                            </div>
                    </div>`)
        }

    })
    
    return cards;
}

