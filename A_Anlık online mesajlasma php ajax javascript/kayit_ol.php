<?php

$db = NEW PDO("mysql:host=localhost;dbname=sohbet_vol1","root","");
if(isset($_POST["ad"])){
    $adi = $_POST["ad"];
    $soyadi = $_POST["soyad"];
    $eposta = $_POST["eposta"];
    $sifre = $_POST["sifre"];
    $kadi = $_POST["kullaniciadi"];

    $ekle = $db->prepare("INSERT INTO kullaniciler  SET adi=?, soyadi=?,kullanici_adi = ?,eposta=?,sifre=?");
    $ekle->execute([$adi , $soyadi, $kadi,$eposta, $sifre]);
    header('Location: giris.php');
    echo "a";
}


?>
<html>
    <head>

    <title> Kayit olma</title>

    <style>
        body{
            margin:0px;
            background-color: darkgray;
        }
        .kayit_sekme{
            width:40%;
            height:70%;
            background-color: darkorchid;
            margin-left: 30%;
            margin-top: 7.5%;
        }
        .kayit_sekme input{
            width:50%;
            height:12%;
            border-radius: 20px;
            margin-left:25%;
            margin-top:3%;
            border: none;
            outline:none;
            background-color:orange;
            transition: 1s;
            text-align: center;
            font-size:20px;
        }
        .kayit_sekme input:hover{
            width:80%;
            margin-left: 10%;
        }
    </style>

    </head>
    <body>
        <div class="kayit_sekme">
            <form action="" method="POST">
                <input type="text" name="ad" placeholder="Adınızı giriniz">
                <input type="text" name="soyad" placeholder="Soyadınızı giriniz">
                <input type="text" name="kullaniciadi" placeholder="Kullanıcı adınızı giriniz">
                <input type="text" name="eposta" placeholder="Eposta giriniz.">
                <input type="text" name="sifre" placeholder="Şifre Giriniz.">
                <input type="submit">
            </form>
        </div>

    </body>
</html>