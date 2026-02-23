const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухача на подію 'input'
nameInput.addEventListener('input', (event) => {
  // 1. Отримуємо значення та чистимо його від пробілів по краях
  const trimmedValue = event.currentTarget.value.trim();

  // 2. Перевіряємо: якщо рядок не порожній — виводимо його, інакше "Anonymous"
  if (trimmedValue !== "") {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});