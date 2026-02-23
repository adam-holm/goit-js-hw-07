const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  // 1. Зупиняємо перезавантаження сторінки
  event.preventDefault();

  // 2. Отримуємо доступ до елементів форми через деструктуризацію
  const { email, password } = event.currentTarget.elements;

  // 3. Беремо значення та чистимо їх від пробілів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // 4. Перевірка на порожні поля
  if (emailValue === "" || passwordValue === "") {
    return alert('All form fields must be filled in');
  }

  // 5. Формуємо об'єкт із даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // 6. Виводимо результат і очищаємо форму
  console.log(formData);
  event.currentTarget.reset();
});
