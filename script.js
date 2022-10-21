const BUTTON = document.querySelector('button');
const EMAIL = document.querySelector('#email');
const ERROR_MESSAGE = document.querySelector('.error--message');
const SUCCESS_MESSAGE = document.querySelector('.success--message');
const ERROR_MESSAGE_MOBILE = document.querySelector('.error-mobile--message');
const SUCCESS_MESSAGE_MOBILE = document.querySelector('.success-mobile--message');
const HEADER_CTA = document.querySelector('.c-header-cta');

const REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let emailAddress;

BUTTON.addEventListener('click', () => {
    if (emailAddress.match(REGEX)) {
        EMAIL.classList.remove('error');

        if (isMobileView()) {
            ERROR_MESSAGE_MOBILE.classList.add('u-hidden');
            SUCCESS_MESSAGE_MOBILE.classList.remove('u-hidden')
        }

        if (!isMobileView()) {
            ERROR_MESSAGE.classList.add('u-hidden');
            SUCCESS_MESSAGE.classList.remove('u-hidden');
        }
        
        
    } else {
        if (isMobileView()) {
            EMAIL.classList.add('error');
            ERROR_MESSAGE_MOBILE.classList.remove('u-hidden');
            SUCCESS_MESSAGE_MOBILE.classList.add('u-hidden')
        }

        if (!isMobileView()) {
            EMAIL.classList.add('error');
            ERROR_MESSAGE.classList.remove('u-hidden');
            SUCCESS_MESSAGE.classList.add('u-hidden');
        }
       
    }
    
});

EMAIL.addEventListener('input', (event) => {

    if (!EMAIL.value) {
        EMAIL.classList.add('error');
        ERROR_MESSAGE.classList.remove('u-hidden');
        BUTTON.setAttribute('disabled', 'true');
    } else {
        EMAIL.classList.remove('error');
        ERROR_MESSAGE.classList.add('u-hidden');
        BUTTON.removeAttribute('disabled');
        emailAddress = EMAIL.value  
    }
})

const isMobileView = () => {
     return window.innerWidth < 415 ? true : false;
}