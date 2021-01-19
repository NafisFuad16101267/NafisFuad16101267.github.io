// DOM
let postalCode = document.querySelector('#postal-code');
let phoneNumber = document.querySelector('#phone-number');
let emailAddres = document.querySelector('#email-address');

// Add Event Listener
postalCode.addEventListener('click', validate);
phoneNumber.addEventListener('click', validate);
emailAddres.addEventListener('click', validate);

// Validator Class
class validator {
    static validation(val, target) {
        let re;
        switch (target) {
            case 'Postal Code':
                re = /^[0-9]{4}$/;
                break;
            case 'Phone Number':
                re = /^(\+)?(88)?01[0-9]{9}$/;
                break;
            case 'Email Address':
                re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
                break;
        }
        return re.test(val);
    }
}
class UI {
    static showResult(res, target) {
        let div = document.querySelector('#result');
        if (res == true) {
            div.innerHTML = `
            <h4>The ${target} is Valid</h4>`;
        } else {
            div.innerHTML = `
            <h4>The ${target} is not Valid</h4>`;
        }
        this.showAlert(res, target);
        //console.log(div);
    }
    static showAlert(res, target) {
        let put = document.querySelector('#menu');
        let div = document.createElement('div');
        let colour = res ? `success` : `error`
        div.setAttribute('class', `alert ${colour}`);
        let show = res ? 'valid' : 'Not Valid';
        div.innerText = `Given ${target} is ${show}`;
        put.appendChild(div);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

function validate(e) {
    e.preventDefault();
    let val = prompt(`Please enter a ${e.target.value}`);
    let res = validator.validation(val, e.target.value);
    UI.showResult(res, e.target.value);
}
