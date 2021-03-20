<?php

$arkadaslar = "soner,mehmet,veli,deneme,deneme2";
$count= 0;
$uzunluk = strlen($arkadaslar);

$arkaslari = array();
$sira  =0 ;
$kelime = "";
while($count < $uzunluk){
    while($count < $uzunluk && $arkadaslar[$count] != "," ){
        $kelime .= $arkadaslar[$count];
        $count++;
    }
    $count++;
    $arkaslari[$sira] = $kelime;
    $kelime = "";
    $sira++;
}
echo $arkaslari[1];


?>