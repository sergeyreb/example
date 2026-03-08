// Получаем необходимые элементы
const hamburgerButton = document.querySelector('.hamburger-button');
const menuItems = document.querySelector('.menu-items');

// Обработчик клика по кнопке-гамбургеру
hamburgerButton.addEventListener('click', () => {
// Переключаем активные классы для кнопки и меню
hamburgerButton.classList.toggle('active');
menuItems.classList.toggle('active');

// Обновляем атрибут aria-expanded для доступности
const isExpanded = hamburgerButton.classList.contains('active');
hamburgerButton.setAttribute('aria-expanded', isExpanded);
});

// Закрываем меню при клике вне его области
document.addEventListener('click', (event) => {
const isClickInside = hamburgerButton.contains(event.target) || 
menuItems.contains(event.target);

if (!isClickInside && menuItems.classList.contains('active')) {
hamburgerButton.classList.remove('active');
menuItems.classList.remove('active');
hamburgerButton.setAttribute('aria-expanded', 'false');
}
});