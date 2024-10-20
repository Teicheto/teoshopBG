document.querySelector('a[href="#section"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section').scrollIntoView({
        behavior: 'smooth'
    });
});
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
<script>
    const favorites = [];

    function addToFavorites(productName) {
        if (!favorites.includes(productName)) {
            favorites.push(productName);
            alert(productName + " е добавен в любими!");
        } else {
            alert(productName + " вече е в любими!");
        }
        updateFavoritesCount();
    }

    function updateFavoritesCount() {
        const favoritesCountElement = document.getElementById('favorites-count');
        favoritesCountElement.innerText = favorites.length;
    }
</script>
<body>
    <!-- Останалата част от страницата -->

    <script>
        function toggleMenu() {
            const menu = document.getElementById('dropdown-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }

        // Скриване на менюто при клик извън него
        window.onclick = function(event) {
            if (!event.target.matches('.favorites') && !event.target.matches('.icon')) {
                const menu = document.getElementById('dropdown-menu');
                menu.style.display = 'none';
            }
        };
    </script>
</body>
function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(productId)) {
        // Ако продуктът вече е в любими, го премахваме
        favorites = favorites.filter(id => id !== productId);
    } else {
        // В противен случай добавяме продукта
        favorites.push(productId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Продуктът е добавен/премахнат от любимите!');
}
<!DOCTYPE html>
<html lang="bg">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <style>
        /* Стилове за формата */
    </style>
</head>
<body>

    <div class="form-container">
        <h1>Регистрация</h1>
        <form onsubmit="registerUser(event)">
            <input type="text" name="name" placeholder="Име" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="text" name="city" placeholder="Град" required>
            <button type="submit">Регистрирай се</button>
        </form>
        <p style="text-align: center;">Вече имате акаунт? <a href="login.html">Влезте тук</a></p>
    </div>

    <script src="script.js"></script> <!-- Включване на JavaScript файла -->
</body>
</html>
// script.js
function registerUser(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const registrationDate = new Date().toLocaleDateString();

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userCity', city);
    localStorage.setItem('registrationDate', registrationDate);

    window.location.href = 'profile.html'; 
}

function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Продуктът е добавен/премахнат от любимите!');
}

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>Нямате любими продукти.</p>';
        return;
    }

    favorites.forEach(productId => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>Продукт ID: ${productId}</p>`;
        favoritesList.appendChild(productElement);
    });
}
// Функция за добавяне или премахване на продукт от любимите
function toggleFavorite(productId) {
    // Извличаме списъка с любими от localStorage или създаваме нов, ако няма
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Проверяваме дали продуктът вече е в любими
    if (favorites.includes(productId)) {
        // Ако е, премахваме го
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

// Функция за зареждане на любимите продукти
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>Нямате любими продукти.</p>';
        return;
    }

    // Примерен масив с данни за продуктите (може да го замениш с истински данни)
    const products = [
        { id: '1', name: 'Продукт 1', price: '20 лв.' },
        { id: '2', name: 'Продукт 2', price: '30 лв.' },
        { id: '3', name: 'Продукт 3', price: '40 лв.' }
        // Добави повече продукти, ако е необходимо
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
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); // Сериализиране на данните
}
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Десериализиране на данните
}
function updateLocalStorage(key, newValue) {
    saveToLocalStorage(key, newValue); // Просто повикаме функцията за запис
}
function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
function clearLocalStorage() {
    localStorage.clear();
}
// Добавяне на продукт в любими
function toggleFavorite(productId) {
    let favorites = getFromLocalStorage('favorites') || [];
    
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId); // Премахване от любими
        alert('Продуктът е премахнат от любимите!');
    } else {
        favorites.push(productId); // Добавяне в любими
        alert('Продуктът е добавен в любимите!');
    }
    
    saveToLocalStorage('favorites', favorites); // Запазваме актуализирания списък
}

// Извеждане на любимите продукти
function loadFavorites() {
    const favorites = getFromLocalStorage('favorites') || [];
    const favoritesList = document.getElementById('favorites-list');

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>Нямате любими продукти.</p>';
        return;
    }

    favorites.forEach(productId => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<p>Продукт ID: ${productId}</p>`;
        favoritesList.appendChild(productElement);
    });
}

// Пример за добавяне на бутон за любими
<button onclick="toggleFavorite('1')">Добави в любими</button>
