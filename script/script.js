// Initialiser EmailJS avec ta clé publique
emailjs.init("MnbibrdnCkaXZitIQ"); // remplace par ta vraie clé EmailJS

// Gérer la soumission du formulaire
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_pcq2x65", "template_i7krrtv", form)
                .then(function () {
                    alert("E-mail envoyé avec succès !");
                    form.reset(); // Réinitialiser le formulaire
                }, function (error) {
                    console.error("Erreur :", error);
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                });
        });
    }

    // Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});





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