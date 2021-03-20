<?php
include('baglanti.php');
include('php_fonksiyonlari.php');

$gonderen = $_POST['gonderen'];
$alici = $_POST['alici'];
$mesaj = $_POST['mesaj'];

$table_adi_1 = $gonderen."_".$alici; 
$table_adi_2 = $alici."_".$gonderen; 

if(tablo_varmi($db,$table_adi_1) == 1){
    $ekle = $db->prepare("INSERT INTO $table_adi_1  SET gonderen=?, alici=?, mesaj = ?");
    $ekle->execute([$gonderen , $alici, $mesaj]);
}else{
    $ekle = $db->prepare("INSERT INTO $table_adi_2  SET gonderen=?, alici=?, mesaj = ?");
    $ekle->execute([$gonderen , $alici, $mesaj]);

}






?>