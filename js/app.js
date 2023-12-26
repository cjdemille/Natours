const navigationToggle = document.querySelector('#navi-toggle');
const navLinks = document.querySelectorAll('.navigation__link');

const popUpContent = document.querySelector('.popup__content');



const closeNavWindow = () => {
    navigationToggle.checked = false;
}


navLinks.forEach((link) => link.addEventListener('click' , closeNavWindow));

document.addEventListener('click', (e) => {
    var isClickInsidePopup = popUpContent.contains(e.target);
    var isPopupVisible = window.location.hash === '#popup';

    if (isPopupVisible && !isClickInsidePopup) {
        window.location.hash = 'section-tours'; 
}})