function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 1. Знаходимо елементи в DOM
const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// 2. Додаємо слухача події на кнопку
changeColorBtn.addEventListener('click', () => {
  // 3. Генеруємо новий колір
  const newColor = getRandomHexColor();

  // 4. Змінюємо колір фону body через інлайн-стиль (style.backgroundColor)
  body.style.backgroundColor = newColor;

  // 5. Виводимо текстове значення кольору в span
  colorSpan.textContent = newColor;
});