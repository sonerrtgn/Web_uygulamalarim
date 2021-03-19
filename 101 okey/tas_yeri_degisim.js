var degisim_tut= -1;


function tas_degis(degisim_yeri){
    if(degisim_tut != -1 && degisim_yeri != degisim_tut){ // onceden bir taş seçilmiştir değişim işlemi yapılacaktir.
        console.log(degisim_tut);
        console.log(degisim_yeri);

        var koruma = player_1[degisim_yeri];
        player_1[degisim_yeri] = player_1[degisim_tut];
        player_1[degisim_tut] = koruma;
        document.getElementById("player_"+degisim_tut+"_tas").innerHTML=tas_to_grafik(player_1[degisim_tut]);
        document.getElementById("player_"+degisim_yeri+"_tas").innerHTML=tas_to_grafik(player_1[degisim_yeri]);
        degisim_tut = -1;
        console.log(player_1);
        //her yer değişiminden sonra score bilgisi güncellenmektedir.
        player_1_per_hesapla();

    }else if(degisim_tut == degisim_yeri){
        console.log("ayni")
        degisim_tut=-1;
    }else{//önceden taş seçilmemiştir. yeni taş seçimi yapılacaktır.
        degisim_tut = degisim_yeri;
    }
}