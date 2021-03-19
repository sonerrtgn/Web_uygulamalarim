var yukaridan_uzakligi = 0;
var yandan_uzakligi = 0;

function atilan_tas_grafik_ver(atilan_tas){
    var yazi ="<h1 style='color:"+atilan_tas.get_color()+"'>"+atilan_tas.get_number()+"<h1>";
    return yazi;

}
function atilan_tas_goster(hangi_oyuncu_atti,ne_atti){
    if(hangi_oyuncu_atti == 0){
        document.getElementById("player_1_atilan_tas").innerHTML = atilan_tas_grafik_ver(ne_atti);
    }else if(hangi_oyuncu_atti == 1){
        document.getElementById("player_2_atilan_tas").innerHTML = atilan_tas_grafik_ver(ne_atti);

    }else if(hangi_oyuncu_atti == 2){
        document.getElementById("player_3_atilan_tas").innerHTML = atilan_tas_grafik_ver(ne_atti);

    }else{
        document.getElementById("player_4_atilan_tas").innerHTML = atilan_tas_grafik_ver(ne_atti);

    }
}

function player_1_tas_cekme_yardimci(){
    yukaridan_uzakligi +=15;
    document.getElementById("yerdeki_taslar_animasyon").style.marginTop = yukaridan_uzakligi;
}
function player_2_tas_cekme_yardimci(){
    yandan_uzakligi +=15
    document.getElementById("yerdeki_taslar_animasyon").style.marginLeft = yandan_uzakligi+"px";
}
function player_3_tas_cekme_yardimci(){
    yukaridan_uzakligi -=15;
    document.getElementById("yerdeki_taslar_animasyon").style.marginTop = yukaridan_uzakligi+"px";
}
function player_4_tas_cekme_yardimci(){
    yandan_uzakligi -=15
    document.getElementById("yerdeki_taslar_animasyon").style.marginLeft = yandan_uzakligi+"px";
}

function cekilen_tasi_yerine_gotur(){
    document.getElementById("yerdeki_taslar_animasyon").style.marginTop = "0px";
    document.getElementById("yerdeki_taslar_animasyon").style.marginLeft = "0px";

    yukaridan_uzakligi = 0;
    yandan_uzakligi = 0;
}
function tas_cekme(player_x){
    if(player_x == 1){
        if(oyun_sirasi_takip_etme == 0) {
            let cekme_islemi1= setInterval(player_1_tas_cekme_yardimci,50);
            setTimeout(clearInterval,700,cekme_islemi1);
            setTimeout(cekilen_tasi_yerine_gotur,700);
            oyun_sirasi_takip_etme= 1;

            oyuncu_1_tas_cek();
        }else{
            alert("Sıra sizde değil.");
        }
    }else if(player_x == 2){
        let cekme_islemi2= setInterval(player_2_tas_cekme_yardimci,50);
        setTimeout(clearInterval,700,cekme_islemi2);
        setTimeout(cekilen_tasi_yerine_gotur,700);
        oyuncu_tas_cek(2);
    }
    else if(player_x == 3){
        let cekme_islemi3= setInterval(player_3_tas_cekme_yardimci,50);
        setTimeout(clearInterval,700,cekme_islemi3);
        setTimeout(cekilen_tasi_yerine_gotur,700);
        oyuncu_tas_cek(2);

    }
    else if(player_x == 4){
        let cekme_islemi4= setInterval(player_4_tas_cekme_yardimci,50);
        setTimeout(clearInterval,900,cekme_islemi4);
        setTimeout(cekilen_tasi_yerine_gotur,900);
        oyuncu_tas_cek(2);

    }
    document.getElementById("yerde_kac_tas_var").innerHTML = "<h5>"+yerdeki_taslar.length+"</h5>";

}


var player_1_tas_atma = 160;
var player_2_tas_atma = [80,40];
var player_3_tas_atma = 160;
var player_4_tas_atma = 100;

