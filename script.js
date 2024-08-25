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
    localStorage.setItem('theme', theme);
    menu.style.display = 'none'; // Hide the menu
}

function loadTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        setTheme(currentTheme);
    }
    else {
        setTheme(theme);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.mobile-menu-nav-link');
    links.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    const crossButton = document.querySelector('.cross-button');
    crossButton.addEventListener('click', closeMobileMenu);
    loadTheme();
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Get the modal
    var modal = document.getElementById('imageModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById('img01');
    var images = document.querySelectorAll('.p-img, .pp-img');

    images.forEach(img => {
        img.onclick = function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden';
        }
    });

    // Get the <span> element that closes the modal
    var span = document.getElementById('closeModal');

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // When the user clicks anywhere outside of the modal content, close the modal
    modal.onclick = function (event) {
        if (event.target !== modalImg) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

