class tas{
    constructor(color,name,konum){
        this.color = color;
        this.name = name;
        this.konum = konum;
        this.hareket_ettimi = 0;
    }
    tasi_konumlandir(){
        var idsi = "oyun-tas-"+this.konum;
        document.getElementById(idsi).innerHTML += "<img src='resimler/"+this.name+"-"+this.color+".png'></img>";
    }
    tas_konum_degistir(yeni_konum){
        var idsi = "oyun-tas-"+this.konum;
        document.getElementById(idsi).innerHTML ="";
        this.konum = yeni_konum;
        var idsi = "oyun-tas-"+this.konum;
        document.getElementById(idsi).innerHTML ="<img src='resimler/"+this.name+"-"+this.color+".png'></img>";
    }
    tas_hareket_etti(){
        this.hareket_ettimi = 1;
    }
    get_color(){
        return this.color;
    }
    get_name(){
        return this.name;
    }
    get_konum(){
        return this.konum;
    }
    get_hareketettimi(){
        return this.hareket_ettimi
    }
}


var taslar = new Array();
var secili_tas = "";
var sira = "beyaz";
var rengi_degisen_divler = new Array();
var beyaz_sah_pozisyonu =60;
var siyah_sah_pozisyonu = 4;
var sah_tehlikedemi= 0;


taslar[0] = new tas("siyah","kale",0);
taslar[0].tasi_konumlandir();

taslar[1] = new tas("siyah","at",1);
taslar[1].tasi_konumlandir();

taslar[2] = new tas("siyah","fil",2);
taslar[2].tasi_konumlandir();

taslar[3] = new tas("siyah","vezir",3);
taslar[3].tasi_konumlandir();

taslar[4] = new tas("siyah","sah",4);
taslar[4].tasi_konumlandir();

taslar[5] = new tas("siyah","fil",5);
taslar[5].tasi_konumlandir();

taslar[6] = new tas("siyah","at",6);
taslar[6].tasi_konumlandir();

taslar[7] = new tas("siyah","kale",7);
taslar[7].tasi_konumlandir();
var count = 8;
while(count < 16){
    taslar[count] = new tas("siyah","piyon",count);
    taslar[count].tasi_konumlandir();
    count++;
}


var count = 48;
while(count < 56){
    taslar[count] = new tas("beyaz","piyon",count);
    taslar[count].tasi_konumlandir();
    count++;
}
taslar[56] = new tas("beyaz","kale",56);
taslar[56].tasi_konumlandir();

taslar[57] = new tas("beyaz","at",57);
taslar[57].tasi_konumlandir();

taslar[58] = new tas("beyaz","fil",58);
taslar[58].tasi_konumlandir();

taslar[59] = new tas("beyaz","vezir",59);
taslar[59].tasi_konumlandir();

taslar[60] = new tas("beyaz","sah",60);
taslar[60].tasi_konumlandir();

taslar[61] = new tas("beyaz","fil",61);
taslar[61].tasi_konumlandir();

taslar[62] = new tas("beyaz","at",62);
taslar[62].tasi_konumlandir();

taslar[63] = new tas("beyaz","kale",63);
taslar[63].tasi_konumlandir();



