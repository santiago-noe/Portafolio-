function descargarCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf'; // Ruta de tu archivo
    link.download = 'Mi_CV.pdf'; // Nombre con el que se guardará
    link.click();
}
document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
});

// Cerrar el menú al hacer clic en cualquier enlace
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobile-nav').classList.remove('active');
    });
});