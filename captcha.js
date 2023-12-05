let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
let length = 6;
let captcha = '';
var buttonReg = document.getElementById('regButton');
buttonReg.disabled = true;
function getStringCaptcha() {
    for (let i = 0; i < length; i++) {
        captcha += str.charAt(Math.floor(Math.random() * str.length));
    }
    return captcha;
}
let value1;
let value2;
let numCaptcha;
function getMathCaptcha() {
    value1 = Math.floor(Math.random() * 100);
    value2 = Math.floor(Math.random() * 100);
    numCaptcha = value1 + '+' + value2;
    return numCaptcha;
}

function isEmpty(object) {
    if (object == "") {
        return true;
    }
    return false;
}
let cap = document.getElementById('captcha');
let labelCap = document.getElementById('labelCaptcha');
var counter;
function check(event) {
    event.preventDefault();
    if (counter < 2) {
        if (isEmpty(cap.value))
            return;
        if (counter < 1) {
            if (cap.value == labelCap.innerText) {
                alert('Капча введена верно!');
                buttonReg.disabled = false;
                counter++;
                
            }
            else {
                counter++;
                alert('Капча введена неверно!');
                labelCap.innerText = getMathCaptcha();
                cap.value = "";
                return
            }
        }
        else {
            let sum = 0;
            let oper1 = labelCap.innerText.substring(0, labelCap.innerText.indexOf("+"));
            let tmpi = labelCap.innerText.indexOf("+");
            let oper2 = labelCap.innerText.slice(tmpi+1, labelCap.innerText.length);
            sum = Number(oper1) + Number(oper2);
            if (sum === Number(cap.value)) {
                alert('Капча введена верно!');
                counter++;
                buttonReg.disabled = false;
            }
            else {
                counter++;
                alert('Капча введена неверно!');
            }
        }
    }
    else {
        alert("Вы использовали две попытки")
    }
}
function checkCaptcha() {
    counter = 0;
    labelCap.innerText = getStringCaptcha();
}
var submitButton = document.getElementById('checkCaptcha');
submitButton.addEventListener('click', check);

window.onload = checkCaptcha;