<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['modal-name'])) {$name = $_POST['modal-name'];}
    if (isset($_POST['modal-email'])) {$email = $_POST['modal-email'];}
    if (isset($_POST['modal-tel-country'])) {$telCountry = $_POST['modal-tel-country'];}
    if (isset($_POST['modal-tel-operator'])) {$telOperator = $_POST['modal-tel-operator'];}
    if (isset($_POST['modal-tel-number'])) {$telNumber = $_POST['modal-tel-number'];}

    $to = "amgcollisioncenter@gmail.com".",support@dev-itech.com";
    $sendfrom   = "body-shop"; 
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br><b>You get order! </b> <br> <b>Client`s name:</b> $name <br><b>Email address:</b> $email <br> <b>Phone number:</b> $telCountry &nbsp;( $telOperator )&nbsp; $telNumber";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo '<p class="success">Success!!!</p>';
    }
    else 
    {
    echo '<p class="fail"><b>Error!!!</b></p>';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>