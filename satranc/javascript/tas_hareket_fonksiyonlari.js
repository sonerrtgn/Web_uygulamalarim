function sah_hareket(rengi_degisen_divler,tas_konum){
    //bir birim saga gidebilir.
    if((tas_konum+1)%8 !=0 && tas_konum+1<65){
        if(taslar[tas_konum+1]==undefined){
            rengi_degisen_divler.push(tas_konum+1);
        }
    }
    //bir birim sola gidebilir.
    if((( (tas_konum-1)-7)%8!=0)   && (tas_konum-1 > -1) ){
        if(taslar[tas_konum-1]==undefined){
            rengi_degisen_divler.push(tas_konum-1);
            console.log("birim sol");
        }
    }
    //bir birim uste gidebilir.
    if(tas_konum-8 > -1 && taslar[tas_konum-8] == undefined){
        rengi_degisen_divler.push(tas_konum-8);
    }
    // bir birim alta gidebilir.
    if(tas_konum+8 <65 && (taslar[tas_konum+8] == undefined)){
        rengi_degisen_divler.push(tas_konum+8);
    }
    // sag_alt capraz.
    if((tas_konum-7)%8 !=0 && tas_konum+9<65 ){
        if(taslar[tas_konum+9]==undefined){
            rengi_degisen_divler.push(tas_konum+9);
        }
    }

    //sol_alt capraz.
    if((tas_konum)%8 != 0 && tas_konum+7 <64){
        if(taslar[tas_konum+7] == undefined){
            rengi_degisen_divler.push(tas_konum+7);
        }
    }

    //sag_ust_capraz
    if((tas_konum-7)%8 !=0 && tas_konum-7>-1){
        if(taslar[tas_konum-7] == undefined){
            rengi_degisen_divler.push(tas_konum-7);

        }
    }

    //sol_ust capraz.
    if((tas_konum)%8 != 0 && tas_konum-9 > -1){
        if(taslar[tas_konum-9]==undefined){
            rengi_degisen_divler.push(tas_konum-9);
        }
    }

    return rengi_degisen_divler;
}


function fil_hareket(rengi_degisen_divler,tas_konum){
    //sağ_alt gidebileceği konum.
    var kac_birim_sag_bos= 8-bulundugu_uzaklık(tas_konum);
    var kac_birim_sol_bos = bulundugu_uzaklık(tas_konum);

    var kac_birim_yukari_bos = bulundugu_sira(tas_konum);
    var kac_birim_asagi_bos = 8-bulundugu_sira(tas_konum);

    var tas_rengi = taslar[tas_konum].get_color();
    var rakip_rengi="";
    if(tas_rengi == "beyaz"){
        rakip_rengi = "siyah";
    }else{
        rakip_rengi = "beyaz";
    }

    var count = 0;
    var eklenme_miktari = 9;
    //sag_alt gidebileceği yer
    console.log("sag-alan");
    console.log(kac_birim_asagi_bos);
    while(count < kac_birim_sag_bos && count < kac_birim_asagi_bos){
        if(taslar[tas_konum+eklenme_miktari] ==undefined){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
        }else if(taslar[tas_konum+eklenme_miktari].get_color() == rakip_rengi){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
            break;
        }else{
            break;
        }
        count++;
        eklenme_miktari+=9;
    }
    //sol_alt gidebileceği konumlar.
    count = 1;
    eklenme_miktari = 7;
    while(count < kac_birim_sol_bos && count < kac_birim_asagi_bos){
        if(taslar[tas_konum+eklenme_miktari] == undefined){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
        }else if(taslar[tas_konum+eklenme_miktari].get_color() == rakip_rengi){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
            break;
        }else{
            break;
        }
        count++;
        eklenme_miktari+=7;
    }
    //sag_ust gidebileceği konumlar.
    count = 0;
    eklenme_miktari = -7;
    while(count< kac_birim_sag_bos && count+1 < kac_birim_yukari_bos){
        if(taslar[tas_konum+eklenme_miktari]==undefined){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
        }else if(taslar[tas_konum+eklenme_miktari].get_color() == rakip_rengi){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
            break;
        }else{
            break;
        }
        count++;
        eklenme_miktari-=7;
    }
    //sol_ust gidebileceği konumlar.
    count = 0;
    eklenme_miktari = -9;
    console.log("------");
    console.log(kac_birim_sol_bos)
    while(count+1 < kac_birim_sol_bos && count+1 < kac_birim_yukari_bos){
        if(taslar[tas_konum+eklenme_miktari] == undefined){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
        }else if(taslar[tas_konum+eklenme_miktari].get_color() == rakip_rengi){
            rengi_degisen_divler.push(tas_konum+eklenme_miktari);
            break;
        }else{
            break;
        }
        count++;
        eklenme_miktari-=9;
    }


    return rengi_degisen_divler;

}



