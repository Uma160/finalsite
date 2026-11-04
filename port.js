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