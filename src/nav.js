const navList = document.querySelector('.nav-links');
const mainList = document.querySelectorAll('.main_contant');

navList.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('.nav-item');
    
    if (clickedItem) {
        // Видаляємо у всіх
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        // Додаємо натиснутому
        clickedItem.classList.add('active');

        // 2. Отримуємо назву секції, яку треба показати
        const sectionId = clickedItem.getAttribute('data-section');

        // 3. Ховаємо ВСІ секції та показуємо потрібну
        mainList.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block'; // Показуємо
            } else {
                section.style.display = 'none';  // Ховаємо
            }
        });
    }
});