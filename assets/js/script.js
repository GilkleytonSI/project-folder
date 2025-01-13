/* Show button when scrolling */
window.onscroll = function () {
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (window.scrollY > 100) {
        whatsappButton.style.display = 'block';
        whatsappButton.classList.add('show-whatsapp');
    } else {
        whatsappButton.style.display = 'none';
        whatsappButton.classList.remove('show-whatsapp');
    }
};

/* Show button cookie */
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    }

    acceptCookies.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});
