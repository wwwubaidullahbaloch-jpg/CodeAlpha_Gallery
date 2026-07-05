
const images = [
    { src: 'https://picsum.photos/800/600?random=1', caption: '🌿 Nature' },
    { src: 'https://picsum.photos/800/600?random=2', caption: '🏙️ City' },
    { src: 'https://picsum.photos/800/600?random=3', caption: '⛰️ Mountains' },
    { src: 'https://picsum.photos/800/600?random=4', caption: '🌊 Ocean' },
    { src: 'https://picsum.photos/800/600?random=5', caption: '🌳 Forest' },
    { src: 'https://picsum.photos/800/600?random=6', caption: '🌅 Sunset' },
    { src: 'https://picsum.photos/800/600?random=7', caption: '🌙 Night' },
    { src: 'https://picsum.photos/800/600?random=8', caption: '🌸 Flower' },
    { src: 'https://picsum.photos/800/600?random=9', caption: '💧 Waterfall' },
    { src: 'https://picsum.photos/800/600?random=10', caption: '🏜️ Desert' },
    { src: 'https://picsum.photos/800/600?random=11', caption: '❄️ Snow' },
    { src: 'https://picsum.photos/800/600?random=12', caption: '🏖️ Beach' }
];

let currentIndex = 0;


const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');


document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', function() {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('show');

    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateLightbox();
}

function updateLightbox() {
    const image = images[currentIndex];
    lightboxImg.src = image.src;
    caption.textContent = image.caption;
}


document.addEventListener('keydown', function(event) {
    if (!lightbox.classList.contains('show')) return;

    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'Escape') {
        closeLightbox();
    }
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});