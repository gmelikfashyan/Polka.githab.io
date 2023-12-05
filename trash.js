const trash = document.getElementById("trash-cards")
const resultCost = document.getElementById("result-cost")

function generateCards(cardsData){
    const cards = [];
    let price = 0;
    for (let i = 0; i < cardsData.length; i++){
        
        let quantity = JSON.parse(localStorage.getItem('productsData'))[i+1]
        price += parseInt(cardsData[i].cost) * parseInt(quantity);
        if (parseInt(quantity) > 0){
            cards.push(`
            <div class="card" data-product-id=${cardsData[i].id}>
                <div class = "card-wrapper">
                    <img class="book-img" src="./other/${cardsData[i].png}" alt="">
                    <div class = "card-name">
                        <p class="cart-title">${cardsData[i].title}</p>
                        <p class="cart-author">${cardsData[i].author}</p>
                    </div>
                </div>
                <p class="price">${cardsData[i].cost} <span>руб.</span></p>
                
                
                <div id="container-btns">
                    <button id="minus"><p>-</p></button>
                    <p id="quantity">${quantity}</p>
                    <button id="plus"><p>+</p></button>
                </div>
                <button id="remove" class="rate" style="background : transparent; width: 40px; height: 40px; display: flex; align-items: center; border: none;"><img src="/other/free-icon-recycle-bin-3156999 (1).png" style="background : transparent; width: 100%"></p></button>
            </div>`)
        }

        resultCost.innerHTML = price;
    }
    return cards;
}

trash.innerHTML = generateCards(cardsData).join("");


