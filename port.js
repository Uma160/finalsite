function checkEmail() {
    const email = document.getElementById("email").value;
    const error = document.getElementById("email-error");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        error.textContent = "Email введён правильно!";
        error.style.color = "green";
    } else {
        error.textContent = "Введите корректный Email!";
        error.style.color = "red";
    }
}
// 1. Функция переключения темы с сохранением выбора
const toggleTheme = () => {
  // Создаем переменную isDark и записываем в нее результат переключения класса
  const isDark = document.body.classList.toggle('dark-theme');
  
  // Теперь браузер знает, что такое isDark, и успешно сохраняет это в память
  localStorage.setItem('theme-dark', isDark);
};

// 2. Код, который автоматически проверяет память при загрузке сайта
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme-dark');
  // Если пользователь раньше выбирал тёмную тему, включаем её сразу
  if (savedTheme === 'true') {
    document.body.classList.add('dark-theme');
  }
});
