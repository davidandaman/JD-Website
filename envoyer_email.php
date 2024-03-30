<?php
// Destinataire
$to = "
contact@julien-david.com";

// Sujet de l'e-mail
$subject = "Test d'envoi d'e-mail";

// Contenu de l'e-mail
$message = "Ceci est un message de test pour vérifier l'envoi d'e-mail via PHP.";

// En-têtes de l'e-mail
$headers = "From: contact@julien-david.com" . "\r\n" .
           "Reply-To: contact@julien-david.com" . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Envoi de l'e-mail
if (mail($to, $subject, $message, $headers)) {
    echo "L'e-mail a été envoyé avec succès à $to";
} else {
    echo "Erreur lors de l'envoi de l'e-mail.";
}
?>
