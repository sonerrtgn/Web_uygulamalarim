var per_olanlar = new Array();
var per_olmayanlar = new Array();

function tasi_renklere_gore_ayir(player_x){
    var duzenli_liste = new Array();
    var count = 0;
    var uzunluk = player_x.length;
    while(count < uzunluk){
        if(player_x[count].get_color() == "red"){
            duzenli_liste.push(player_x[count]);
        }
        count++;
    }
    count = 0;
    while(count < uzunluk){
        if(player_x[count].get_color() == "black"){
            duzenli_liste.push(player_x[count]);
        }
        count++;
    }
    count = 0;
    while(count < uzunluk){
        if(player_x[count].get_color() == "blue"){
            duzenli_liste.push(player_x[count]);
        }
        count++;
    }
    count = 0;
    while(count < uzunluk){
        if(player_x[count].get_color() == "yellow"){
            duzenli_liste.push(player_x[count]);
        }
        count++;
    }

    console.log(duzenli_liste);
    return duzenli_liste;
}

function renklerine_gore_ayrilmis_eli_sirala(player_x){
    var count = 0;
    while(player_x[count].get_color() == "red"){
        var count2= 0;
        while(player_x[count2 +1].get_color() == "red"){
            if(player_x[count2].get_number() < player_x[count2+1].get_number()){
                var koruma = player_x[count2];
                player_x[count2] = player_x[count2+1];
                player_x[count2+1]=koruma;
            }
            count2++;
        }
        count++;
    }
    var count_tut = count;
    while(player_x[count].get_color() == "black"){
        var count2= count_tut;
        while(player_x[count2 +1].get_color() == "black"){
            if(player_x[count2].get_number() < player_x[count2+1].get_number()){
                var koruma = player_x[count2];
                player_x[count2] = player_x[count2+1];
                player_x[count2+1]=koruma;
            }
            count2++;
        }
        count++;
    }
    count_tut = count;

    while(player_x[count].get_color() == "blue"){
        var count2= count_tut;
        while( player_x[count2+1]!= undefined && player_x[count2 +1].get_color() == "blue"){
            if(player_x[count2].get_number() < player_x[count2+1].get_number()){
                var koruma = player_x[count2];
                player_x[count2] = player_x[count2+1];
                player_x[count2+1]=koruma;
            }
            count2++;
        }
        count++;
    }
    count_tut =count;
    while(player_x[count]!= undefined){
        var count2= count_tut;
        while(player_x[count2 +1]!= undefined ){
            if(player_x[count2].get_number() < player_x[count2+1].get_number()){
                var koruma = player_x[count2];
                player_x[count2] = player_x[count2+1];
                player_x[count2+1]=koruma;
            }
            count2++;
        }
        count++;
    }
    console.log(player_x)
    return player_x;
}

