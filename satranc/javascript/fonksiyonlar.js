function tas_yeme_kontrol(yenen_tas){
    var uzunluk = rengi_degisen_divler.length-1;
    while(0<= uzunluk){
        if(yenen_tas.get_konum() == rengi_degisen_divler[uzunluk]){
            return 1;
        }
        uzunluk--;
    }
    return 0;
}
function secili_tas_konum_ver(girdi){
    var count = girdi.length;
    var konum =0 ;
    while( 0 < count-1 ){
        if(girdi[count] == "1"){
            konum = konum*10+1;
        }else if(girdi[count] == "2"){
            konum = konum*10+2;
        }else if(girdi[count] == "3"){
            konum = konum*10+3;
        }else if(girdi[count] == "4"){
            konum = konum*10+4;
        }else if(girdi[count] == "5"){
            konum = konum*10+5;
        }else if(girdi[count] == "6"){
            konum = konum*10+6;
        }else if(girdi[count] == "7"){
            konum = konum*10+7;
        }else if(girdi[count] == "8"){
            konum = konum*10+8;
        }else if(girdi[count] == "9"){
            konum = konum*10+9;
        }else if(girdi[count] == "0"){
            konum =1;
        }
        count--;
    }
    console.log(konum);
    return konum;
}

function dizi_bosalt(dizi){
    var uzunluk = dizi.length-1;
    while(0< uzunluk){
        dizi.push();
        uzunluk--;
    }
    return dizi;
}

function div_renkleri_normallestir(dizi){
    var uzunluk = dizi.length-1;
    
    while(0<= uzunluk){
        var div_id = "oyun-tas-"+dizi[uzunluk];
        document.getElementById(div_id).style.opacity = "1";
        uzunluk--;
    }
}

function tas_hamle_uygunmu(secilen_tas){
    var uzunluk = rengi_degisen_divler.length-1;
    while(0<= uzunluk){
        if(secilen_tas == rengi_degisen_divler[uzunluk]){
            return 1;
        }
        uzunluk--;
    }
    return 0;
}

function tas_yeri_degis(bulundugu_yer,degisecek_yer){
    document.getElementById("oyun-tas-"+String(bulundugu_yer)).innerHTML="";
    var koruma = taslar[bulundugu_yer];
    taslar[bulundugu_yer] = taslar[degisecek_yer];
    taslar[degisecek_yer] = koruma;
    taslar[degisecek_yer].tas_konum_degistir(degisecek_yer);
}

function div_renkleri_soldur(solacak_divler){
    var uzunluk = solacak_divler.length-1;
    while(0<= uzunluk){
        document.getElementById("oyun-tas-"+String(solacak_divler[uzunluk])).style.opacity=  "0.1";
        uzunluk--;
    } 
}

function bulundugu_sira(tas_konum){
    var count = 1;
    var bas=0;
    var son=7;
    while(count < 8){
        if((bas <= tas_konum) && (tas_konum <= son)){
            return count;
        }
        count++;
        bas+=8;
        son+=8;
    }
    return count;
}

function bulundugu_uzaklık(tas_konum){ // tasın soldan kaç birim uzak olduğunu döndürür.
        if(tas_konum %8 == 0){
            return 1;
        }
        if((tas_konum-1)%8 == 0){
            return 2;
        }
        if((tas_konum-2)%8 == 0){
            return 3;
        }
        if((tas_konum-3)%8 == 0){
            return 4;
        }
        if((tas_konum-4)%8 == 0){
            return 5;
        }
        if((tas_konum-5)%8 == 0){
            return 6;
        }
        if((tas_konum-6)%8 == 0){
            return 7;
        }
        if((tas_konum-7)%8 == 0){
            return 8;
        }
    return 8;
}
function sah_yeniyormu_kontrol(hareket_pozisyonlari,sah_konum){
    var uzunluk = hareket_pozisyonlari.length-1;
    while(-1<uzunluk){
        if(hareket_pozisyonlari[uzunluk] == sah_konum){
            sah_sikintidami = 1;
            return 1;
        }
        uzunluk--;
    }
    return 0;

}
function sah_kirmizi_yap(tas_konum){
    document.getElementById("oyun-tas-"+String(tas_konum)).style.backgroundColor = "red";
}
function sah_sikintidami(hareket_eden_tas_konum){
    var tas_rengi = taslar[hareket_eden_tas_konum].get_color();
    var tas_adi = taslar[hareket_eden_tas_konum].get_name();
    var bir_sonraki_hareket = new Array;
    if(tas_rengi == "beyaz"){
        var kontrol_sah_konumu = siyah_sah_pozisyonu;
    }else{
        var kontrol_sah_konumu = beyaz_sah_pozisyonu;
    }
    if(tas_adi == "kale"){
        bir_sonraki_hareket = kale_hareket(bir_sonraki_hareket,hareket_eden_tas_konum);
        if(sah_yeniyormu_kontrol(bir_sonraki_hareket,kontrol_sah_konumu) == 1){
            alert("Şah durumundasınız, sadece şahı kurtaracak hamleler yapabilirsiniz.");
            sah_kirmizi_yap(kontrol_sah_konumu);
        }
    }
    if(tas_adi == "fil"){
        bir_sonraki_hareket = fil_hareket(bir_sonraki_hareket,hareket_eden_tas_konum);
        if(sah_yeniyormu_kontrol(bir_sonraki_hareket,kontrol_sah_konumu) == 1){
            alert("Şah durumundasınız, sadece şahı kurtaracak hamleler yapabilirsiniz.");
            sah_kirmizi_yap(kontrol_sah_konumu);
        }
        console.log(bir_sonraki_hareket)
    }
    if(tas_adi == "at"){
        bir_sonraki_hareket = at_hareket(bir_sonraki_hareket,hareket_eden_tas_konum);
        if(sah_yeniyormu_kontrol(bir_sonraki_hareket,kontrol_sah_konumu) == 1){
            alert("Şah durumundasınız, sadece şahı kurtaracak hamleler yapabilirsiniz.");
            sah_kirmizi_yap(kontrol_sah_konumu);
        }
    }
    if(tas_adi == "vezir"){
        bir_sonraki_hareket = kale_hareket(bir_sonraki_hareket,hareket_eden_tas_konum);
        bir_sonraki_hareket = fil_hareket(bir_sonraki_hareket,hareket_eden_tas_konum);
        if(sah_yeniyormu_kontrol(bir_sonraki_hareket,kontrol_sah_konumu) == 1){
            alert("Şah durumundasınız, sadece şahı kurtaracak hamleler yapabilirsiniz.");
            sah_kirmizi_yap(kontrol_sah_konumu);
        }
    }

}