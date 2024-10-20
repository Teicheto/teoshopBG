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
