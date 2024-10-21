// script.js

// Функция за регистрация на потребител
function registerUser(event) {
    event.preventDefault(); // предотвратява стандартното поведение на формата

    // Извличане на данни от формата
    const name = document.querySelector('input[name="name"]').value; // Име
    const email = document.querySelector('input[name="email"]').value; // Email
    const city = document.querySelector('input[name="city"]').value; // Град
    const registrationDate = new Date().toLocaleDateString(); // Дата на регистрация

    // Проверка за съществуващ масив с потребители
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Добавяне на нов потребител в масива
    users.push({
        name: name,
        email: email,
        city: city,
        registrationDate: registrationDate
    });

    // Запазване на актуализирания масив в localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Пренасочване към профила
    window.location.href = 'profile.html'; 
}

// Функция за добавяне или премахване на продукт от любими
function toggleFavorite(productId) {
    // Извличане на списъка с любими от localStorage или създаване на нов
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (favorites.includes(productId)) {
        // Ако продуктът вече е в любими, го премахваме
        favorites = favorites.filter(id => id !== productId);
        alert('Продуктът е премахнат от любимите!');
    } else {
        // В противен случай добавяме продукта
        favorites.push(productId);
        alert('Продуктът е добавен в любимите!');
    }
    
    // Записваме актуализирания списък с любими обратно в localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Функция за извличане и показване на любимите продукти
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>Нямате любими продукти.</p>';
        return;
    }

    // Примерен масив с данни за продуктите
    const products = [
        { id: '1', name: 'Продукт 1', price: '20 лв.' },
        { id: '2', name: 'Продукт 2', price: '30 лв.' },
        { id: '3', name: 'Продукт 3', price: '40 лв.' }
    ];

    // Извеждаме информация за любимите продукти
    favorites.forEach(productId => {
        const product = products.find(p => p.id === productId);
        if (product) {
            const productElement = document.createElement('div');
            productElement.innerHTML = `<p>${product.name} - ${product.price}</p>`;
            favoritesList.appendChild(productElement);
        }
    });
}

// Функция за извеждане на регистрациите
function loadRegistrations() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const registrationsList = document.getElementById('registrations');

    // Показване на всеки регистриран потребител
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email} - ${user.city} - ${user.registrationDate}`;
        registrationsList.appendChild(li);
    });
}

// Функция за извеждане на информация от localStorage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Десериализиране на данните
}

// Функция за записване на информация в localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); // Сериализиране на данните
}

// Функция за актуализиране на localStorage
function updateLocalStorage(key, newValue) {
    saveToLocalStorage(key, newValue); // Просто повикаме функцията за запис
}

// Функция за изтриване на информация от localStorage
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// Функция за изчистване на всички данни в localStorage
function clearLocalStorage() {
    localStorage.clear();
}
