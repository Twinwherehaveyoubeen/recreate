
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#4CAF50';
    } else {
        header.style.backgroundColor = '#ff9800';
    }
});