function ardisik_perler_bul(player_x,hangi_oyuncu_per_hesaplaniyor,perler,perolmiyan){
    var count = 0;
    var uzunluk = player_x.length;
    while(player_x[count+2].get_color() == "red"){
        if(player_x[count].get_number() == player_x[count+1].get_number()+1){
            if(player_x[count+1].get_number() == player_x[count+2].get_number() +1){
                perler.push(player_x[count]);
                perler.push(player_x[count+1]);
                perler.push(player_x[count+2]);
                perler.push(undefined);

                hangi_oyuncu_per_hesaplaniyor += player_x[count].get_number()+player_x[count+1].get_number()+player_x[count+2].get_number();
                
                player_x[count] = undefined;
                player_x[count+1] = undefined;
                player_x[count+2] = undefined;
                count+=2;
            }
        }
        count++;
    }

    while(player_x[count+2].get_color() == "black"){
        if(player_x[count].get_number() == player_x[count+1].get_number()+1){
            if(player_x[count+1].get_number() == player_x[count+2].get_number() +1){
                perler.push(player_x[count]);
                perler.push(player_x[count+1]);
                perler.push(player_x[count+2]);
                perler.push(undefined);

                hangi_oyuncu_per_hesaplaniyor += player_x[count].get_number()+player_x[count+1].get_number()+player_x[count+2].get_number();
                
                player_x[count] = undefined;
                player_x[count+1] = undefined;
                player_x[count+2] = undefined;
                count+=2;
            }
        }
        count++;
    }


    while( player_x[count+2]!= undefined && player_x[count+2].get_color() == "blue"){
        if(player_x[count].get_number() == player_x[count+1].get_number()+1){
            if(player_x[count+1].get_number() == player_x[count+2].get_number() +1){
                perler.push(player_x[count]);
                perler.push(player_x[count+1]);
                perler.push(player_x[count+2]);
                perler.push(undefined);

                hangi_oyuncu_per_hesaplaniyor += player_x[count].get_number()+player_x[count+1].get_number()+player_x[count+2].get_number();
                
                player_x[count] = undefined;
                player_x[count+1] = undefined;
                player_x[count+2] = undefined;
                count+=2;
            }
        }
        count++;
    }

    while(player_x[count+2]!= undefined){
        if(player_x[count].get_number() == player_x[count+1].get_number()+1){
            if(player_x[count+1].get_number() == player_x[count+2].get_number() +1){
                perler.push(player_x[count]);
                perler.push(player_x[count+1]);
                perler.push(player_x[count+2]);
                perler.push(undefined);
                hangi_oyuncu_per_hesaplaniyor += player_x[count].get_number()+player_x[count+1].get_number()+player_x[count+2].get_number();
                
                player_x[count] = undefined;
                player_x[count+1] = undefined;
                player_x[count+2] = undefined;
                count+=2;

            }
        }
        count++;
    }

    count = 0;
    while(count < uzunluk){
        if(player_x[count] != undefined){
            perolmiyan.push(player_x[count]);
        }
        count++;
    }
    console.log(perler);
    console.log(perolmiyan)
    return [perler,perolmiyan];
}

function ayni_sayi_farkli_renk_sirala(player_x){
    var duzenli_dizi = new Array();
    var uzunluk = player_x.length;
    var count = 13;
    while(count != 0){
        var count2=0;
        while(count2 < uzunluk){
            if(player_x[count2].get_number() == count){
                duzenli_dizi.push(player_x[count2]);
            }
            count2++;
        }
        count--;
    }
    return duzenli_dizi;
}

function per_olmayanlarda_per_ara(per_olanlar,per_olmayanlar){
    per_olmayanlar = ayni_sayi_farkli_renk_sirala(per_olmayanlar);
    var uzunluk = per_olmayanlar.length;
    var count = 0;
    while(count+2< uzunluk){
        if(per_olmayanlar[count].get_color() != per_olmayanlar[count+1].get_color() ){
            if( (per_olmayanlar[count].get_color() != per_olmayanlar[count+2]) && (per_olmayanlar[count+1].get_color() != per_olmayanlar[count+2].get_color())){
                if( (per_olmayanlar[count].get_number() == per_olmayanlar[count+1].get_number() ) && (per_olmayanlar[count+1].get_number() == per_olmayanlar[count+2].get_number()) ){
                    per_olanlar.push(per_olmayanlar[count]);
                    per_olanlar.push(per_olmayanlar[count+1]);
                    per_olanlar.push(per_olmayanlar[count+2]);
                    per_olanlar.push(undefined);
    
                    per_olmayanlar[count] = undefined;
                    per_olmayanlar[count+1] = undefined;
                    per_olmayanlar[count+2] = undefined;
    
                    count+=2;
                }
            }
        }
        count++;
    }
    var yeni_per_olmayanlar = new Array();
    count = 0;
    while(count < uzunluk){
        if(per_olmayanlar[count] != undefined){
            yeni_per_olmayanlar.push(per_olmayanlar[count]);
        }
        count++;
    }
    console.log("--",yeni_per_olmayanlar,"---");
    return [per_olanlar,yeni_per_olmayanlar];

}  
function per_olmayanlarda_ardisik_per_ara(){
    
}


function ayni_renkleri_sirala(dizi){
    var count = 0;
    var uzunluk = dizi.length;
    while(count<uzunluk){
        var count2 = 0;
        while(count2 < uzunluk-1-count){
            if(dizi[count2].get_number() < dizi[count2+1].get_number() ){
                var koruma = dizi[count2];
                dizi[count2] = dizi[count2+1];
                dizi[count2+1] = koruma;
            }
            count2++;
        }
        count++;
    }
    return dizi;
}

