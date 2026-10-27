// ===== AÑO DEL FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== MENÚ MOBILE =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// ===== GALERÍA (EDITÁ ACÁ TUS FOTOS) =====
// Reemplazá las URLs por tus fotos. Podés subirlas a una carpeta /img/ o usar URLs externas.
const fotos = [
  { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800', alt: 'Portón de hierro' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Portón automático' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', alt: 'Techo metálico' },
  { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800', alt: 'Rejas de seguridad' },
  { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800', alt: 'Galpón metálico' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800', alt: 'Estructura metálica' },
];

const galeriaGrid = document.getElementById('galeriaGrid');
fotos.forEach((foto, i) => {
  const div = document.createElement('div');
  div.className = 'galeria-item';
  div.innerHTML = `<img src="${foto.src}" alt="${foto.alt}" loading="lazy">`;
  div.addEventListener('click', () => abrirLightbox(foto.src));
  galeriaGrid.appendChild(div);
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function abrirLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function cerrarLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', cerrarLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) cerrarLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarLightbox();
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});