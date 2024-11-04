window.addEventListener('scroll', function() {
    const stated = document.querySelector('.stated');
    if (window.scrollY > 50) { 
        stated.classList.add('scrolled');
    } else {
        stated.classList.remove('scrolled');
    }
});
window.addEventListener('scroll', function() {
    const headerText = document.querySelector('.st');
    if (window.scrollY > 50) {
        headerText.classList.add('gray');
    } else {
        headerText.classList.remove('gray');
    }
});