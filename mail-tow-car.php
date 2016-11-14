<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['tow-car-name'])) {$name = $_POST['tow-car-name'];}
    if (isset($_POST['tow-car-address'])) {$address = $_POST['tow-car-address'];}
    if (isset($_POST['tow-car-tel-country'])) {$telCountry = $_POST['tow-car-tel-country'];}
    if (isset($_POST['tow-car-tel-operator'])) {$telOperator = $_POST['tow-car-tel-operator'];}
    if (isset($_POST['tow-car-tel-number'])) {$telNumber = $_POST['tow-car-tel-number'];}

    $to = "amgcollisioncenter@gmail.com".",support@dev-itech.com";
    $sendfrom   = "body-shop";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br><b>You get order! </b> <br> <b>Client`s name:</b> $name <br><b>Client address:</b> $address <br> <b>Phone number:</b> $telCountry &nbsp;( $telOperator )&nbsp; $telNumber";
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