function hangi_tasi_atalim(per_olmayanlar){
    if((player_1_actimi == 0) && (player_2_actimi == 0) && (player_3_actimi == 0 ) &&(player_4_actimi == 0) ){
        // kimse a??mad??ysa i??lek kontrolune gerek yoktur.
        var en_kucuk_tas_bul=1;
        while(per_olmayanlar[per_olmayanlar.length-en_kucuk_tas_bul] == undefined){
            en_kucuk_tas_bul+=1;
        }
        var en_kucuk_tas = per_olmayanlar[per_olmayanlar.length-en_kucuk_tas_bul];

        var count = 0;
        var uzunluk = per_olmayanlar.length;
        while(count < uzunluk){
            if( (per_olmayanlar[count] != undefined) && (en_kucuk_tas.get_number() > per_olmayanlar[count].get_number() )){
                en_kucuk_tas = per_olmayanlar[count];
            }
            count++;
        }
        count = 0;
        while(count < uzunluk){
            if(per_olmayanlar[count] == en_kucuk_tas){
                per_olmayanlar[count] = undefined;
                return[per_olmayanlar,en_kucuk_tas]; // per olmayanlar'dan biri at??laca???? i??in per olmayanlardan at??lacak ta?? undifened edilerek geri hem at??lacak ta?? hemde yeni per_olmayanlar dizisi g??nderiliyor.
            }
            count++;
        }
        return en_kucuk_tas;
    }

}


//player_x per olmayanlar

/*


??ncelikle kendisinile at??lan ta???? alacak ve puan?? 101'i ge??iyor ve onunla per yapabiliyorsa o ta??la a??ma i??lemi yapacakt??r.
??ayet ??nceden a??m???? ve at??lan ta?? i??ine yar??yorsa yine al??p atma i??lemi yapacakt??r.
E??er at??lan ta?? i??ine yaram??yorsa:
ta?? ??ekildi??inde per_olmayanlara at??lacak ve i??erisinde per olu??turulup olu??turulmad?????? kontrol edilecek, ??ayet
yoksa hi??bir??ey yap??lmadan en k??????k per olmayan ta???? at??lacakt??r.

*/

function tas_eklenince_per_oluyormu(per_olmayanlar,alinan_tas){
    var new_dizi = per_olmayanlar;
    new_dizi.push(alinan_tas);
    var per_olmayanlarda_kirmilar  = new Array();
    var per_olmayanlarda_siyahlar  = new Array();
    var per_olmayanlarda_maviler  = new Array();
    var per_olmayanlarda_sarilar  = new Array();

    var count = 0;
    var uzunluk = new_dizi.length;
    while(count < uzunluk){
        if(new_dizi[count].get_color() == "red"){
            per_olmayanlarda_kirmilar.push(new_dizi[count]);
        }else if(new_dizi[count].get_color() == "black"){
            per_olmayanlarda_siyahlar.push(new_dizi[count]);
        }else if(new_dizi[count].get_color() == "blue"){
            per_olmayanlarda_maviler.push(new_dizi[count]);
        }else if(new_dizi[count].get_color() == "yellow"){
            per_olmayanlarda_sarilar.push(new_dizi[count]);
        }
        count++;
    }
    if(ayni_renkte_per_ara(per_olmayanlarda_kirmilar) != 0){
        // demekki k??rm??z??larda bir per bulunmu??tur di??erlerine bakmaya gerekyotur ????nk?? per olmayanlarin i??erisinde ??ekilen ta?? en fazla bir per yapabilir.
        return ayni_renkte_per_ara(per_olmayanlarda_kirmilar);

    }else if(ayni_renkte_per_ara(per_olmayanlarda_maviler) != 0){

        return ayni_renkte_per_ara(per_olmayanlarda_maviler);

    }else if(ayni_renkte_per_ara(per_olmayanlarda_siyahlar) != 0){

        return ayni_renkte_per_ara(per_olmayanlarda_siyahlar);
    }else if(ayni_renkte_per_ara(per_olmayanlarda_sarilar) != 0){

        return ayni_renkte_per_ara(per_olmayanlarda_sarilar);
    }

    // buraya kadar geldiysek e??er artan s??rada per yok demektir bundan sonra ayn?? sayilara g??re s??ralay??p ayn?? say?? varm?? diye bakmal??y??z.
    new_dizi = ayni_sayi_farkli_renk_sirala(new_dizi);
    if(ayni_sayida_per_ara(new_dizi) != 0){
        return ayni_sayida_per_ara(new_dizi);
    }

    return 0; //buraya kadar geldiyse ta?? i??imize yaram??yor demektir.

}
// ??ekilen ta?? i??e yar??yormu diye yard??mc?? fonksiyonlarimiz.
function ayni_renkte_per_ara(aranacak_dizi){
    var count = 0;
    aranacak_dizi = ayni_renkleri_sirala(aranacak_dizi);
    var uzunluk = aranacak_dizi.length;
    while(count < uzunluk-2){
        if(aranacak_dizi[count].get_number() == aranacak_dizi[count+1].get_number() +1 ){
            if(aranacak_dizi[count+1].get_number() == aranacak_dizi[count+2].get_number() +1){
                return [aranacak_dizi[count],aranacak_dizi[count+1],aranacak_dizi[count+2]];
            }
        }
        count++;
    }
    return 0;
}

