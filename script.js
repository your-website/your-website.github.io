let form = document.forms.register;
let formText = form.querySelector('input[type=text]');
let formEmail = form.querySelector('input[type=email]');
let formTel = form.querySelector('input[type=tel]');
let formUrl = form.querySelector('input[type=url]');
let formSubmit = form.querySelector('input[type=submit]');


class Validate {
    constructor() {
    }

    validateText(pattern) {

    }

    validateEmail(pattern) {

    }

    validateTel(pattern) {

    }

    validateUrl(pattern) {

    }

    validateSubmit(pattern) {

    }
}

const validate = new Validate();

// валидация popup
formText.addEventListener('input', function (event) {
    let regex = /^[А-ЯЁ]{1}[a-я]*\-?([А-ЯЁ{1}][a-я]*)?/g;
    let str = formText.value;
    console.log(str.match(regex));
    console.log(formText.value);
});

formEmail.addEventListener('input', function (event) {
    let regex = /\w{1,}(\-?)*@[a-z]+\.{1}[a-z]{2,}/g;
    let str = formEmail.value;
    console.log(str.match(regex));
    console.log(formEmail.value);
});

formTel.addEventListener('input', function (event) {
    let regex = /(8{1}\d{10}|\+7\d{10}|\+7\s\d{3}\-\d{3}\-\d{2}\-\d{2}|\+7\(\d{3}\)\s\d{3}\-\d{2}\-\d{2})|\+7\(\d{3}\)\d{3}\-\d{2}\-\d{2}/gi;
    let str = formTel.value;
    console.log(str.match(regex));
    console.log(formTel.value);
});

formUrl.addEventListener('input', function (event) {
    let regex = /^(http\:\/\/|https\:\/\/)(\w{2,}\.)?(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\w+(\w|\-)*)(\:\d{2,5})?(\/\w*)?\.[a-z]{2,}(\/|\w|\-|\%|\?|\=)*(\#|\.\w{2,})?/gi;
    let str = formUrl.value;
    console.log(str.match(regex));
    console.log(formUrl.value);
});