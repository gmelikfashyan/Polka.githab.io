function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let delta = prompt("Сколько ещё книг вы хотите приобрести?", '');
        this.value+= Number(delta);
    }
}

let acc = new Accumulator(0);
let card = document.getElementById('kap');
let counter = card.querySelector('p');
counter.innerText = acc.value;

document.getElementById('accButton').onclick = function(){
    acc.read();
    counter.innerText = acc.value;
}