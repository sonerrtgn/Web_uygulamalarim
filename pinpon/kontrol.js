//obje tanımlamaları
var kullanici = document.getElementById("oyuncu-kontrol");
var top = document.getElementById("top");
var robot = document.getElementById("robot");

window.onmousemove=function(konum){
    var oyuncu = document.getElementById("oyuncu-kontrol");
    var oyuncunun_konuum_x=oyuncu.offsetTop;
    var yeni_konum = konum.clientY;
    if(yeni_konum>219 && yeni_konum<408){
    oyuncu.style.top=(yeni_konum-220)+"px";
    }
    if(yeni_konum<219){
        oyuncu.style.top=0+"px";
    }
    if(yeni_konum>408){
        oyuncu.style.top=185+"px";
    }
}

var puan=0;
var hareket_x=-5;
var hareket_y=-5;
function top_hareket(){
    var puanim=document.getElementById("puan");
    var top = document.getElementById("top");
    var topun_konumu_y= top.offsetLeft;
    var topun_konumu_x=top.offsetTop;
    var oyuncu = document.getElementById("oyuncu-kontrol");
    var oyuncunun_konuum_x=oyuncu.offsetTop;

    top.style.top =(topun_konumu_x+hareket_x)+"px";
    top.style.left=(topun_konumu_y+hareket_y)+"px";
  
    if(topun_konumu_x<5){
        hareket_x=-hareket_x;
        top.style.top=10+"px";
    }
    if(topun_konumu_y<12){
        if(oyuncunun_konuum_x<topun_konumu_x+25 && oyuncunun_konuum_x+130>topun_konumu_x+25){
            hareket_y=-hareket_y;
            top.style.left=17+"px";
            puan=puan+10;
            puanim.innerHTML="<h3>Puanınız:"+puan+"</h3>";
        }
    }
    if(topun_konumu_y<0){
        alert("yandınız.");
        top.style.top =100+"px";
        top.style.left=200+"px";
        hareket_x=5;
        hareket_y=5;
        puan=0;
        puanim.innerHTML="<h3> Puanınız:"+puan+"</h3>"
    }
    if(topun_konumu_x>260){
        hareket_x=-hareket_x;
        top.style.top=255+"px";
    }
    if(topun_konumu_y>630){
    hareket_y=-hareket_y;
    top.style.left=625+"px";

        if(hareket_x>0){
            hareket_x=hareket_x+1;
            console.log(hareket_x);
        }else{
            hareket_x=hareket_x-1;
            console.log(hareket_x);
        }
        if(hareket_y>0){
            hareket_y=hareket_y+1;
            console.log(hareket_y);

        }else{
            hareket_y=hareket_y-1;
            console.log(hareket_y);
        }
    } 
}
setInterval(top_hareket,20);
