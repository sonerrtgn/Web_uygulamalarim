<?php

/**
 * Sistemi denemek veya kurmak için bir database açıp ismini $dbname değişkenine yazınız.
 * Açmış olduğunuz database'ye kullaniciler adinda bir tablo oluşturunuz:
 * Açtığınız kullanicilar tablosunu 6 kolonlu oluşturunuz 
 * 1.kolon adi, 2.kolon soyadi, 3.kolon kullanici_adi, 4.kolon e_posta, 5.kolon sifre ve 6.kolon ise id olmalıdır, id'nin dışındakilerin hepsinin
 * türü text, id nin ise türü int ve AUTO_INCREMENT seçeneğinin açılmış  olması gerekmektedir.
 * Bu değişiklikleri yaptıktan sonra sisteminiz üzerinde deneyebilir, istediğiniz kısımları değiştirebilirsiniz.
 */
$dbhost= 'localhost';
$dbname = 'sohbet_vol1';
$dbuser = 'root';
$dbpassword = '';

$db = new PDO("mysql:host=$dbhost;dbname=$dbname;",$dbuser,$dbpassword);

?>
