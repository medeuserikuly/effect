<?php

/* https://api.telegram.org/bot6367743977:AAG51tlQXpnvk80TUXPPpWqBlvAD-hHAqek/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
// $email = $_POST['user_email'];
$token = "6367743977:AAG51tlQXpnvk80TUXPPpWqBlvAD-hHAqek";
$chat_id = "-696876823";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "ErrorErrorErrorError";
// }
?>