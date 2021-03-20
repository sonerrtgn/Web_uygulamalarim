<?php
session_start();
if(isset($_SESSION['kullanici'])){

}else{
    header('Location: giris.php');
}

?>

<html>
    <head>
    <script src="jquery.js"></script> 

        <title>Hoş geldiniz.</title>
        <style>
            body{
                margin:0;
                background-color: darkgray;
            }
            .chat-mesaj::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #F5F5F5;
            }

            .chat-mesaj::-webkit-scrollbar {
            width: 6px;
            background-color: #F5F5F5;
            }

            .chat-mesaj::-webkit-scrollbar-thumb {
            background-color: #fc6023;
            }
            .chat{
                margin-top: 5%;
                width:60%;
                height:80%;
                float:left;
                margin-left: 10%;

            }
            .chat-mesaj{
                width:100%;
                height:80%;
                overflow-y: scroll;

            }
            .chat-mesaj-at{
                width:100%;
                height:18%;
                margin-top: 2%;
            }
            .mesaj-input{
                width:80%;
                height:80%;
                border-radius: 20px;
                border:none;
                margin-top: 1%;
                float:left;
            }
            .mesaj-gonder{
                width:15%;
                height:80%;
                margin-top: 1%;
                margin-left: 2%;
                float:left;
                font-size: 25px;
            }
            .gonderen{
                width:100%;
                height:15%;
            }
            .gonderen-adi{
                width:60%;
                height:40%;
                background-color:khaki;
            }
            .gonderen-mesaji{
                width:60%;
                height:58%;
                margin-top: 1%;
                background-color: khaki;
            }
            .alici{
                width:100%;
                height:15%;
                margin-top:5%;
            }
            .gonderen h4{
                color:red;
            }
            .gonderen h5{
                margin-top: 0;
            }
            .alici-adi{
                width:60%;
                height:40%;
                background-color:#B1D3E9;
                float:right;
            }
            .alici-mesaji{
                width:60%;
                height:58%;
                background-color: orchid;
                margin-top: 2%;
                float:right;
            }
            .alici h4{
                margin-top: 0;
                float:right;
            }
            .alici h5{
                margin-top: 0;
                float:right;
            }
            .yan-menu{
        width: 20%;
        height: 100%;
        background-color: moccasin;
        float:left;
    }
    .arkadas-ara{
        width:100%;
        height:10%;
    }
    .arkadas-ara-input{
        width:80%;
        height:80%;
        margin-top: 1%;
        border-radius: 25px;
        border:none;
        outline: none;
        text-align: center;
        font-size:25px

    }
    .arkadaslar{
        width:100%;
        height:10%;
    }
    .arkadas-foto{
        width:20%;
        height:80%;
        border-radius: 50%;
        background-color: dimgray;
        float:left;
        margin-left:5%;
        margin-top: 2.5%;
    }
    .arkadas-adi{
        width:70%;
        height:80%;
        float:left;
        margin-left: 5%;
        margin-top: 2.5%;
    }
    .arkadas-adi h2{
        margin-top:5%;
    }
    .arkadas-ara-sonuclari{
        position:absolute;
        width:18%;
        height:10%;
        background-color:#B1D3E9;
        margin-top:5%;
        margin-left:1%;
        display:none;
    }
            
        </style>
    </head>
    <body>

    <div class="arkadas-ara-sonuclari" id="arkadas-ara" onclick="arkadasi_ekle()">
        
    </div>

    <div>
        <div class="yan-menu" id="yan-menu">
            <div class="arkadas-ara">
                <input type="text" placeholder="Arkadaş Ekle" id ='arkadas_adi' class="arkadas-ara-input">
                <button onclick="arkadas_ara()">Ara</button>
            </div>

            <?php
                include('baglanti.php');
                include('php_fonksiyonlari.php');
                $kadi = $_SESSION['kullanici'];
                $veri = $db->query("select * from kullaniciler where kullanici_adi='$kadi'")->fetch();
                $bilgi = array();
                $bilgi = arkadas_ver($veri['arkadaslar']);
                $uzunluk = count($bilgi);
                $count = 0;
                echo "<script>var arkadasi_varmi = 1;</script>";
                if($uzunluk == 0){
                    echo "<h1>Mallesef hiç arkadaşınız yok yukarıdan arkadaş ekleyebilirsiniz.</h1>\n";
                    echo "<script> arkadasi_varmi = 0;</script>";
                }
                while($count<$uzunluk){
                    echo "<div class='arkadaslar' onclick='".$bilgi[$count]."()'> <div class='arkadas-foto'> </div> <div class='arkadas-adi'> <h2>".$bilgi[$count]."</h2></div></div>";
                    $count++;
                }
                echo "</div>";
                   

	
            ?>


        <div class="chat">
            <div class="chat-mesaj" id="mesaj">
                

            </div>
            <div class="chat-mesaj-at">
                <input type="text" class="mesaj-input" name="mesaj" id="mesaj_icerik"placeholder="Mesaj gönder">
                <input type="submit" class="mesaj-gonder" onclick="mesaj_gonder()">
            </div>
        </div>
    </div>

    <script>
        function yenile(){
            window.location.reload()
        }
        var oturum_sahibi = <?php  echo"\""; echo $_SESSION['kullanici']; echo"\";\n"; ?>
        var kisi_adi = "";
        var kimle_gorusuyor = "";
        var en_buyuk_id=0;
        /**
         * Mesajlari_guncelle sayfa açıldıktan sonra sürekli 5 saniyede bir yenilenmektedir.
         * Sayfa ilk açıldığında kimle_gorsuyuyor = "" olduğu için mesajları hiç yenilemiyor.
         * Sonrasında eğer bir kullanıcı seçilirse ondan sonraki her 5 saniye yeni mesaj varmı diye bakıyor.
         * Her yeni mesaj varmı baktıktan sonra son_id bilgisi güncellenmelidir, çünkü aldığımız yeni mesaj her 5 saniyede tekrar yazdırılacaktır.
         * alınan mesajı tekrar yazdırmamak için alınan mesajdan sonra id'de güncellenmelidir.
         */
        function mesajlari_guncelle(oturum_sahibi){
            if(kimle_gorusuyor != ""){// biriyle görüşüyorsa şahet mesajları yenilemelidir.
                    
                    $.ajax({
                        type:'POST',
                        url:'mesaj_guncelle.php',
                        data:{'ad':oturum_sahibi,'alici':kimle_gorusuyor,'buyuk_id':en_buyuk_id},
                        success: function(cevap){
                            document.getElementById('mesaj').innerHTML += cevap; 
                            //alert(cevap);
                        }
                    });
                    $.ajax({
                        type:'POST',
                        url:'en_buyuk_id_ver.php',
                        data:{'ad':oturum_sahibi,'alici':kimle_gorusuyor},
                        success: function(cevap){
                            en_buyuk_id =cevap;
                                    
                            }
                        });
            }
        }
        function mesaj_gonder(){
            var gonderen = "<?php  echo $_SESSION['kullanici']; ?>"; 
            var alici = kimle_gorusuyor;
            if(kimle_gorusuyor != ''){
                var mesaj_icerigi = document.getElementById("mesaj_icerik").value;
                document.getElementById('mesaj').innerHTML += " <div class='alici'><div class='alici-adi'><h4>"+"<?php echo $_SESSION['kullanici']; ?>"+"</h4></div><div class='alici-mesaji'><h5>"+mesaj_icerigi+"</h5></div></div>";  
                document.getElementById("mesaj_icerik").value = "";

                $.ajax({
                    type:'POST', 
                    url:'mesaj_gonder.php', 
                    data:{"gonderen":gonderen,"alici":alici,"mesaj":mesaj_icerigi}, 
                    success: function(cevap){
                    }
                });
            
            }else{
                alert('Konuşmak için arkadaşlarınızdan birini seçiniz.');
            }
        }
     
        function arkadas_ara(){
            document.getElementById('arkadas-ara').style.display = "block";
            var adi = document.getElementById('arkadas_adi').value;
            $.ajax({
                type:'POST', 
                url:'arkadas_ara.php', 
                data:{"ad":adi}, 
                success: function(cevap){
                    document.getElementById('arkadas-ara').innerHTML = "<div class='arkadas-foto'></div><div id='arkadas-adi' class='arkadas-adi'><h2>"+cevap+"</h2></div>";
                    kisi_adi = cevap;
                }
            });
        }

        function arkadasi_ekle(){
            var eklenecek_kisi_adi = document.getElementById("arkadas-adi").innerHTML;
            document.getElementById("arkadas-adi").innerHtml = "";
            $.ajax({
                type:'POST', 
                url:'arkadas_ekle.php', 
                data:{"eklenecek_kisi":"<?php echo $_SESSION['kullanici']; ?>","kime_eklenecek":kisi_adi}, 
                success: function(cevap){
                    if(cevap != "Böyle bir arkadaşınız zaten var."){
                        yenile();
                    } else{
                        alert(cevap);
                    }
                }
            });
            document.getElementById('arkadas-ara').style.display = "none";       
        }

        <?php
            $count = 0;

            while($count < $uzunluk ){
                        /* 
                        *Arkadaşları js fonksiyonu şeklinde yazdrılıyor, fonskiyonların amacı ilk mesajları 
                        *almak ve kullanıcının kime mesaj göndereceğini bilmesi için gerekli bilgileri değiştirmektedir.
                        */
echo "\n                function ".$bilgi[$count]."(){
                            kimle_gorusuyor ='".$bilgi[$count]."';
                            $.ajax({
                                type:'POST',
                                url:'mesaj_al.php',
                                data:{'ad':'".$_SESSION['kullanici']."','alici':'".$bilgi[$count]."'},
                                success: function(cevap){
                                    document.getElementById('mesaj').innerHTML = cevap; 
                                }
                            });
                            $.ajax({
                                type:'POST',
                                url:'en_buyuk_id_ver.php',
                                data:{'ad':oturum_sahibi,'alici':kimle_gorusuyor},
                                success: function(cevap){
                                    en_buyuk_id =cevap;
                                    
                                }
                            });
                        
                        }";
                $count++;
            }
            ?>

            function son_id(gonderen,alici){
                $.ajax({
                    type:'POST',
                    url:'en_buyuk_id_ver.php',
                    data:{'ad':gonderen,'alici':alici},
                    success: function(cevap){
                        en_buyuk_id = String(cevap);
                    }
                });
            }
            /*
            function mesaj_guncelle(gonderen,alici){
                //gonderen ile alici arasındaki mesajları 5 saniyede bir güncellemelidir.
                //Güncelleme bize gelen en büyük id'den büyük mesaj varsa göstermelidir.
                $.ajax({
                    type:'POST',
                    url:'mesaj_guncelle.php',
                    data:{'ad':gonderen,'alici':alici,'buyuk_id':en_buyuk_id},
                    success: function(cevap){
                        if(cevap.length > 0){
                            document.getElementById('mesaj').innerHTML += cevap;
                            son_id(gonderen,alici);
                        }
                    }
                });
            }
            */
            setInterval(mesajlari_guncelle,5000,<?php  echo"\""; echo $_SESSION['kullanici']; echo"\""; ?>);
    </script>
    </body>
</html>