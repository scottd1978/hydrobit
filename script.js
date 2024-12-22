document.getElementById('navToggle').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.transform === 'translateX(0%)') {
        navLinks.style.transform = 'translateX(100%)';
    } else {
        navLinks.style.transform = 'translateX(0%)';
    }
});
