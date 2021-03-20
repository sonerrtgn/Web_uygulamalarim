<?php

include("baglanti.php");
include("php_fonksiyonlari.php");
$gonderen = $_POST["ad"];
$alici = $_POST['alici'];

$table_adi_1 = $gonderen."_".$alici;
$table_adi_2 = $alici."_".$gonderen;
$count = 1;

if(tablo_varmi($db,$table_adi_1) == 1){
    $bilgi = $db->query("SELECT * from $table_adi_1 where id=$count")->fetch();
    
    while(strlen($bilgi['gonderen']) > 0 ){
        $count++;
        $bilgi = $db->query("SELECT * from $table_adi_1 where id=$count")->fetch();
    }
    echo $count-1;
}else{

    $bilgi = $db->query("SELECT * from $table_adi_2 where id=$count")->fetch();
    
    while(strlen($bilgi['gonderen']) > 0 ){
        $count++;
        $bilgi = $db->query("SELECT * from $table_adi_2 where id=$count")->fetch();
    }
    echo $count-1;
}



?>