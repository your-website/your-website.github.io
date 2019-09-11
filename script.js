let form = document.forms.register;
let formText = form.querySelector('input[type=text]');
let formEmail = form.querySelector('input[type=email]');
let formTel = form.querySelector('input[type=tel]');
let formUrl = form.querySelector('input[type=url]');

let bulleanText = false;
let bulleanEmail = false;
let bulleanTel = false;
let bulleanUrl = false;


class Validate {
    constructor() {
        this.say = function(pattern, str, errorField, errorValue) {
            if (str.value.match(pattern) === null) {
                document.querySelector(`${errorField}`).textContent = errorValue;
            } else if (str.value.match(pattern)[0].length === str.length) {
                document.querySelector(`${errorField}`).textContent = "";
            } else document.querySelector(`${errorField}`).textContent = errorValue;
        }
    }

    validateText(pattern, str) {
        console.log(pattern);
        let reg = pattern;
        let val = str;
        let errorField = '.form__error_text';
        let errorValue = "Введите имя c заглавной буквы. Например Роман. Анна-Мария";
        this.say(reg, val, errorField, errorValue);
    }

    validateEmail(pattern, str) {
        console.log(pattern);
        let reg = pattern;
        let val = str;
        let errorField = '.form__error_email';
        let errorValue = "e-mail в формате: sega@yandex.ru";
        this.say(reg, val, errorField, errorValue);
    }

    validateTel(pattern, str) {
        let reg = pattern;
        let val = str;
        let errorField = '.form__error_tel';
        let errorValue = "телефон в формате: +7 (123) 456-78-90";
        this.say(reg, val, errorField, errorValue);
    }

    validateUrl(pattern, str) {
        console.log(pattern);
        console.log(str.value);

        let reg = pattern;
        let val = str;
        let errorField = '.form__error_url';
        let errorValue = "URL в формате: http://mysite.ru";
        this.say(reg, val, errorField, errorValue);
    }

    validateSubmit(pattern) {

    }
}

function sub() {
    if (formText.checkValidity() && formEmail.checkValidity() && formTel.checkValidity() && formUrl.checkValidity()) {
        document.querySelector('.form__button').setAttribute('disabled', false);
        document.querySelector('.form__button').style.color = "#000";
        document.querySelector('.form__button').style.backgroundColor = "#ffdb4d";
    } else {
        document.querySelector('.form__button').setAttribute('disabled', true);
        document.querySelector('.form__button').style.color = "rgba(1, 1, 1, .2)";
        document.querySelector('.form__button').style.backgroundColor = "#b3b3b3";
    }
}

const validate = new Validate();

formText.addEventListener('input', function (event) {
    validate.validateText(formText.pattern, event.target);
    sub();
});

formEmail.addEventListener('input', function (event) {
    validate.validateEmail(formEmail.pattern, event.target);
    sub();
});

formTel.addEventListener('input', function (event) {
    validate.validateTel(formTel.pattern, event.target);
    sub();
});

formUrl.addEventListener('input', function (event) {
    validate.validateUrl(formUrl.pattern, event.target);
    sub();
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
});


    
