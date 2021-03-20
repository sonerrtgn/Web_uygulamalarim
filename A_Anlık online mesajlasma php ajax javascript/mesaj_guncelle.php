<?php
include('baglanti.php');
include("php_fonksiyonlari.php");
$gonderen = $_POST["ad"];
$alici = $_POST['alici'];
$en_buyuk_id= $_POST['buyuk_id'];

$table1 = $gonderen."_".$alici;
$table2 = $alici."_".$gonderen;
$count = (int)$en_buyuk_id+1;
if(tablo_varmi($db,$table1)){
    $bilgi = $db->query("SELECT * from $table1 where id=$count")->fetch();
    while(strlen($bilgi['gonderen']) > 0){
        if(strcmp($bilgi['gonderen'], $alici) == 0){
            echo "<div class='gonderen'>
            <div class='gonderen-adi'><h4>".$alici."</h4></div>
            <div class='gonderen-mesaji'>".$bilgi['mesaj']."</div>
            </div>";
        }
        $count++;
        $bilgi = $db->query("SELECT * from $table1 where id=$count")->fetch();
    }
}else{
    $bilgi = $db->query("SELECT * from $table2 where id=$count")->fetch();

    while(strlen($bilgi['gonderen']) > 0){
        if(strcmp($bilgi['gonderen'], $alici) == 0){
            echo "<div class='gonderen'>
            <div class='gonderen-adi'><h4>".$alici."</h4></div>
            <div class='gonderen-mesaji'>".$bilgi['mesaj']."</div>
            </div>";
        }
        $count++;
        $bilgi = $db->query("SELECT * from $table2 where id=$count")->fetch();
    }
}


?>