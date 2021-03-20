<?php
include('baglanti.php');
include("php_fonksiyonlari.php");
$gonderen = $_POST["ad"];
$alici = $_POST['alici'];

$table_adi_1 = $gonderen."_".$alici;
$table_adi_2 = $alici."_".$gonderen;



if(tablo_varmi($db,$table_adi_1) == 1){
    $sorgu = $db->prepare("SELECT COUNT(*) FROM $table_adi_1");
    $sorgu->execute();
    $count = $sorgu->fetchColumn();
    if($count >15){
        $count = $count-15;
    }else{
        $count = 1;
    }
    $bilgi = $db->query("SELECT * from $table_adi_1 where id=$count")->fetch();
    while(strlen($bilgi['gonderen']) > 0){
        
        if(strcmp ( $gonderen , $bilgi['gonderen'] ) ==0 ){
            echo "<div class='alici'>
                    <div class='alici-adi'><h4>".$gonderen."</h4></div>
                    <div class='alici-mesaji'>".$bilgi['mesaj']."</div>
                    </div>";
        }else{ //burdaki mesajlar mesaj guncelleme için bakılmalıdır.
            echo "<div class='gonderen'> 
            <div class='gonderen-adi'><h4>".$alici."</h4></div>
            <div class='gonderen-mesaji'>".$bilgi['mesaj']."</div>
            </div>";
        }
        $count++;
        $bilgi = $db->query("SELECT * from $table_adi_1 where id=$count")->fetch();
    }
    
}else if(tablo_varmi($db,$table_adi_2) == 1){
    $sorgu = $db->prepare("SELECT COUNT(*) FROM $table_adi_2");
    $sorgu->execute();
    $count = $sorgu->fetchColumn();
    if($count >15){
        $count = $count-15;
    }else{
        $count = 1;
    }
    $bilgi = $db->query("SELECT * from $table_adi_2 where id=$count")->fetch();

    while(strlen($bilgi['gonderen']) > 0){
        if(strcmp ( $gonderen , $bilgi['gonderen'] ) ==0 ){
            echo "<div class='alici'>
                    <div class='alici-adi'><h4>".$gonderen."</h4></div>
                    <div class='alici-mesaji'>".$bilgi['mesaj']."</div>
                    </div>";
        }else{
            echo "<div class='gonderen'>
            <div class='gonderen-adi'><h4>".$alici."</h4></div>
            <div class='gonderen-mesaji'>".$bilgi['mesaj']."</div>
            </div>";
        }
        $count++;
        $bilgi = $db->query("SELECT * from $table_adi_2 where id=$count")->fetch();
    }

}


?>