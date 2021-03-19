var islem = new Array();
var nedir = new Array();
islem[0] = 0;
function renk_normal(hangi_div){
    document.getElementById(hangi_div).style.backgroundColor = "dimgray";
}
function al1(){
    
    islem[0] = islem[0]*10+1;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-1").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-1");
}
function al2(){
    islem[0] = islem[0]*10+2;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-2").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-2");

}
function al3(){
    islem[0] = islem[0]*10+3;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";

    document.getElementById("sayi-3").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-3");
}
function al4(){
    islem[0] = islem[0]*10+4;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-4").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-4");
}
function al5(){
    islem[0] = islem[0]*10+5;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-5").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-5");
}
function al6(){
    islem[0] = islem[0]*10+6;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-6").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-6");
}
function al7(){
    islem[0] = islem[0]*10+7;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-7").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-7");
}
function al8(){
    islem[0] = islem[0]*10+8;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-8").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-8");
}
function al9(){
    islem[0] = islem[0]*10+9;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-9").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-9");
}
function al0(){
    islem[0] = islem[0]*10+0;
    document.getElementById("secili-sayi").innerHTML = "<h1>"+islem[0]+"</h1>";
    document.getElementById("sayi-0").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"sayi-0");
}

function topla(){
    nedir.push(String(islem[0]));
    nedir.push("+");
    islem[0] = 0;
    document.getElementById("secili-sayi").innerHTML ="";

    var nedir_uzunluk = nedir.length;
    var count = 0;
    document.getElementById("islem").innerHTML = "<h3>";
    while(count < nedir_uzunluk){
        document.getElementById("islem").innerHTML += nedir[count];
        count++;
    }
    document.getElementById("islem").innerHTML += "</h3>";
    document.getElementById("arti").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"arti");
}
function cikar(){
    nedir.push(String(islem[0]));
    nedir.push("-");
    islem[0] = 0;
    document.getElementById("secili-sayi").innerHTML ="";

    var nedir_uzunluk = nedir.length;
    var count = 0;
    document.getElementById("islem").innerHTML = "<h3>";
    while(count < nedir_uzunluk){
        document.getElementById("islem").innerHTML += nedir[count];
        count++;
    }
    document.getElementById("islem").innerHTML += "</h3>";
    document.getElementById("eksi").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"eksi");
}
function bol(){
    nedir.push(String(islem[0]));
    nedir.push("/");
    islem[0] = 0;
    document.getElementById("secili-sayi").innerHTML ="";

    var nedir_uzunluk = nedir.length;
    var count = 0;
    document.getElementById("islem").innerHTML = "<h3>";
    while(count < nedir_uzunluk){
        document.getElementById("islem").innerHTML += nedir[count];
        count++;
    }
    document.getElementById("islem").innerHTML += "</h3>";
    document.getElementById("bol").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"bol");
}
function carp(){
    nedir.push(String(islem[0]));
    nedir.push("*");
    islem[0] = 0;
    document.getElementById("secili-sayi").innerHTML ="";

    var nedir_uzunluk = nedir.length;
    var count = 0;
    document.getElementById("islem").innerHTML = "<h3>";
    while(count < nedir_uzunluk){
        document.getElementById("islem").innerHTML += nedir[count];
        count++;
    }
    document.getElementById("islem").innerHTML += "</h3>";
    document.getElementById("carp").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"carp");
}
function esittir(){
    nedir.push(String(islem[0]));
    islem[0]=0;
    var toplam = 0;
    var uzunluk = nedir.length;
    var count = 0;
    toplam = Number(nedir[count]);
    count++;
    while(count < uzunluk){
        if(nedir[count] == "+" ){
                toplam += Number(nedir[count+1]);
        }
        if(nedir[count] == "-" ){
            toplam -= Number(nedir[count+1]);

        }
        if(nedir[count] == "/" ){
            toplam = Number(toplam/nedir[count+1]);

        }
        if(nedir[count] == "*" ){
            toplam *= Number(nedir[count+1]);

        }
        count++;
    }
    document.getElementById("secili-sayi").innerHTML ="<h1>"+toplam+"</h1>";
    document.getElementById("islem").innerHTML ="";

    var nedir_uzunluk = nedir.length;
    count = 0;
    while(count < nedir_uzunluk){
        nedir.pop();
        count++;
    }

    islem[0] = Number(toplam);
    document.getElementById("esit").style.backgroundColor =  "red";

    setTimeout(renk_normal,40,"esit");
}
