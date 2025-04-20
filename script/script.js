// Récupérer l'élément
const backToTop = document.getElementById('backToTop');

// Cacher le bouton au début
backToTop.style.display = 'none';

// Afficher le bouton si on scroll plus de 100px
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Remonter en haut quand on clique sur le bouton
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});