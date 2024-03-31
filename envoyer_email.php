<?php
// Destinataire
$to = "contact@julien-david.com";

// Sujet de l'e-mail
$subject = "Formulaire de contact soumis";

// Récupération des données du formulaire
$firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
$lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$country = isset($_POST['country']) ? $_POST['country'] : '';
$message_content = isset($_POST['subject']) ? $_POST['subject'] : '';

// Construction du message
$message = "Prénom: $firstname\n";
$message .= "Nom: $lastname\n";
$message .= "Email: $email\n";
$message .= "Pays: $country\n\n";
$message .= "Message:\n$message_content";

// En-têtes de l'e-mail
$headers = "From: $email" . "\r\n" .
           "Reply-To: $email" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Envoi de l'e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "L'e-mail a été envoyé avec succès à $to";
} else {
    echo "Erreur lors de l'envoi de l'e-mail.";
}
?>
