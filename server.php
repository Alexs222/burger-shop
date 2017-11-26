<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['user-street'];
    $house = $_POST['user-house'];
    $block = $_POST['user-block'];
    $apart = $_POST['user-apart'];
    $floor = $_POST['user-floor'];
    $comment = $_POST['comment'];
    $payment =$_POST['payment'];

    $disturb = $_POST['callback']; //1 или null
    $disturb = isset($disturb) ? 'ДА' : 'НЕТ';

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя:' . $name . '</li>
                <li>Телефон:' . $phone . '</li>
                <li>Улица:' . $street . '</li>
                <li>Дом:' . $house . '</li>
                <li>Корпус:' . $block . '</li>
                <li>Квартира:' . $apart . '</li>
                <li>Этаж:' . $floor . '</li>
                <li>Комментарий:' . $comment . '</li>
                <li>' . $payment . '</li>
                <li>Не перезванивать:' . $disturb . '</li>
            </ul>
        </body>
    </html> ';

    // echo $mail_message;

    $headers = "From: Администратор сайта <aleks_nikulin@mail.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('aleks.nikulin@gmail.com', 'Заказ', $mail_message, $headers);

    // $headers = "From: Никулин Алехандер <aleks_nikulin@mail.ru>\r\n".
    // "MIME-Version: 1.0" . "\r\n" .
    // "Content-type: text/html; charset=UTF-8" . "\r\n";

    // $mail = mail('aleks_nikulin@mail.ru', 'Заказ', $mail_message, $headers);

    if ($mail) {
        echo 'done';
    }else{
        echo 'error';
    }


    // $data =[]''

    //  if ($mail) {
    //     $data['status'] = "OK";
    //     $data['mes'] = "Письмо успешно отправлено";
    // }else{
    //     $data['status'] = "NO";
    //     $data['mes'] = "На сервере произошла ошибка";
    // }
    // echo json_encode($data);
?>