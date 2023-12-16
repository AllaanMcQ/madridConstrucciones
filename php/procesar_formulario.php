<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destino = "formularios@madridconstrucciones.cl"; // Reemplaza con tu dirección de correo
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $asunto = $_POST["subject"];
    $mensaje = $_POST["message"];

    $contenido = "Nombre: $nombre\nEmail: $email\nAsunto: $asunto\nMensaje: $mensaje";

    // Configurar encabezados
    $headers = "From: formulario@madridconstrucciones.cl\r\n";
    $headers .= "Return-Path: formulario@madridconstrucciones.cl\r\n";
    $headers .= "Sender: formulario@madridconstrucciones.cl\r\n";

    // Enviar correo
    mail($destino, "Mensaje de Contacto", $contenido, $headers);

    // Redirige de nuevo a tu página después de enviar el formulario
    header("Location: https://madridconstrucciones.cl/");
    exit;
}

?>
