/* 
Oyun başlamadan once bilgisayar oyuncularının taşları per ollarak ayrılmalıdırlar.
*/

//player2 için düzenlemeler
player_2 = tasi_renklere_gore_ayir(player_2);
player_2 = renklerine_gore_ayrilmis_eli_sirala(player_2);

var player_2_taslari_duzenli = ardisik_perler_bul(player_2,0,player_2_per_olanlar,player_2_per_olmayanlar); // geri dönüş olarak iki boyutlu bir dizi döneriyor. ilki per olanlar ikincisi ise per olmayanları döndermekte.
player_2_per_olanlar = player_2_taslari_duzenli[0];
player_2_per_olmayanlar = player_2_taslari_duzenli[1];
//Buraya kadar sadece artan sıradaki perler bulundu, per olmayanların içerisinde ek olarak aynı sayıda farklı renkler varmı diye kontrol ediliyor.


player_2_taslari_duzenli = per_olmayanlarda_per_ara(player_2_per_olanlar,player_2_per_olmayanlar); // artık onceden per_olanlara eklenme yapılıyor ve geri dönüşte per olanlar ve olmayanlar ekrana yazdırılıyor.
player_2_per_olanlar =player_2_taslari_duzenli[0];
player_2_per_olmayanlar = player_2_taslari_duzenli[1];
player_2_per_puani = per_olanlarin_sayisini_bul(player_2_per_olanlar);

console.log(player_2_per_olanlar);
console.log(player_2_per_olmayanlar);
console.log(per_olanlarin_sayisini_bul(player_2_per_olanlar));


//player3 için düzenlemeler
player_3 = tasi_renklere_gore_ayir(player_3);
player_3 = renklerine_gore_ayrilmis_eli_sirala(player_3);

var player_3_taslari_duzenli = ardisik_perler_bul(player_3,0,player_3_per_olanlar,player_3_per_olmayanlar); // geri dönüş olarak iki boyutlu bir dizi döneriyor. ilki per olanlar ikincisi ise per olmayanları döndermekte.
player_3_per_olanlar = player_3_taslari_duzenli[0];
player_3_per_olmayanlar = player_3_taslari_duzenli[1];
//Buraya kadar sadece artan sıradaki perler bulundu, per olmayanların içerisinde ek olarak aynı sayıda farklı renkler varmı diye kontrol ediliyor.


player_3_taslari_duzenli = per_olmayanlarda_per_ara(player_3_per_olanlar,player_3_per_olmayanlar); // artık onceden per_olanlara eklenme yapılıyor ve geri dönüşte per olanlar ve olmayanlar ekrana yazdırılıyor.
player_3_per_olanlar =player_3_taslari_duzenli[0];
player_3_per_olmayanlar = player_3_taslari_duzenli[1];
player_3_per_puani = per_olanlarin_sayisini_bul(player_3_per_olanlar);



console.log("3.oyuncu bilgileri.");
console.log(player_3_per_olanlar);
console.log(player_3_per_olmayanlar);
console.log(per_olanlarin_sayisini_bul(player_3_per_olanlar));




//player4 için düzenlemeler
player_4 = tasi_renklere_gore_ayir(player_4);
player_4 = renklerine_gore_ayrilmis_eli_sirala(player_4);

var player_4_taslari_duzenli = ardisik_perler_bul(player_4,0,player_4_per_olanlar,player_4_per_olmayanlar); // geri dönüş olarak iki boyutlu bir dizi döneriyor. ilki per olanlar ikincisi ise per olmayanları döndermekte.
player_4_per_olanlar = player_4_taslari_duzenli[0];
player_4_per_olmayanlar = player_4_taslari_duzenli[1];
//Buraya kadar sadece artan sıradaki perler bulundu, per olmayanların içerisinde ek olarak aynı sayıda farklı renkler varmı diye kontrol ediliyor.


