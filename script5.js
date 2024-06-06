$(document).ready(function() {
    $('#callForm3').submit(function(event) {
        event.preventDefault();

        const name = $('#name3').val().trim();
        const phone = $('#phone3').val().trim();
        const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
        const phonePattern = /^\+?[0-9\s\-()]{7,15}$/;

        if (!namePattern.test(name)) {
            alert('Имя должно содержать только буквы.');
            return;
        }

        if (!phonePattern.test(phone)) {
            alert('Введите корректный номер телефона.');
            return;
        }

        alert('Форма успешно отправлена!');
        // Здесь можно добавить код для отправки формы на сервер.
    });
});