function tas_sec(hangi_tas){
    if(taslar[hangi_tas] == undefined){
        if((secili_tas != "")|| secili_tas =="0" ){
            var konum = secili_tas;
            console.log(konum);
            if(taslar[konum] !=undefined){
                if(tas_hamle_uygunmu(hangi_tas) == 1){
                    if(sah_tehlikedemi == 0){
                        tas_yeri_degis(konum,hangi_tas);
                        taslar[hangi_tas].tas_hareket_etti();
                        div_renkleri_normallestir(rengi_degisen_divler);
                        sah_sikintidami(hangi_tas);
                        
                    }else{
                        
                    }
                }else{
                    alert("Bu taş buraya hareket etmez.");
                }
            }
            secili_tas = "";
        }
    }else if(taslar[hangi_tas] !=undefined && secili_tas != ""){
        // hangi tas undefined olarak boşaltılmalıdır.
        if(tas_yeme_kontrol(taslar[hangi_tas]) == 1){
            if(taslar[hangi_tas].get_name() == "sah"){
                alert("Şahı korumadığınız için oyun bitti.");
                window.location.reload()

            }
            if(taslar[hangi_tas].get_color() == "beyaz"){
                document.getElementById("beyaz").innerHTML += "<img src='resimler/"+taslar[hangi_tas].get_name()+"-"+taslar[hangi_tas].get_color()+".png'></img>";
            }else{
                document.getElementById("siyah").innerHTML += "<img src='resimler/"+taslar[hangi_tas].get_name()+"-"+taslar[hangi_tas].get_color()+".png'></img>";

            }
            taslar[hangi_tas] = undefined;
            tas_yeri_degis(secili_tas,hangi_tas);
            taslar[hangi_tas].tas_hareket_etti();
            div_renkleri_normallestir(rengi_degisen_divler);
            
            secili_tas = "";
        }else{
            secili_tas = "";
            alert("Bu taş buraya hareket edemez.");
            div_renkleri_normallestir(rengi_degisen_divler);

            if(sira == "beyaz"){
                sira = "siyah";
            }else{
                sira = "beyaz";
            }
        }

    }else{
        div_renkleri_normallestir(rengi_degisen_divler);

        var tas_renk = taslar[hangi_tas].get_color();
        var tas_adi = taslar[hangi_tas].get_name();
        var tas_konum = taslar[hangi_tas].get_konum();
        if(secili_tas == ""){
            
            if(tas_renk == sira){
                if(tas_renk == "siyah"){
                    if(tas_adi == "piyon"){
                        rengi_degisen_divler = null;
                        rengi_degisen_divler = new Array();
                        console.log(taslar[hangi_tas].get_hareketettimi());
                        rengi_degisen_divler = piyon_hareket_siyah(rengi_degisen_divler,taslar[hangi_tas].get_hareketettimi(),tas_konum);
                        
                        div_renkleri_soldur(rengi_degisen_divler);
                    }else if(tas_adi == "kale"){
                        rengi_degisen_divler = null;
                        rengi_degisen_divler = new Array();
                
                        rengi_degisen_divler = kale_hareket(rengi_degisen_divler,tas_konum);
                        
                        div_renkleri_soldur(rengi_degisen_divler);
                        console.log(rengi_degisen_divler);
                    }else if(tas_adi == "at"){

                        rengi_degisen_divler = null;
                        rengi_degisen_divler = new Array();
                
                        rengi_degisen_divler = at_hareket(rengi_degisen_divler,tas_konum);
                        
                        div_renkleri_soldur(rengi_degisen_divler);
                        console.log(rengi_degisen_divler);
                    }else if(tas_adi == "fil"){
                        rengi_degisen_divler = null;
                        rengi_degisen_divler = new Array();
                
                        rengi_degisen_divler = fil_hareket(rengi_degisen_divler,tas_konum);
                        
                        div_renkleri_soldur(rengi_degisen_divler);
                    }else if(tas_adi == "vezir"){
                        rengi_degisen_divler = null;
                        rengi_degisen_divler = new Array();

                        rengi_degisen_divler = fil_hareket(rengi_degisen_divler,tas_konum);
                        rengi_degisen_divler = kale_hareket(rengi_degisen_divler,tas_konum);
                        div_renkleri_soldur(rengi_degisen_divler);
                    }else if(tas_adi == "sah"){
                        rengi_degisen_divler = null;
                        rengi_degisen_divler = new Array();

                        rengi_degisen_divler = sah_hareket(rengi_degisen_divler,tas_konum);
                        console.log(rengi_degisen_divler);
                        div_renkleri_soldur(rengi_degisen_divler);
                    }
                }
            if(tas_renk == "beyaz"){
                if(tas_adi == "piyon"){
                    //2 birim ileri == a-8,a-16
                    rengi_degisen_divler = null;
                    rengi_degisen_divler = new Array();
                    rengi_degisen_divler = piyon_hareket_beyaz(rengi_degisen_divler,tas_konum,taslar[hangi_tas].get_hareketettimi());
                    
                    div_renkleri_soldur(rengi_degisen_divler);
                    console.log(rengi_degisen_divler);
                    
                }else if(tas_adi == "at"){
                    rengi_degisen_divler = null;
                    rengi_degisen_divler = new Array();
            
                    rengi_degisen_divler = at_hareket(rengi_degisen_divler,tas_konum);
                    
                    div_renkleri_soldur(rengi_degisen_divler);
                    console.log(rengi_degisen_divler);
                }else if(tas_adi == "fil"){
                    rengi_degisen_divler = null;
                    rengi_degisen_divler = new Array();
            
                    rengi_degisen_divler =fil_hareket(rengi_degisen_divler,tas_konum);
                    
                    div_renkleri_soldur(rengi_degisen_divler);
                }else if(tas_adi == "kale"){
                    rengi_degisen_divler = null;
                    rengi_degisen_divler = new Array();
            
                    rengi_degisen_divler = kale_hareket(rengi_degisen_divler,tas_konum);
                    
                    div_renkleri_soldur(rengi_degisen_divler);
                }else if(tas_adi == "vezir"){
                    rengi_degisen_divler = null;
                    rengi_degisen_divler = new Array();
            
                    rengi_degisen_divler = fil_hareket(rengi_degisen_divler,tas_konum);
                    rengi_degisen_divler = kale_hareket(rengi_degisen_divler,tas_konum);

                    div_renkleri_soldur(rengi_degisen_divler);
                }else if(tas_adi == "sah"){
                    rengi_degisen_divler = null;
                    rengi_degisen_divler = new Array();
            
                    rengi_degisen_divler = sah_hareket(rengi_degisen_divler,tas_konum);

                    div_renkleri_soldur(rengi_degisen_divler);
                }
            }
            if(sira == "beyaz"){
                sira= "siyah";
            }else{
                sira = "beyaz";
            }
            secili_tas = tas_konum;

        }else{
            alert("Sıra sizde değil.");
            secili_tas = "";
        }
        }else{
            secili_tas = "";
        }
    }
}   
