var per_score = 0;
var per_olmayanlar  =new Array();

function ayni_sayi_3_lu_permi(tas1,tas2,tas3){
    var score = [0,0,0,0];
    if(tas1 == undefined){
        return 0;
    }
    if(tas1.get_color() == "red"){
        score[0] +=1;
    }else if(tas1.get_color() == "black"){
        score[1] +=1;
    }else if(tas1.get_color() == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }
    if(tas2==undefined){
        return 0;
    }
    if(tas2.get_color() == "red"){
        score[0] +=1;
    }else if(tas2.get_color() == "black"){
        score[1] +=1;
    }else if(tas2.get_color() == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }
    if(tas3 == undefined){
        return 0;
    }else if(tas3.get_color() == "red"){
        score[0] +=1;
    }else if(tas3.get_color() == "black"){
        score[1] +=1;
    }else if(tas3.get_color() == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }



    var count = 0;
    var total_score = 0;
    while(count < 4){
        if(score[count] == 1 ){
            total_score +=1;
        }
        count++;
    }   
    if(total_score== 3){
        return 1;
    }
    return 0;
}

function ayni_sayi_4_lu_permi(tas1,tas2,tas3,tas4){

    var score = [0,0,0,0];
    if(tas1 == undefined){
        return 0;
    }
    if(tas1.get_color() == "red"){
        score[0] +=1;
    }else if(tas1.get_color() == "black"){
        score[1] +=1;
    }else if(tas1.get_color == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }
    if(tas2 == undefined){
        return 0;
    }
    if(tas2.get_color() == "red"){
        score[0] +=1;
    }else if(tas2.get_color() == "black"){
        score[1] +=1;
    }else if(tas2.get_color() == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }
    if(tas3 == undefined){
        return 0;
    }else if(tas3.get_color() == "red"){
        score[0] +=1;
    }else if(tas3.get_color() == "black"){
        score[1] +=1;
    }else if(tas3.get_color() == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }
    if(tas4 == undefined){
        return 0;
    }if(tas4.get_color() == "red"){
        score[0] +=1;
    }else if(tas4.get_color() == "black"){
        score[1] +=1;
    }else if(tas4.get_color() == "blue"){
        score[2]+=1;
    }else{
        score[3]+=1;
    }
    
    if(score[0] != 1){
        return 0;
    }
    if(score[1] != 1){
        return 0;
    }
    if(score[2] != 1){
        return 0;
    }
    if(score[3] != 1){
        return 0;
    }
    return 1;
}

function ayni_sayi_farklı_renk_sirala(player_x){
    var new_array = new Array();
    var uzunluk = player_x.length;
    var count = 0;
    var bakilan_tas_sayisi = 13;
    while(count < uzunluk){
        count2 = 0;
        while(count2 < uzunluk){
            if(player_x[count2] !=undefined){
                if(player_x[count2].get_number() == bakilan_tas_sayisi){
                    new_array.push(player_x[count2]);
                }
            }
            count2++;
        }
        count++;
        bakilan_tas_sayisi--;
    }
    return new_array;
}


