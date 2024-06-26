<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $contactNumber = $_POST['contactNumber'];
    $email = $_POST['email'];
    $class = $_POST['class'];
    $message = $_POST['message'];

    // Email configuration
    $to = "admission@pnclasses.in";
    $subject = "New Enrollment Form Submission";
    $body = "Name: $name\nContact Number: $contactNumber\nEmail: $email\nClass: $class\nMessage: $message";

    // Send email using PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your@example.com'; // Replace with your SMTP username
        $mail->Password = 'your_password'; // Replace with your SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587; // Change to your SMTP port if needed

        // Recipients
        $mail->setFrom('your@example.com', 'Your Name');
        $mail->addAddress($to);

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        echo "Thank you! Your enrollment form has been submitted successfully.";
    } catch (Exception $e) {
        echo "Failed to submit enrollment form. Error: {$mail->ErrorInfo}";
    }
}
?>