function piyon_hareket_siyah(rengi_degisen_divler,hareket_ettimi,tas_konum){
    var tas_rengi = taslar[tas_konum].get_color();
    if(tas_rengi == "beyaz"){
        var rakip_rengi = "siyah";
    }else{
        var rakip_rengi = "beyaz";
    }
    if(hareket_ettimi == 0){
        if(tas_konum+8<65 && (taslar[tas_konum+8] == undefined)){
            rengi_degisen_divler.push(tas_konum+8);
        }
        if(tas_konum+16<65 && (taslar[tas_konum+16] == undefined)){
            rengi_degisen_divler.push(tas_konum+16);
        }
        if(tas_konum+7<65 && taslar[tas_konum+7]!=undefined){
            if((tas_konum)%8!=0 && taslar[tas_konum+7].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum+7);
            }
        }
        if(tas_konum+9<65 && taslar[tas_konum+9]!=undefined){
            if((tas_konum-7)%8!=0 && taslar[tas_konum+9].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum+9);
            }
        }
    }else{
        if(tas_konum+8<65 && (taslar[tas_konum+8] == undefined)){
            rengi_degisen_divler.push(tas_konum+8);
        }
        if(tas_konum+7<65 && taslar[tas_konum+7]!=undefined){
            if((tas_konum)%8!=0 && taslar[tas_konum+7].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum+7);
            }
        }
        if(tas_konum+9<65 && taslar[tas_konum+9]!=undefined){
            if((tas_konum-7)%8!=0 && taslar[tas_konum+9].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum+9);
            }
        }
    }
    return rengi_degisen_divler;
}

function piyon_hareket_beyaz(rengi_degisen_divler,tas_konum,hareket_ettimi){
    if(hareket_ettimi ==0){
        if((tas_konum-8 > -1) && (taslar[tas_konum-8]==undefined)){
            rengi_degisen_divler.push(tas_konum-8);
        }
        if((tas_konum-16 > -1 )&& (taslar[tas_konum-16]==undefined)){
            rengi_degisen_divler.push(tas_konum-16);
        }
        //bir sağında eğer siyah taş varsa çapraz haraket edebilir.
        if(taslar[tas_konum-9] !=undefined){
            if(taslar[tas_konum-9].get_color() == "siyah"){
                rengi_degisen_divler.push(tas_konum-9);
            }
        }
        if(taslar[tas_konum-7] !=undefined){
            if(taslar[tas_konum-7].get_color() == "siyah"){
                rengi_degisen_divler.push(tas_konum-7);
            }
        }
    }else{
        if((tas_konum-8 > -1) && (taslar[tas_konum-8]==undefined)){
            rengi_degisen_divler.push(tas_konum-8);
        }
        if(taslar[tas_konum-9] !=undefined){
            if(taslar[tas_konum-9].get_color() == "siyah"){
                rengi_degisen_divler.push(tas_konum-9);
            }
        }
        if(taslar[tas_konum-7] !=undefined){
            if(taslar[tas_konum-7].get_color() == "siyah"){
                rengi_degisen_divler.push(tas_konum-7);
            }
        }
    }
    return rengi_degisen_divler
}


