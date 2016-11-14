<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['price-name'])) {$name = $_POST['price-name'];}
    if (isset($_POST['price-email'])) {$email = $_POST['price-email'];}
    if (isset($_POST['price-tel-country'])) {$telCountry = $_POST['price-tel-country'];}
    if (isset($_POST['price-tel-operator'])) {$telOperator = $_POST['price-tel-operator'];}
    if (isset($_POST['price-tel-number'])) {$telNumber = $_POST['price-tel-number'];}
    if (isset($_POST['price-file-1'])) {$file1 = $_POST['price-file-1'];}
    if (isset($_POST['price-file-2'])) {$file2 = $_POST['price-file-2'];}
    if (isset($_POST['price-file-3'])) {$file3 = $_POST['price-file-3'];}
    if (isset($_POST['price-file-4'])) {$file4 = $_POST['price-file-4'];}


    $to = "amgcollisioncenter@gmail.com".",support@dev-itech.com";
    $sendfrom   = "body-shop";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "$formData";
    $message = "$formData <br><b>You get order! </b> <br> <b>Client`s name:</b> $name <br><b>Client email:</b>
  $email <br> <b>Phone number:</b> $telCountry &nbsp;( $telOperator )&nbsp; $telNumber <br>
  Photo1: $file1<br>
  Photo2: $file2<br>
  Photo3: $file3<br>
  Photo4: $file4<br>";
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