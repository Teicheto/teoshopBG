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
