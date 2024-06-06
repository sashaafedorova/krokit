document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    function showSlide(index) {
        const carousel = document.querySelector('.carousel');
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Автоматическое переключение слайдов каждые 5 секунд
    setInterval(nextSlide, 5000);

    // Открытие изображения в лайтбоксе
    slides.forEach(slide => {
        slide.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.querySelector('img').src;
        });
    });

    // Закрытие лайтбокса
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Закрытие лайтбокса при клике вне изображения
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
