<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '/PHPMailer/src/Exception.php';
    require '/PHPMailer/src/PHPMailer.php';
    require '/PHPMailer/src/SMTP.php';


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



    // ----- phpMailer

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    // $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';                           // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'aleks_nikulin@mail.ru';                 // SMTP username
    $mail->Password = 'skippi222';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('aleks_nikulin@mail.ru', 'Mailer');
    $mail->addAddress('aleks.nikulin@gmail.com', 'Joe User');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('aleks.nikulin@gmail.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('img/burgers/burger_black.png');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заказ';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $data = ;
    if ($mail->send()) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else {
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);

//     $mail->send();
//     echo 'Message has been sent';
// } catch (Exception $e) {
//     echo 'Message could not be sent.';
//     echo 'Mailer Error: ' . $mail->ErrorInfo;
// }

// -------------------



    // $mail_message = '
    // <html>
    //     <head>
    //         <title>Заявка</title>
    //     </head>
    //     <body>
    //         <h2>Заказ</h2>
    //         <ul>
    //             <li>Имя:' . $name . '</li>
    //             <li>Телефон:' . $phone . '</li>
    //             <li>Улица:' . $street . '</li>
    //             <li>Дом:' . $house . '</li>
    //             <li>Корпус:' . $block . '</li>
    //             <li>Квартира:' . $apart . '</li>
    //             <li>Этаж:' . $floor . '</li>
    //             <li>Комментарий:' . $comment . '</li>
    //             <li>' . $payment . '</li>
    //             <li>Не перезванивать:' . $disturb . '</li>
    //         </ul>
    //     </body>
    // </html> ';

    // echo $mail_message;

    // $headers = "From: Администратор сайта <aleks_nikulin@mail.ru>\r\n".
    // "MIME-Version: 1.0" . "\r\n" .
    // "Content-type: text/html; charset=UTF-8" . "\r\n";
    // $mail = mail('aleks.nikulin@gmail.com', 'Заказ', $mail_message, $headers);

    // if ($mail) {
    //     echo 'done';
    // }else{
    //     echo 'error';
    // }


    // $data = ;

    //  if ($mail) {
    //     $data['status'] = "OK";
    //     $data['mes'] = "Письмо успешно отправлено";
    // }else{
    //     $data['status'] = "NO";
    //     $data['mes'] = "На сервере произошла ошибка";
    // }
    // echo json_encode($data);
?>