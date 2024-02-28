let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let top = sec.offsetTop - 150;
        let bottom = top + sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            });
        }
    });
};
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
