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
    // Styles CSS
    echo '<style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
                margin: 0;
                background-color: #1b292e;
                color: white;
                font-size: 18px;
                text-align: center;
                font-family: Tahoma, Geneva, sans-serif;

            }
            img {
                max-width: 100%;
                height: auto;
                margin-bottom: 30px;
            }
            a {
                color: #ffde01;
                text-decoration: none;
                font-weight: bold;
                font-family: Tahoma, Geneva, sans-serif;
            }
          </style>';

    // Affichage de l'image
    echo '<img src="../images/JD_logo_yellow.png" alt="Julien-David">';

    // Affichage du message de confirmation
    echo "<p>Votre message a été envoyé avec succès</p>";

    // Lien de retour au site
    echo '<a href="https://julien-david.com">Retour sur le site</a>';
} else {
    echo "Erreur lors de l'envoi de l'e-mail.";
}
?>
