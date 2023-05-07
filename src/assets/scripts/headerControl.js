
window.addEventListener("DOMContentLoaded", () => {
    var loc = location.pathname.substring(1);
    document.querySelector('.header__li a[href="' + loc +'"]').parentElement.classList.add('header__li--active');   
});