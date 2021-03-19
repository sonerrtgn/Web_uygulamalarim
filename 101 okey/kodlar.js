class tas{
    constructor(color,number){
        this.sahtemi = 0;
        this.color = color;
        this.number  = number;
        if(color == "sahte"){
            this.sahtemi = 1;
        }
    }
    get_color(){
        return this.color;
    }
    get_number(){
        return this.number;
    }
    get_sahtemi(){
        return this.sahtemi;
    }
    set_number(new_number){
        this.number = new_number;
    }
    set_color(new_color){
        this.color = new_color;
    }
}
var taslar = new Array();

var player_1 = new Array();
/*
Per puanlarinin her adımda takip edilmesi gerekiyor eğer atılan taş perlerimizde işimize yarıyorsa ve per puanimizi 101'den fazla yapıyorsa o taşı almamız gerekmektedir.

*/


var player_2 = new Array();
var player_2_per_olanlar = new Array();
var player_2_per_olmayanlar = new Array();
var player_2_per_puani = 0; 


var player_3 = new Array();
var player_3_per_olanlar = new Array();
var player_3_per_olmayanlar = new Array();
var player_3_per_puani = 0; 


var player_4 = new Array();
var player_4_per_olanlar = new Array();
var player_4_per_olmayanlar = new Array();
var player_4_per_puani = 0; 

var player_1_actimi = 0;
var player_2_actimi = 0;
var player_3_actimi = 0;
var player_4_actimi = 0;



/*,
playerler'in attıkları taşları 2'li dizi olarak temsil edebiliriz, çünkü eğer attığımız taşı alırlarsa bir önceki taşın görünmesi yeterli, diğer atılan taşlar için hafızayı kullanmaya gerek yok.
*/

var player_1_atilan_tas= [undefined,undefined];
var player_2_atilan_tas= [undefined,undefined];
var player_3_atilan_tas= [undefined,undefined];
var player_4_atilan_tas= [undefined,undefined];



var yerdeki_taslar = new Array();
var hangi_tas_okey;

var oyuna_kim_baslayacak = 0;

var oyun_sirasi_takip_etme = 0; // 0->player_1 temsil etmektedir.