function kale_hareket(rengi_degisen_divler,tas_konum){
    var asagi_hareket=8;
    var tas_rengi = taslar[tas_konum].get_color();
    var rakip_rengi = "";
    if(tas_rengi == "beyaz"){
        rakip_rengi ="siyah";
    }else{
        rakip_rengi = "beyaz";
    }
    //asagi hareket için uygun olan pozisyonlar
    if(taslar[tas_konum+asagi_hareket] != undefined && tas_konum+asagi_hareket <65 && taslar[tas_konum].get_color() == rakip_rengi){
        rengi_degisen_divler.push(tas_konum+asagi_hareket);
    }
    while(taslar[tas_konum+asagi_hareket] == undefined && tas_konum+asagi_hareket <65){
        rengi_degisen_divler.push(tas_konum+asagi_hareket);
        asagi_hareket+=8;
        if(tas_konum+asagi_hareket <65 && taslar[tas_konum+asagi_hareket] != undefined && taslar[tas_konum+asagi_hareket].get_color() == rakip_rengi ){
            rengi_degisen_divler.push(tas_konum+asagi_hareket);
            break;
        }
    }

    // yukari için uygun olan pozisyonlar
    var yukari_hareket = 8;
    while(taslar[tas_konum-yukari_hareket] == undefined && tas_konum-yukari_hareket >0){
        rengi_degisen_divler.push(tas_konum-yukari_hareket);
        yukari_hareket += 8;
        if(tas_konum-yukari_hareket >0 && taslar[tas_konum-yukari_hareket] != undefined && taslar[tas_konum-yukari_hareket].get_color() == rakip_rengi ){
            rengi_degisen_divler.push(tas_konum-yukari_hareket);
            break;
        }
    }

    // sag icin uygun olan pozisyonlar
    var sag_hareket = 1;
    if( ((tas_konum+sag_hareket) %8 != 0 && taslar[tas_konum+sag_hareket]!=undefined)  && taslar[tas_konum+sag_hareket].get_color() == rakip_rengi){                                                 
        rengi_degisen_divler.push(tas_konum+sag_hareket);
        console.log("kale buldu");
    }
    while((taslar[tas_konum+sag_hareket] == undefined) && (tas_konum+sag_hareket) %8 != 0){
        rengi_degisen_divler.push(tas_konum+sag_hareket);
        sag_hareket++;
        if( ((tas_konum+sag_hareket) %8 != 0 && taslar[tas_konum+sag_hareket]!=undefined)  && taslar[tas_konum+sag_hareket].get_color() == rakip_rengi){                                                 
            rengi_degisen_divler.push(tas_konum+sag_hareket);
            console.log("kale buldu");
            break;
        }
    }

    // sol icin uygun olan pozisyonlar
    var sol_hareket = 1;
    if(((tas_konum-sol_hareket) %8 != 7 && taslar[tas_konum-sol_hareket]!=undefined)  && taslar[tas_konum-sol_hareket].get_color() == rakip_rengi){                                                 
        rengi_degisen_divler.push(tas_konum-sol_hareket);
    }    
    while(taslar[tas_konum-sol_hareket] == undefined &&  (tas_konum-sol_hareket)%8 != 7  && tas_konum-sol_hareket>-1){
        rengi_degisen_divler.push(tas_konum-sol_hareket);
        sol_hareket++;
        if(((tas_konum-sol_hareket) %8 != 7 && taslar[tas_konum-sol_hareket]!=undefined)  && taslar[tas_konum-sol_hareket].get_color() == rakip_rengi){                                                 
            rengi_degisen_divler.push(tas_konum-sol_hareket);
            console.log("solda problem yok.");
            break;
        }    
    }
    console.log(rengi_degisen_divler);
    return rengi_degisen_divler;
}

function at_hareket(rengi_degisen_divler,tas_konum){
    var hareket_yapacak_at_rengi = taslar[tas_konum].get_color();
    var rakip_rengi = "";
    if(hareket_yapacak_at_rengi == "siyah"){
        rakip_rengi ="beyaz";
    }else{
        rakip_rengi = "siyah"
    }
    
    if(bulundugu_uzaklık(tas_konum) != 8){
        if(tas_konum+17<65){
            if(taslar[tas_konum+17] == undefined || taslar[tas_konum+17].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum+17);
            }

        }
        if(tas_konum-15 >-1){
            if(taslar[tas_konum-15] == undefined || taslar[tas_konum-15].get_color() == rakip_rengi ){
                rengi_degisen_divler.push(tas_konum-15);
            }
        }
    }
    if(bulundugu_uzaklık(tas_konum) < 7){
        if(tas_konum+10 < 65){
            if(taslar[tas_konum+10] == undefined || taslar[tas_konum+10].get_color() == rakip_rengi ){
            rengi_degisen_divler.push(tas_konum+10);
            }
        }
        if(tas_konum-6>-1){
            if(taslar[tas_konum-6] == undefined || taslar[tas_konum-6].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum-6);
            }
        }  
    }
    if(bulundugu_uzaklık(tas_konum) != 1 ){
        if(tas_konum+15 < 65){
            if(taslar[tas_konum+15] == undefined || taslar[tas_konum+15].get_color() == rakip_rengi ){
                rengi_degisen_divler.push(tas_konum+15);
            }
        }
        if(tas_konum-17 > -1){
            if(taslar[tas_konum-17] == undefined || taslar[tas_konum-17].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum-17);
            }
        }
    }
    if(bulundugu_uzaklık(tas_konum)>2){
        if(tas_konum+6 < 65){
            if(taslar[tas_konum+6] == undefined || taslar[tas_konum+6].get_color() == rakip_rengi ){
                rengi_degisen_divler.push(tas_konum+6);
            }
        }
        if(tas_konum-10 > -1){
            if(taslar[tas_konum-10] == undefined || taslar[tas_konum-10].get_color() == rakip_rengi){
                rengi_degisen_divler.push(tas_konum-10);
            }
        }
    }

    return rengi_degisen_divler;
}
