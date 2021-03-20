<?php
include("baglanti.php");
$eklenecek_kisi = $_POST['eklenecek_kisi'];
$kime_eklenecek  = $_POST['kime_eklenecek'];


$veri = $db->query("select * from kullaniciler where kullanici_adi='$eklenecek_kisi'")->fetch();

include("php_fonksiyonlari.php");
$arkadaslari = array();
$arkadaslari = arkadas_ver($veri['arkadaslar']);
$count = 0;
$uzunluk = count($arkadaslari);
$eklimi = 0;
while($count < $uzunluk){
    if(strcasecmp($arkadaslari[$count],$kime_eklenecek) == 0){
        $eklimi = 1;
        break;
    }
    $count++;
}
if($eklimi == 0){

    if(strlen($veri['arkadaslar'])> 0){
        $onceki_arkadaslar = $veri['arkadaslar'];
        $onceki_arkadaslar .= ",";
        $onceki_arkadaslar .= $kime_eklenecek ; 
    }else{
        $onceki_arkadaslar = "";
        $onceki_arkadaslar .= $kime_eklenecek ; 
    }
    $uptade  = $db->prepare("UPDATE kullaniciler SET arkadaslar=:oncekiler WHERE kullanici_adi=:adi");
    $uptade_bilgi = $uptade->execute([":oncekiler"=>$onceki_arkadaslar,":adi"=>$eklenecek_kisi]);   
    
    $veri = $db->query("select * from kullaniciler where kullanici_adi='$kime_eklenecek'")->fetch();
    $arkadaslari = array();
    $arkadaslari = arkadas_ver($veri['arkadaslar']);
    $count = 0;
    $uzunluk = count($arkadaslari);
    if(strlen($veri['arkadaslar'])> 0){
        $onceki_arkadaslar = $veri['arkadaslar'];
        $onceki_arkadaslar .= ",";
        $onceki_arkadaslar .= $eklenecek_kisi ; 
    }else{
        $onceki_arkadaslar = "";
        $onceki_arkadaslar .= $eklenecek_kisi ; 
    }
    $uptade  = $db->prepare("UPDATE kullaniciler SET arkadaslar=:oncekiler WHERE kullanici_adi=:adi");
    $uptade_bilgi = $uptade->execute([":oncekiler"=>$onceki_arkadaslar,":adi"=>$kime_eklenecek]);   




    //yeni mesajlaşacak kişiler tablosu oluşturma.
    $yeni_tablo_adi = $eklenecek_kisi."_".$kime_eklenecek;
    $db->exec("CREATE TABLE $yeni_tablo_adi (
        gonderen VARCHAR(30) NOT NULL,
        alici VARCHAR(30) NOT NULL,
        mesaj VARCHAR(30) NOT NULL,
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY
        )");
        echo "Arkadaşınız başarıyla eklendi.";
}else{
    echo "Böyle bir arkadaşınız zaten var.";
}


//diğer arkadaşa'da ekleme yapılmalıdır.













?>