function toggleMenu(event) {
    const menu = document.getElementById('theme-menu');
    const button = event.currentTarget;

    const rect = button.getBoundingClientRect();
    menu.style.left = rect.left - rect.width + 'px'; // Move more to the left
    menu.style.top = rect.bottom + 'px'; // Position below the button

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Hide menu if clicked outside
document.addEventListener('click', function (event) {
    const menu = document.getElementById('theme-menu');
    if (!menu.contains(event.target) && !event.target.closest('.border.rounded-circle')) {
        menu.style.display = 'none';
    }
});

function toggleMobileMenu(event) {
    const menu = document.getElementById('mobile-menu');
    const button = event.currentTarget;
    const aboutImgCont = document.getElementById('about-img');
    const isAboutPage = window.location.pathname.endsWith('about.html');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        if (isAboutPage && aboutImgCont) {
            aboutImgCont.style.display = 'none';
        }
    } else {
        menu.style.display = 'none';
        if (isAboutPage && aboutImgCont) {
            aboutImgCont.style.display = 'block';
        }
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const aboutImgCont = document.getElementById('about-img');
    const isAboutPage = window.location.pathname.endsWith('about.html');

    menu.style.display = 'none';
    if (isAboutPage && aboutImgCont) {
        aboutImgCont.style.display = 'block';
    }
}

// Attach event listeners to the links and cross button after the DOM has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.mobile-menu-nav-link');
    links.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    const crossButton = document.querySelector('.cross-button');
    crossButton.addEventListener('click', closeMobileMenu);
});


function setTheme(theme) {
    const body = document.body;
    const menu = document.getElementById('theme-menu');
    if (theme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
    menu.style.display = 'none'; // Hide the menu
}