function tas_renklerine_gore_ayir(player_x){
    color_red = new Array();
    color_black = new Array();
    color_blue = new Array();
    color_yellow = new Array();
    color_sahte= new Array();
    var count = 0;
    while(player_x[count] != undefined){
        if(player_x[count].get_color() == "red"){
            color_red.push(player_x[count]);
        }else if(player_x[count].get_color() == "black"){
            color_black.push(player_x[count]);
        }
        else if(player_x[count].get_color() == "blue"){
            color_blue.push(player_x[count]);
        }
        else if(player_x[count].get_color() == "yellow"){
            color_yellow.push(player_x[count]);
        }else{
            color_sahte.push(player_x[count]);
        }
        count++;
    }
    color_black = renk_dizisi_sirala(color_black);
    color_red = renk_dizisi_sirala(color_red);
    color_yellow = renk_dizisi_sirala(color_yellow);
    color_blue= renk_dizisi_sirala(color_blue);

    player_x = [];
    player_x=color_red.concat(color_black).concat(color_blue).concat(color_yellow).concat(color_sahte);
    return player_x;
}
function renk_dizisi_sirala(color_x){
    var uzunluk = color_x.length;
    var count  = 0;
    while(count < uzunluk){
        var count2 = 0;
        while(count2 < uzunluk-1-count){
            if(color_x[count2].get_number() < color_x[count2+1].get_number()){
                var koruma = color_x[count2];
                color_x[count2] = color_x[count2+1]
                color_x[count2+1] = koruma;
            }
            count2++;
        }
        count++;
    }
    return color_x;
}
function x_renkte_per_ara(color_x){
    var count = 0;
    var uzunluk = color_x.length;
    var perli_dizi = new Array();
    while(count+2 < uzunluk){
        if((color_x[count] != undefined && color_x[count+1]!=undefined) && (color_x[count].get_number() == color_x[count+1].get_number() +1)){
            if((color_x[count+1] != undefined && color_x[count+2]!=undefined) && (color_x[count+1].get_number() == color_x[count+2].get_number() +1) ){
                perli_dizi.push(color_x[count]);
                perli_dizi.push(color_x[count+1]);
                perli_dizi.push(color_x[count+2]);
                perli_dizi.push(undefined);

                per_score+= color_x[count].get_number()+color_x[count+1].get_number()+color_x[count+2].get_number();

                color_x[count] = undefined;
                color_x[count+1] = undefined;
                color_x[count+2] = undefined;

                count+=3;
            }else{
                count++;
            }
        }else{
            count++;
        }
    }
    count = 0;
    while(count < uzunluk){
        if(color_x[count] !=undefined){
            per_olmayanlar.push(color_x[count]);
        }
        count++;
    }
    perli_dizi.push(undefined);
    return perli_dizi;
}
function ilk_perleri_duzenle(player_x){
    player_x = tas_renklerine_gore_ayir(player_x);
    var count = 0;
    var uzunluk = player_x.length;

    var color_red = new Array();
    var color_black = new Array();
    var color_blue = new Array();
    var color_yellow = new Array();
    var sahte = new Array();
    while(count<uzunluk ){
        if(player_x[count].get_color() == "red" ){
            color_red.push(player_x[count]);
        }else if(player_x[count].get_color() == "black" ){
            color_black.push(player_x[count]);
        }else if(player_x[count].get_color() == "blue" ){
            color_blue.push(player_x[count]);
        }else if(player_x[count].get_color() == "yellow"){
            color_yellow.push(player_x[count]);
        }else{
            sahte.push(player_x[count]);
        }
        count++;
    }
   

    color_red    = x_renkte_per_ara(color_red);
    color_black  = x_renkte_per_ara(color_black);
    color_blue   = x_renkte_per_ara(color_blue);
    color_yellow = x_renkte_per_ara(color_yellow);



    player_x= [];
    player_x=color_red.concat(color_black).concat(color_blue).concat(color_yellow).concat(sahte).concat(per_olmayanlar);
    var count= player_x.length;
    while(count < 28){
        player_x[count] = undefined;
        count++;
    }
    return player_x;
}

function player_1_per_hesapla(){
    var count = 0;
    var uzunluk = player_1.length;
    var per_puani = 0;
    while(count < uzunluk-3){
        if(( (player_1[count] != undefined) && (player_1[count+1] != undefined) ) && ( (player_1[count+2] != undefined) && (player_1[count+3] == undefined) )){
            // yan yana 3 taş dizilidir.
            //ilk olarak artan sırada aynı taşmı diye bakılıyor.
            if((player_1[count].get_color() == player_1[count+1].get_color() ) && (player_1[count+1].get_color() == player_1[count+2].get_color())){
                // aynı renktelerse:
                if( (player_1[count].get_number() == player_1[count+1].get_number()+1 ) && (player_1[count+1].get_number() == player_1[count+2].get_number() +1)){
                    //artan sırada dizilmiş demektir.
                    per_puani += player_1[count+1].get_number()*3;
                    count+=3;
                }
            }else if( (player_1[count].get_color() != player_1[count+1].get_color()) && (player_1[count].get_color() != player_1[count+2].get_color())  ){
                if(player_1[count+1].get_color() != player_1[count+2].get_color() ){
                    if(( player_1[count].get_number() == player_1[count+1].get_number() ) && (player_1[count+1].get_number() == player_1[count+2].get_number() ) ){
                        per_puani += player_1[count].get_number()*3;
                        count+=3;
                    }
                }
            }
        }
        count+=1;
    }
    document.getElementById("player_1_score").innerHTML = per_puani;
}

function oyuncu_1_tas_cek(){
    var cekilen_tas = yerdeki_taslar[yerdeki_taslar.length-1];
    yerdeki_taslar.pop();
    var uzunluk = player_1.length-1;
    while(-1<uzunluk){
        if(player_1[uzunluk] == undefined ){
            player_1[uzunluk] = cekilen_tas;
            document.getElementById("player_"+uzunluk+"_tas").innerHTML = tas_to_grafik(cekilen_tas);
            break;
        }
        uzunluk--;
    }
}

function oyuncu_tas_cek(x){
    if(x==2){
        player_2_per_olmayanlar.push(yerdeki_taslar[yerdeki_taslar.length-1]);
        yerdeki_taslar.pop();
    }else if(x==3){
        player_3_per_olmayanlar.push(yerdeki_taslar[yerdeki_taslar.length-1]);
        yerdeki_taslar.pop();
    }else {
        player_3_per_olmayanlar.push(yerdeki_taslar[yerdeki_taslar.length-1]);
        yerdeki_taslar.pop();
    }
    document.getElementById("yerde_kac_tas_var").innerHTML = "<h5>"+yerdeki_taslar.length+"</h5>";

    
}