//Taşlar sadece renk sırasına göre oluşturulur.
function tas_olustur(){
    //color = kırmızı
    var count = 1;
    while(count <14){
        var yeni_tas = new tas("red",count)
        taslar.push(yeni_tas);
        taslar.push(yeni_tas);

        count++;
    }
    count = 1;
    while(count <14){
        var yeni_tas = new tas("black",count)
        taslar.push(yeni_tas);
        taslar.push(yeni_tas);

        count++;
    }
    count = 1;
    while(count <14){
        var yeni_tas = new tas("blue",count)
        taslar.push(yeni_tas);
        taslar.push(yeni_tas);

        count++;
    }
    count = 1;
    while(count <14){
        var yeni_tas = new tas("yellow",count)
        taslar.push(yeni_tas);
        taslar.push(yeni_tas);

        count++;
    }

    taslar.push(new tas("sahte",0));
    taslar.push(new tas("sahte",0));
}
function tas_karistir(){
    // taslar oluşturulduktan sonra tas yerleri her oyuncuya farklı gitmesi için karıştırılıyor.
    var count = 0;
    while(count < 100){
        var degisim_sirasi = Math.floor(Math.random() * 106) ;
        var koruma = taslar[count]
        taslar[count] = taslar[degisim_sirasi];
        taslar[degisim_sirasi] = koruma;
        count++;
    }
    // son tas okey olarak aliniyor.
    var okey_tas_sirasi = taslar.length-1;
    var koruma = taslar[okey_tas_sirasi];

    //-5'inci sıradaki sahte ise sıkıntı olmuştur başka bir sıralama yapılması lazımdır hata x01

    taslar[okey_tas_sirasi] = taslar[okey_tas_sirasi-5];
    taslar[okey_tas_sirasi-5] = koruma;
    hangi_tas_okey = taslar[okey_tas_sirasi];
    taslar.pop();
    document.getElementById("okey_ne").innerHTML = tas_to_grafik(hangi_tas_okey);
    console.log(hangi_tas_okey);
    console.log(taslar.length);
    count = 0;
    uzunluk = taslar.length;
    while(count < uzunluk){
        if(taslar[count].get_color() == "sahte"  ){
            taslar[count].set_number(hangi_tas_okey.get_number() +1 );
            taslar[count].set_color(hangi_tas_okey.get_color());
        }
        count++;
    }
}
function taslar_oyunculara_ata(){
    var oyuna_kim_baslasin = Math.floor(Math.random() *4);
    var count = 0;
    var sira = 0;
    while(count < 21){
        if(taslar[sira] != undefined){
            player_1.push(taslar[sira]);
            count++;
            sira++;
        }else{
            sira++;
        }
    }
    count = 0;
    while(count < 21){
        if(taslar[sira] != undefined){
            player_2.push(taslar[sira]);
            count++;
            sira++;
        }else{
            sira++;
        }
    }
    count = 0;
    while(count < 21){
        if(taslar[sira] != undefined){
            player_3.push(taslar[sira]);
            count++;
            sira++;
        }else{
            sira++;
        }
    }
    count = 0;
    while(count < 21){
        if(taslar[sira] != undefined){
            player_4.push(taslar[sira]);
            count++;
            sira++;
        }else{
            sira++;
        }
    }
    oyuna_kim_baslayacak = oyuna_kim_baslasin;
    oyun_sirasi_takip_etme = oyuna_kim_baslasin;
    if(oyuna_kim_baslasin == 0){
        player_1.push(taslar[sira]);
    }else if(oyuna_kim_baslasin == 1){
        player_2.push(taslar[sira]);
    }else if(oyuna_kim_baslasin == 2){
        player_3.push(taslar[sira]);
    }else{
        player_4.push(taslar[sira]);
    }
    sira++;
    var tum_tas_uzunluk = taslar.length;
    while(sira < tum_tas_uzunluk){
        yerdeki_taslar.push(taslar[sira]);
        sira++;
    }
    document.getElementById("yerde_kac_tas_var").innerHTML = "<h5>"+yerdeki_taslar.length+"</h5>";

    var uzunluk = player_1.length;
    while(uzunluk < 28){
        player_1[uzunluk] = undefined;
        uzunluk++;
    }
    console.log(player_1)

}

function tas_to_grafik(tas){
    var yazi ="";
    if(tas !=undefined){
        yazi = "<h3 style='color:"+tas.get_color()+"'>"+tas.get_number()+"<h3>";
    }
    return yazi;
}
function tas_to_grafik_atilan(tas){
    var yazi ="";
    if(tas !=undefined){
        yazi = "<h1 style='color:"+tas.get_color()+"'>"+tas.get_number()+"<h1>";
    }
    return yazi;
}


function tas_to_grafik_sahte(tas){
    if(tas == undefined){
        return "";
    }
    var yazi = "<h3 style='color:"+tas.get_color()+"'>"+tas.get_number()+"<h3> <h6>Sahte</h6>";
    return yazi;
}
function player_1_tas_goster(player_1){
    var count = 0;
    var uzunluk = player_1.length;
    while(count< uzunluk){
        if(player_1[count]!= undefined &&  player_1[count].get_sahtemi() != 1){
            document.getElementById("player_"+count+"_tas").innerHTML= tas_to_grafik(player_1[count]);
        }else{
            document.getElementById("player_"+count+"_tas").innerHTML= tas_to_grafik_sahte(player_1[count]);
        }
        count++;

    }
    
}


tas_olustur();
tas_karistir();
taslar_oyunculara_ata();
//console.log(player_1);
console.log(player_2);
//console.log(player_3);
//console.log(player_4);
//console.log(taslar);
console.log("----")
player_1 = ilk_perleri_duzenle(player_1);
player_1_tas_goster(player_1);
player_1_per_hesapla();

//oyun_baslat();