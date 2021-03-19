// coder by soner tugan.
//açıklamalar kodların anlaşılması ve kendini geliştirmek için bakanlara yol gösterici nitelikte hazırlanmıştır.
//-----Coding open Soner Tugan...
//level bilgisini yapıları kullanarak hesaplatmak için bir yapı paunı değişkeni oluşturuldu.
var yapi_puani=0;
//tıklanan nesneyi alabilmek için seciciyi genel bir değişken olarak fonksiyon dışında tanımladım.
var secici=0;
var obje_1_0 = document.getElementById("oyun-1-0");
var obje_1_1 = document.getElementById("oyun-1-1");

var toplam_saldiri_kazanma=0;
//toplam para için ayrı bir para değişkeni oluşturuyor. kazanan para tutulduğu için 0 ile başlıyor.
var toplam_para = 0;
// para tanımlanıyor ve ilk köy binası alacak kadar para aktarılıyor.
var para = 500;
//her yapı para hızını etkileyeceği için dışardan tanımlandı
var para_üretim_hizi=0;
//saldırı yüzdesi için genel bir saldırı yüzdesi tutucu ataması yapılıyor.
var saldiri_yüzde = 0;
//toplam yapı tutmak için bir genel değişken atanıyor.
var toplam_kurulan_yapi=0;

function saldir(){
    if((yapi_puani/4) >4){
        var saldir_kutu =document.getElementById("saldirma");
        saldir_kutu.style.display="inline";
        var saldir_kazanma=document.getElementById("kazanma-yuzdesi");
        var gelir=document.getElementById("kazanc");
        var kayip=document.getElementById("kayip");
        saldir_kazanma.innerHTML="<h4>Kazanma yuzdeniz: "+saldiri_yüzde+"</h4>";
        gelir.innerHTML="<h4>Kazanırsanız geliriniz: "+ Math.floor((yapi_puani/4)*225)+"</h4>";
        kayip.innerHTML="<h4>Kaybederseniz zararınız:" +Math.floor(((yapi_puani/4)*225)/2)+"</h4>"
    }
    else{
        alert("koy leveliniz en az 4 level olması gerekmektedir savaş yapabilmek için.");
    }
}
function saldiri_gerceklestir(){
    var saldir_kutu =document.getElementById("saldirma");
    saldir_kutu.style.display="none";
    var anim=document.getElementById("dolum");
    anim.style.display="inline";
    var anim_yazi=document.getElementById("yazi");
    anim_yazi.style.display="inline";
    var animasyon_genislik=10;
    function animasyon(){
        anim.style.width=animasyon_genislik+"px";
        animasyon_genislik+=10;
    }
    let animat=setInterval(animasyon,75);
    setTimeout(clearInterval,2000,animat);
    function saldiri_sonuc(){
        var rastgele = Math.floor(Math.random()*101);
        var saldiri_yüzde_ekle=document.getElementById("oyuncu-kazanma");
        if(saldiri_yüzde<=rastgele){
            para =  para-Math.floor(((yapi_puani/4)*75)/2);
            alert("savaş kaybedildi.");
        }else{
            para=para+Math.floor(((yapi_puani/4)*75));
            alert("Savaşı kazandınız");
            toplam_saldiri_kazanma+=1;
            saldiri_yüzde_ekle.innerHTML="<h4>Kazanılan toplam saldırı:"+toplam_saldiri_kazanma+"</h4>";
        }
        var anim_yazi=document.getElementById("yazi");
        var anim=document.getElementById("dolum");

        anim.style.width="0px";
        anim.style.display="none";
        anim_yazi.style.display="none";

    }
    setTimeout(saldiri_sonuc,2000);
}
function saldiri(){
    var saldir_kutu =document.getElementById("saldirma");
    saldir_kutu.style.display="none";
}

//tıklanan nesneye göre seciciye değer atıyoruz.
function bina(){
    if(para>=500){
        secici=1; //secici artık 1 ile yakalanırsa bina anlamına gelecek.
    }else{
        alert("Bu binayı alacak paranız bulunmuyor.");
    }
}

