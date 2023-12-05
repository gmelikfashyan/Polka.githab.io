function truncate(str, maxlength) {
    if (str.length > maxlength) {
        tmpS = str.substr(0, maxlength-4) + '...';
        return tmpS
    }
    return str;
}

let maxlength = 80;
let cards = document.getElementsByClassName('content');
for (let i = 0; i < cards.length; i++) {
    let stringCont = cards[i].querySelector('p')
    stringCont.innerText = truncate(stringCont.innerText, maxlength);
    }