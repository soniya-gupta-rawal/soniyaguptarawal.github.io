function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    const isOpen = navLinks.classList.toggle('active');
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    }
}

function toggleAbstract(button) {
    const abstractContent = button.nextElementSibling;
    abstractContent.classList.toggle('show');
    button.textContent = abstractContent.classList.contains('show') ? 'Hide Abstract' : 'Abstract';
}

document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');

    if (nav && navLinks && !nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        if (menuToggle) {
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }
});
