<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $city = htmlspecialchars($_POST['city']);
    $address = htmlspecialchars($_POST['address']);

    // Тук можеш да запазиш данните в база данни или да ги изпратиш по имейл
    $to = "teodorfilipov369@gmail.com"; // Заменете с вашия имейл
    $subject = "Нова поръчка от Teo Shop";
    $message = "Име: $name\nТелефон: $phone\nГрад: $city\nАдрес: $address";
    $headers = "From: no-reply@teoshop.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Поръчката е изпратена успешно!";
    } else {
        echo "Имаше проблем с изпращането на поръчката.";
    }
} else {
    echo "Неправилен метод за достъп.";
}
?>
