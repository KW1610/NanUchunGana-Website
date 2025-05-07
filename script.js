
document.addEventListener('DOMContentLoaded', () => {
    console.log("Сайт загружен и готов.");

    // Сюда можно добавить интерактивность:
    // - Плавная прокрутка к секциям по клику на ссылки в навигации
    // - Валидация формы контактов перед отправкой
    // - Возможно, анимации при прокрутке
    // - Обработка нажатия кнопок

    // Пример плавной прокрутки (добавьте класс .nav-link к ссылкам в меню)
    const navLinks = document.querySelectorAll('.navigation a[href^="#"]'); // Используем селектор для внутренних ссылок

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Отменить стандартный переход

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start' // Выровнять по верху секции
                });
            }
        });
    });

     // Обработка отправки формы (простой пример с предотвращением отправки)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Предотвратить реальную отправку формы
            alert('Спасибо за вашу заявку! (Это тестовое сообщение, данные не отправлены)');
            // Здесь в реальном проекте был бы код для отправки данных на сервер (AJAX/fetch)
            this.reset(); // Очистить форму
        });
    }

});
