<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Set your email address
    $to_email = "fictionmaster.in@gmail.com";
    $subject = "New Quote Request from Website";

    // Collect and sanitize form data
    $name = htmlspecialchars(strip_tags($_POST['name'] ?? ''));
    $email = htmlspecialchars(strip_tags($_POST['email'] ?? ''));
    $mobile = htmlspecialchars(strip_tags($_POST['mobile'] ?? ''));
    $service = htmlspecialchars(strip_tags($_POST['service'] ?? ''));
    $message = htmlspecialchars(strip_tags($_POST['message'] ?? ''));

    // Validate inputs
    if (empty($name) || empty($email) || empty($mobile) || empty($service) || empty($message)) {
        die("Please fill all required fields.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Create email headers
    $headers = "From: Fiction Master <no-reply@fictionmaster.in>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Create email content
    $email_content = "
    <html>
    <head>
        <title>$subject</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4e73df; color: white; padding: 10px; text-align: center; }
            .content { padding: 20px; }
            .footer { margin-top: 20px; font-size: 0.9em; color: #666; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Quote Request</h2>
            </div>
            <div class='content'>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Mobile:</strong> $mobile</p>
                <p><strong>Service:</strong> $service</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br($message) . "</p>
            </div>
            <div class='footer'>
                <p>This request was submitted through your website's quote form.</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Send email
    if (mail($to_email, $subject, $email_content, $headers)) {
        // Redirect to thank you page or display success message
        echo "Your message has been sent successfully!";
        exit;
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

} else {
    // Accessed without submitting the form
    echo "Invalid request.";
}
?>