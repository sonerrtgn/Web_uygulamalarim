<?php

function arkadas_ver($girdi){
    $arkadaslar = array();
    $count = 0;
    $uzunluk = strlen($girdi);
    $kelime = "";
    $sira = 0;

    while($count < $uzunluk){
        while($count < $uzunluk  && $girdi[$count] !=","){
            $kelime .= $girdi[$count];
            $count++;
        }
        $count++;
        $arkadaslar[$sira]  = $kelime;
        $sira++;
        $kelime = "";

    }
    return $arkadaslar;
}
function tablo_varmi($db, $table) {
    try {
        $result = $db->query("SELECT 1 FROM $table LIMIT 1");
    } catch (Exception $e) {
        // We got an exception == table not found
        return FALSE;
    }
    return $result !== FALSE;
}

function riskli_karakter($girdi){
    // return 0 no risk
    // return -1 yes risk
    $a = "\"";
    $count = 0;
    $uzunluk = strlen($girdi);
    if($uzunluk <4){
        return -1;
    }
    while($count < $uzunluk){
        if(strcmp("'",$girdi[$count]) == 0){
            return -1;
        }
        if(strcmp("$",$girdi[$count]) == 0){
            return -1;
        }
        if(strcmp($a,$girdi[$count]) == 0){
            return -1;
        }
        $count++;
    }
    return 0;

}

?>