player_4_taslari_duzenli = per_olmayanlarda_per_ara(player_4_per_olanlar,player_4_per_olmayanlar); // artık onceden per_olanlara eklenme yapılıyor ve geri dönüşte per olanlar ve olmayanlar ekrana yazdırılıyor.
player_4_per_olanlar =player_4_taslari_duzenli[0];
player_4_per_olmayanlar = player_4_taslari_duzenli[1];
player_4_per_puani = per_olanlarin_sayisini_bul(player_4_per_olanlar);



console.log("4.oyuncu bilgileri.");
console.log(player_4_per_olanlar);
console.log(player_4_per_olmayanlar);
console.log(per_olanlarin_sayisini_bul(player_4_per_olanlar));



/*
Oyun baslat fonksiyonumun amacı oyuncu1'in dışında başlayan oyuncunun ilk fonksiyonlarını vererek oyunun oyuncu_1'e kadar gelmesini sağlamak.
oyuncu 1'e oyun geldikten sonra oyuncu bir her taş attığında farklı bir fonksiyona atıf yapacak ve bu atıf sonucu diğer 3 oyuncu oyuncu başı 6 saniyelik aralarla taş atıp tekrar oyunu oyuncu 1'e getirecektir.
Devamında bu bir döngü şeklinde birisi bitene kadar veyahutta yerdeki taşlar bitene kadar devam edecektir.

*/
function oyun_baslat(){
    if(oyuna_kim_baslayacak == 0){
        //player_1 oyuna başlayacak demektir.
        alert("Sıra sizde lütfen taş çekiniz. ");



    }else if(oyuna_kim_baslayacak == 1){
        var yeni_tas_duzeni = hangi_tasi_atalim(player_2_per_olmayanlar);
        player_2_per_olmayanlar = yeni_tas_duzeni[0];
        var atilan_tas = yeni_tas_duzeni[1];
        tas_cekme(2);
        setTimeout(function(){ tas_atma(2,atilan_tas); }, 800);
        setTimeout(function(){ tas_cekme(3); }, 1600);
        setTimeout(function(){ 
            var yeni_tas_duzeni = hangi_tasi_atalim(player_3_per_olmayanlar);
            var atilan_tas = yeni_tas_duzeni[1];
            player_3_per_olmayanlar = yeni_tas_duzeni[0];
            tas_atma(3,atilan_tas); 
        }, 3300);
        setTimeout(function(){ tas_cekme(4); }, 4100);
        setTimeout(function(){ 
            var yeni_tas_duzeni = hangi_tasi_atalim(player_4_per_olmayanlar);
            var atilan_tas = yeni_tas_duzeni[1];
            player_4_per_olmayanlar = yeni_tas_duzeni[0];
            tas_atma(4,atilan_tas); 
        }, 4900);





    }else if(oyuna_kim_baslayacak == 2){
        var yeni_tas_duzeni = hangi_tasi_atalim(player_3_per_olmayanlar);
        player_3_per_olmayanlar = yeni_tas_duzeni[0];
        var atilan_tas = yeni_tas_duzeni[1];
        tas_atma(3,atilan_tas); //
        setTimeout(function(){ tas_cekme(4); }, 2000);
        setTimeout(function(){ 
            var yeni_tas_duzeni = hangi_tasi_atalim(player_4_per_olmayanlar);
            var atilan_tas = yeni_tas_duzeni[1];
            player_4_per_olmayanlar = yeni_tas_duzeni[0];
            tas_atma(4,atilan_tas); 
        }, 1100);



    }else {
        //oyuna dorduncu oyuncu başlayacaktır burada ilk olarak hani taşı atacağımızı bulup, per olmayanlar taşların içerisindende atacağımız taş çıkartamamız gerekir.
        var yeni_tas_duzeni = hangi_tasi_atalim(player_4_per_olmayanlar);
        player_4_per_olmayanlar = yeni_tas_duzeni[0];
        var atilan_tas = yeni_tas_duzeni[1];
        tas_atma(4,atilan_tas);
    }
}
oyun_baslat();

function bilgisayarlara_oynat(){
    tas_cekme(2);
    var cekilen_tas = yerdeki_taslar[yerdeki_taslar.length-1];
    
}