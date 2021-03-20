<?php
include("baglanti.php"); 
$ad = $_POST['ad'];

$veri = $db->query("select * from kullaniciler where kullanici_adi='$ad'")->fetch();


if(strlen($veri['kullanici_adi']) > 0){
    echo $veri['kullanici_adi'];
}else{
    echo "Kullanici bulunamadi.";
}






?>