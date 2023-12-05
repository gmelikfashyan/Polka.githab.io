function Tovar(name, cost, count) {
    this.name = name;
    this.cost = cost;
    this.count = count;
} 
const cart = [];
const Carts = document.getElementById('basket');
const cost = document.getElementById('cost');

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        let e = document.getElementById(event.target.dataset.id);
        let cost = e.querySelector('p').innerText;
        let flag = 0;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name == e.id) {
                cart[i].count++;
                flag = 1;
            }
        }
        if (flag != 1) {
            cart.push(new Tovar(e.id, cost, 1));
        }
        
    }
    else if (event.target.classList.contains('deleteButton')) {
        deleteElem(event.target.dataset.parent);
    }
    else if (event.target.classList.contains('sortUp')) {
        sortGrow();
    }
    else if (event.target.classList.contains('sortDown')) {
        sortShrink();
    }
    removeAll();
    view();
    if(event.target.classList.contains('filter')) {
        let a = prompt("Введите значение а", "");
        let b = prompt("Введите значение b", "");
        let arr = [1, 2, 3, 4, 5, 6];
        let newArr = filt(arr, a, b);
        alert(newArr);

    }
} 



function view() {
    for (let i of cart) {
        let newCard = document.createElement('div');
        let nameCard = document.createElement('p');
        newCard.innerText = i.name;
        newCard.style.display = "flex";
        newCard.style.alignItems = "center";
        newCard.style.gap = "10px";
        newCard.style.border = "solid 2px";
        newCard.style.margin = "10px";
        newCard.style.padding = "5px";
        let countCard = document.createElement('p');
        countCard.innerText = i.count;
        newCard.appendChild(nameCard);
        newCard.appendChild(countCard);
        let deleteButton = document.createElement('button');
        deleteButton.className = "deleteButton";
        let iconButton = document.createElement('img');
        iconButton.src = "free-icon-recycle-bin-3156999.png";
        deleteButton.style.height = "32px";
        deleteButton.style.width = "32px";
        deleteButton.dataset.parent = i.name;
        deleteButton.appendChild(iconButton);
        iconButton.style.height ="100%";
        iconButton.style.width ="100%";
        newCard.appendChild(deleteButton);
        Carts.appendChild(newCard);
    }
    cost.innerText = sum() + "р.";
}

function removeAll() {
   Carts.innerHTML = "";
}

function sum(){
    let sum = 0
    if (cart.length != 0) {
        for (let i of cart) {
            sum += (i.cost * i.count);
        }
        return sum;
    }
    return sum;
}

function deleteElem(idName) {
    let counter = 0;
    let flag = 0;
    for (let i of cart) {
        if (i.name == idName) {
            flag = 1;
            break;
        }
        counter++;
    }
    if (flag == 1) 
        cart.splice(counter, 1);
}

function filt(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

function sortGrow(){
    cart.sort(compareGrow);
}
function sortShrink() {
    cart.sort(compareShrink);
}

function compareGrow(a, b) {
    if (a.count > b.count) return 1;
    if (a.count == b.count) return 0;
    if (a.count < b.count) return -1;
}
function compareShrink(a, b) {
    if (a.count < b.count) return 1;
    if (a.count == b.count) return 0;
    if (a.count > b.count) return -1;
}

