// 1. Отримуємо всі категорії (елементи з класом item)
const categories = document.querySelectorAll('#categories .item');

// 2. Виводимо загальну кількість
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  // Шукаємо заголовок h2 всередині поточної категорії
  const categoryName = category.querySelector('h2').textContent;
  
  // Шукаємо всі вкладені li саме в цій категорії
  const elementsCount = category.querySelectorAll('ul li').length;
  
  // Виводимо результат у консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});