function ciftlik(){
    if(para>=700){
        secici=2;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}

function yonetim(){
    if(para>=1600){
        secici=3;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}

function fabrika(){
    if(para>=4000){
        secici=4;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}
function kisla(){
    if(para>=7000){
        secici=5;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}
function cephane(){
    if(para>=12000){
        secici=6;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}
function tank(){
    if(para>=17000){
        secici=7;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}
function ucak(){
    if(para>=30000){
        secici=8;
    }else{
        alert("Bu binayı almak için yeterli paranız yok.")
    }
}
function oyun_1_0(){
    var obje_para=document.getElementById("altin");
    var obje_1_1 = document.getElementById("oyun-1-0");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje_1_0 = document.getElementById("oyun-1-0").innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;
    }
    if(secici==2){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==3){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==4){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==5){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==6){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==7){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_1_1(){
    var obje_para=document.getElementById("altin");
    var obje_1_1 = document.getElementById("oyun-1-1");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje_1_0 = document.getElementById("oyun-1-1").innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje_1_1.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_1_2(){
    
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-1-2");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_1_3(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-1-3");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";

    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}
function oyun_1_4(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-1-4");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_2_0(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-2-0");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_2_1(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-2-1");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}



function oyun_2_2(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-2-2");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_2_3(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-2-3");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_2_4(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-2-4");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_3_0(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-3-0");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_3_1(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-3-1");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_3_2(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-3-2");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_3_3(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-3-3");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_3_4(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-3-4");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_4_0(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-4-0");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_4_1(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-4-1");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function oyun_4_2(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-4-2");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_4_3(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-4-3");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;



    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}


function oyun_4_4(){
    var obje_para=document.getElementById("altin");
    var obje = document.getElementById("oyun-4-4");
    var level=document.getElementById("oyuncu-level");
    var yüzde=document.getElementById("oyuncu-saldiri");
    var toplam_yapi=document.getElementById("oyuncu-yapi");
    if(secici==""){
        alert("Oluşturmak istediğiniz yapıyı seçmediniz.");
    }
    if(obje.innerHTML!=""){
        alert("burda bir yapı bulunuyor. Öncelikle bu yapıyı kaldırmalısınız.");
        return ;
    }
    if(secici==1){
        obje.innerHTML="<img width='100%' height='100%' src='bina.png'/>";
        para=para-500;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+7;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==2){
        obje.innerHTML="<img width='100%' height='100%' src='ciftlik.png'/>";
        para=para-700;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+8;
        yapi_puani=yapi_puani+1;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==3){
        obje.innerHTML="<img width='100%' height='100%' src='yonetim.png'/>";
        para=para-1600;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+12;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==4){
        obje.innerHTML="<img width='100%' height='100%' src='fabrika.png'/>";
        para=para-4000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+20;
        yapi_puani=yapi_puani+2;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5  + "</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;


    }
    if(secici==5){
        obje.innerHTML="<img width='100%' height='100%' src='kisla.png'/>";
        para=para-7000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+25;
        yapi_puani=yapi_puani+3;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=4;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>"
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==6){
        obje.innerHTML="<img width='100%' height='100%' src='cephane.png'/>";
        para=para-12000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+30;
        yapi_puani=yapi_puani+4;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=8;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==7){
        obje.innerHTML="<img width='100%' height='100%' src='tank.png'/>";
        para=para-17000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+40;
        yapi_puani=yapi_puani+5;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    if(secici==8){
        obje.innerHTML="<img width='100%' height='100%' src='ucak.png'/>";
        para=para-30000;
        obje_para.innerHTML="<h2 style='color:gold;'>Altın:"+para+"</h2>";
        para_üretim_hizi=para_üretim_hizi+60;
        yapi_puani=yapi_puani+6;
        level.innerHTML="<h4>Köyün şuanki leveli: " +yapi_puani/5   + "</h4>";
        saldiri_yüzde+=12;
        yüzde.innerHTML="<h4>Saldırı kazanma yüzdesi: "+saldiri_yüzde+"</h4>";
        toplam_kurulan_yapi=toplam_kurulan_yapi+1;
        toplam_yapi.innerHTML="<h4>Kurulan toplam yapi:"+toplam_kurulan_yapi+"</h4>";
        secici=0;

    }
    var anlikpara=document.getElementById("oyuncu-yazi");
    anlikpara.innerHTML="<h5>Saniyede üretilen altın miktarı: "+para_üretim_hizi+"</h5>";
}

function para_uret(){
    var altin = document.getElementById("altin");
    var toplam = document.getElementById("oyuncu-para");
    para=para+para_üretim_hizi;
    toplam_para+=para_üretim_hizi;
    altin.innerHTML="<h2 style='color:gold;'>Altın:"+ para+"</h2>";
    toplam.innerHTML="<h4>Kazanılan tolam para: "+toplam_para+"</h4>"

}
setInterval(para_uret,1000);