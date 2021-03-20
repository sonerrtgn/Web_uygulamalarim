<?php
if(isset($_POST['kadi'])){
    $vt = new PDO("mysql:host=localhost;dbname=sohbet_vol1","root","");
    $kadi = $_POST['kadi'];
    $sifre= $_POST['sifre'];
    $prepare = $vt->prepare("select * from kullaniciler where kullanici_adi=:kadi &&  sifre=:sifre");

    $prepare->execute(array("kadi" => $kadi,"sifre" => $sifre)); 


    if($prepare->rowCount() > 0) {
        session_start();
        $_SESSION['kullanici'] = $kadi;
        header('Location: index.php');
    }else{
        echo "<script>alert('Bilgileriniz eşleşmedi.')</script>";
    }

}

?>



<html>
    <head>
        <title>Giriş yapmak için hoş geldiniz</title>

        <style>
            .giris-yap{
                width:40%;
                height:40%;
                margin-left: 30%;
                margin-top: 15%;
                background-color:pink;
            }
            .kadi{
                width:50%;
                height:20%;
                border-radius:25px;
                margin-left:25%;
                margin-top:5%;
                border:none;
                outline:none;
                text-align:center;
                font-size:25px;
                transition:  1s;

            }
            .kadi:hover{
                width:90%;
                margin-left:5%;
            }
            .sifre{
                width:50%;
                height:20%;
                border-radius:25px;
                margin-left:25%;
                margin-top:5%;
                border:none;
                outline:none;
                text-align:center;
                font-size:30px;
                transition:  1s;

            }
            .sifre:hover{
                width:90%;
                margin-left:5%;
            }
            .submit{
                width:50%;
                height:20%;
                margin-top:5%;
                margin-left:25%;
                border-radius:25px;
                border:none;
                outline:none;
                text-align:center;
                font-size:30px;
                transition:1s;
            }
            .submit:hover{
                width:90%;
                margin-left:5%;
            }
        </style>
    </head>
    <body>
        <div class="giris-yap">
            <form action="" method="POST">
                <input type="text" name='kadi' class="kadi" id="kadi" placeholder="Kullanıcı adınız" >
                <input type="password"  class="sifre" id="sifre" name='sifre' placeholder="Sifre">
                <input type="submit" id="submit"  class="submit">
            </form>
        </div>

        <script>

            window.onkeydown = function(harf){
                var kadi = document.getElementById("kadi").value;
                var sifre = document.getElementById("sifre").value;


                if(kadi.length < 3){
                    document.getElementById("kadi").style.backgroundColor = "red";
                }else{
                    document.getElementById("kadi").style.backgroundColor = "white";
                }
                if(sifre.length < 3){
                    document.getElementById("sifre").style.backgroundColor = "red";
                }else{
                    document.getElementById("sifre").style.backgroundColor = "white";
                }
                if(kadi.length < 3 || sifre.length < 3){
                    document.getElementById("submit").style.backgroundColor = "red";

                }else{
                    document.getElementById("submit").style.backgroundColor = "white";

                }
            }
        </script>
    </body>
</html>