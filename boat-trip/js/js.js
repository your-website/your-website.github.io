const navSlide = () => {
    const navigation__burger = document.querySelector('.navigation__burger');
    const nav = document.querySelector('.navigation__burger-hidden');
    const burgerHidden__link = document.querySelectorAll('.burger-hidden__link');


    navigation__burger.addEventListener('click', () => {

        // TOGGLE NAV

        nav.classList.toggle('navigation__burger-active');

        // ANIMATE LINKS

        burgerHidden__link.forEach((link, index) => {
            const second = index / 7 + 1;

            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = 'burgerhidden__linkfade 0.5s ease forwards ' +  second + 's';
            }
        });

        // BURGER ANIMATION

        navigation__burger.classList.toggle('toggle');
    });
};

navSlide();

const dropDownSlide = () => {
    const navigation__dropdownList_personalAccount = document.querySelector('.navigation__dropdown-list_personal-account');
    const dropdownList__personalAccountHidden = document.querySelector('.dropdown-list__personal-account-hidden');
    const dropdownList__hiddenLink = document.querySelectorAll('.dropdown-list__hidden-link');

    const navigation__dropdownList_currency = document.querySelector('.navigation__dropdown-list_currency');
    const dropdownList__currencyAccountHidden = document.querySelector('.dropdown-list__currency-account-hidden');

    const navigation__dropdownList_language = document.querySelector('.navigation__dropdown-list_language');
    const dropdownList__languageHidden = document.querySelector('.dropdown-list__language-hidden');

    // TOGGLE NAV

    navigation__dropdownList_personalAccount.addEventListener('click', () => {
        dropdownList__personalAccountHidden.classList.toggle('dropdown-list__personal');
    });

    navigation__dropdownList_currency.addEventListener('click', () => {
        dropdownList__currencyAccountHidden.classList.toggle('dropdown-list__personal-two');
    });

    navigation__dropdownList_language.addEventListener('click', () => {
        dropdownList__languageHidden.classList.toggle('dropdown-list__personal-three');
    });

    // ANIMATE LINKS

    dropdownList__hiddenLink.forEach((link, index) => {
        const second = index / 7 + 0.2;

        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = 'dropdownhidden__linkfade 0.5s ease forwards ' +  second + 's';
        }
    });
    
}

dropDownSlide ();