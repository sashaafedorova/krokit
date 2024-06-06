document.addEventListener('DOMContentLoaded', function() {
    var callButton = document.querySelector('.call-button');
    var callForm = document.querySelector('.call-form');

    callButton.addEventListener('click', function() {
        callForm.style.display = callForm.style.display === 'none' ? 'block' : 'none';
    });

    callForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;

        if (name && phone) {
            alert('Звонок заказан! Имя: ' + name + ', Телефон: ' + phone);
            callForm.style.display = 'none';
            callForm.reset();
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});