function player_1_atma_yardimci(){
    player_1_tas_atma+=10;
    document.getElementById("player_1_atilacak_tas").style.marginLeft= player_1_tas_atma+ "px";
}
function cekilen_1_yerine_gotur(){
    player_1_tas_atma = 160;
    document.getElementById("player_1_atilacak_tas").style.marginLeft= player_1_tas_atma+ "px";
    document.getElementById("player_1_atilacak_tas").style.display = "none";

}
function player_2_atma_yardimci(){
    player_2_tas_atma[0] -=10;
    player_2_tas_atma[1] -=4;
    document.getElementById("player_2_atilacak_tas").style.marginTop= player_2_tas_atma[0]+ "px";
    document.getElementById("player_2_atilacak_tas").style.marginLeft= player_2_tas_atma[1]+ "px";
}
function player_2_yerine_gotur(){
    player_2_tas_atma[0] = 80;
    player_2_tas_atma[1] = 40;
    document.getElementById("player_2_atilacak_tas").style.marginTop= player_2_tas_atma[0]+ "px";
    document.getElementById("player_2_atilacak_tas").style.marginLeft= player_2_tas_atma[1]+ "px";
    document.getElementById("player_2_atilacak_tas").style.display="none";
}


function player_3_atma_yardimci(){
    player_3_tas_atma-=10;
    document.getElementById("player_3_atilacak_tas").style.marginLeft= player_3_tas_atma+ "px";
}
function cekilen_3_yerine_gotur(){
    player_3_tas_atma = 160;
    document.getElementById("player_3_atilacak_tas").style.marginLeft= player_3_tas_atma+ "px";
    document.getElementById("player_3_atilacak_tas").style.display = "none";
}

function player_4_atma_yardimci(){
    player_4_tas_atma+=10;
    document.getElementById("player_4_atilacak_tas").style.marginTop= player_4_tas_atma+ "px";
}
function cekilen_4_yerine_gotur(){
    player_4_tas_atma = 100;
    document.getElementById("player_4_atilacak_tas").style.marginTop= player_4_tas_atma+ "px";
    document.getElementById("player_4_atilacak_tas").style.display = "none";
    alert("Oyun sırası sizde taş çekip oynayınız lütfen.");
}

function tas_atma(player_x,hangi_tasi_atalim){
    if(player_x == 1){
        if(degisim_tut != -1){ 
            document.getElementById("player_1_atilacak_tas").style.display = "inline";
            let atma_islemi1= setInterval(player_1_atma_yardimci,50);
            setTimeout(clearInterval,1300,atma_islemi1);
            setTimeout(cekilen_1_yerine_gotur,1300);
            setTimeout(oyun_baslat,1300);
            oyuna_kim_baslayacak = 1;

            var atilan_tas = player_1[degisim_tut];
            player_1[degisim_tut] = undefined;
            document.getElementById("player_"+degisim_tut+"_tas").innerHTML = "";
            document.getElementById("player_1_atilan_tas").innerHTML = tas_to_grafik_atilan(atilan_tas);
            degisim_tut = -1;
        }else{
            alert("atilacak taş seçmediniz.")
        }

    }else if(player_x == 2){
        document.getElementById("player_2_atilacak_tas").style.display = "inline";
        let atma_islemi2= setInterval(player_2_atma_yardimci,50);
        setTimeout(clearInterval,700,atma_islemi2);
        setTimeout(player_2_yerine_gotur,700);
        atilan_tas_goster(1,hangi_tasi_atalim);

    }else if(player_x == 3){
        document.getElementById("player_3_atilacak_tas").style.display = "inline";
        let atma_islemi2= setInterval(player_3_atma_yardimci,50);
        setTimeout(clearInterval,1100,atma_islemi2);
        setTimeout(cekilen_3_yerine_gotur,1100);
        atilan_tas_goster(2,hangi_tasi_atalim);

    }else if(player_x == 4){
        document.getElementById("player_4_atilacak_tas").style.display = "inline";
        let atma_islemi2= setInterval(player_4_atma_yardimci,50);
        setTimeout(clearInterval,900,atma_islemi2);
        setTimeout(cekilen_4_yerine_gotur,900);
        if(player_4_atilan_tas[0] == undefined){
            player_4_atilan_tas[0] = hangi_tasi_atalim;

        }else if(player_4_atilan_tas[1] == undefined){
            player_4_atilan_tas[1] = hangi_tasi_atalim;
        }else{
            //iki kez taş atılmıtşrı artık player_4_atilan_tas[0] a 1. 1'e ise yeni atılan tas gelmelidir.
            player_4_atilan_tas[0] = player_4_atilan_tas[1];
            player_4_atilan_tas[1] = hangi_tasi_atalim;
        }
        atilan_tas_goster(3,hangi_tasi_atalim);
        oyun_sirasi_takip_etme = 0;

    }
}