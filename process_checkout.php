<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $address = $_POST['address'];

    $to = "teodorfilipov369@gmail.com";
    $subject = "Нова поръчка от Teo Shop";
    $message = "Име: $name\nТелефон: $phone\nГрад: $city\nАдрес: $address";
    $headers = "From: noreply@teoshop.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Данните са изпратени успешно!";
    } else {
        echo "Възникна грешка при изпращането на данните.";
    }
}
?>
