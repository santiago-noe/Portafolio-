function descargarCV() {
    const link = document.createElement('a');
    link.href = 'CV.pdf';
    link.download = 'Noe_Yupanqui_CV.pdf';
    link.click();
}

const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
    const light = document.documentElement.dataset.theme === 'light';
    themeButton.setAttribute('aria-pressed', String(light));
    themeButton.setAttribute('aria-label', light ? 'Activar tema oscuro' : 'Activar tema claro');
    themeButton.querySelector('.theme-label').textContent = light ? 'Tema oscuro' : 'Tema claro';
}
updateThemeButton();
themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch {}
    updateThemeButton();
});

const menuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu() {
    mobileNav.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
}
menuButton.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMenu();
        menuButton.focus();
    }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

document.querySelectorAll('.project-card').forEach((card, index) => {
    const details = card.querySelector('.card-description');
    const button = card.querySelector('.btn-card-outline');
    details.id = `project-details-${index}`;
    details.hidden = true;
    button.setAttribute('aria-controls', details.id);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
        details.hidden = !details.hidden;
        button.setAttribute('aria-expanded', String(!details.hidden));
        button.textContent = details.hidden ? 'Ver detalles + ' : 'Ocultar detalles -';
    });
});

document.querySelector('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const first = form.elements['first-name'].value.trim();
    const last = form.elements['last-name'].value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    const body = `${message}\n\n${first} ${last}\nCorreo: ${email}`;
    window.location.href = `mailto:noe.yupanqui.27@unsch.edu.pe?subject=${encodeURIComponent('Contacto desde el portafolio: ' + first)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'Se ha solicitado abrir tu aplicación de correo. Envía el mensaje desde allí. También puedes escribir a noe.yupanqui.27@unsch.edu.pe.';
});
document.querySelector('#current-year').textContent = new Date().getFullYear();
if (window.lucide) window.lucide.createIcons();