//cekilen ta?? i??e yar??yormu diye ayn?? say??da per yap??yormu diye bak??yoruz.
function ayni_sayida_per_ara(aranacak_dizi){
    var count = 0;
    var uzunluk = aranacak_dizi.length;
    while(count < uzunluk-2){
        if((aranacak_dizi[count].get_number() == aranacak_dizi[count+1].get_number())  && (aranacak_dizi[count+1].get_number() == aranacak_dizi[count+2].get_number()) ) {
            if(( aranacak_dizi[count].get_color() != aranacak_dizi[count+1].get_color()) && (aranacak_dizi[count].get_color() != aranacak_dizi[count+2].get_color() )){
                if(aranacak_dizi[count+1].get_color() != aranacak_dizi[count+2].get_color() ){
                    return [aranacak_dizi[count],aranacak_dizi[count+1],aranacak_dizi[count+2]];
                }
            }
        }
        count++;
    }
    return 0;

}

function per_olanlarin_sayisini_bul(per_olanlar){
    var count = 0;
    var uzunluk = per_olanlar.length;
    var per_toplami = 0;
    while(count < uzunluk){
        while(per_olanlar[count] != undefined){
            per_toplami += per_olanlar[count].get_number();
            count++;
        }
        count++;
    }
    return per_toplami;
}



function yandaki_tas_isimize_yararmi(per_olmayanlar,onceden_actimi,perin_puani,alinacak_tas){
    //??lk olarak per olmayanlarda i??imize yar??yormu diye bakmal??y??z.
    if(tas_eklenince_per_oluyormu(per_olmayanlar,alinacak_tas) != 0){
        if(onceden_actimi == 0){
            yeni_perlerimiz = tas_eklenince_per_oluyormu(per_olmayanlar,alinacak_tas);
            var count = 0;
            var uzunluk = yeni_perlerimiz.length;
            var yeni_per_puanimiz = 0;
            while(count < uzunluk){
                yeni_per_puanimiz += yeni_perlerimiz[count].get_number();
                count++;
            }
            if(yeni_per_puanimiz+perin_puani <101){
                return 0; // al??nan ta?? i??imize yar??yor ancak per yapmaya puan?? yetmiyorsa yine alm??yoruz.
            }
            return yeni_perlerimiz; //al??nan per hem i??imize yarad?? hemde yeni per puanimiz demekki 101 ge??mi??tir.
        }else{
            // onceden a??ma i??lemi ger??ekle??tiyse direk ta???? almal??y??z.
            return tas_eklenince_per_oluyormu(per_olmayanlar,alinacak_tas);
        }
    }
    
    return 0; // per yapam??yorsak i??imize yaramad??????ndan eminiz.


}