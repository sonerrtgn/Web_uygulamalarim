class player{

    constructor(name){
        this.konum_x = 0;
        this.can = 100;
        this.mermi_guc=5;
        this.hareket_hizi = 5;
        this.div_id = name;
        document.getElementById("game").innerHTML += "<div id='"+this.div_id+ "' class='"+this.div_id+"'> </div>" ;
        document.getElementById(name).style.top = 250+"px";
    }

    get_konum_x(){
        return this.konum_x;
    }
    get_can(){
        document.getElementById("skor-tablosu").innerHTML = "Can:"+this.can;
    }
    sol_git(){
        if(this.konum_x > 0){
            this.konum_x -=5;
            document.getElementById(this.div_id).style.left = this.konum_x+"px";
        }

    }
    sag_git(){
        if(this.konum_x < 450){
            this.konum_x += 5;
            document.getElementById(this.div_id).style.left = this.konum_x+"px";
        }
    }
}

class dusman{
    constructor(){
        this.konum_x = 0;
        this.can = 100;
        this.mermi_guc=5;
        this.hareket_hizi = 5;
        document.getElementById("game").innerHTML += "<div id='dusman' class='dusman'> </div>" ;
    }
    get_can(){
        document.getElementById("skor-tablosu-dusman").innerHTML = "<h2>Can:"+this.can+"</h2>";
    }
    get_konum_x(){
        var kotu = document.getElementById("dusman");
        return kotu.offsetLeft;
    }
    vurulma(){
        this.can = this.can-10;
        this.get_can();
    }
    sol_git(){
        if(this.konum_x > 0){
            this.konum_x -=5;
            document.getElementById("dusman").style.left = this.konum_x+"px";
        }

    }
    sag_git(){
        if(this.konum_x < 450){
            this.konum_x += 5;
            document.getElementById("dusman").style.left = this.konum_x+"px";
        }
    }
}

//dusman hareketleri
var hareket_yonu = 10; 
function hareket_dusman(){
    var dusman = document.getElementById("dusman");
    var posx = dusman.offsetLeft;
    if(posx == 450){
        hareket_yonu = -hareket_yonu;
    }else if(posx < 0){
        hareket_yonu = -hareket_yonu;
    }
    dusman.style.left = posx+hareket_yonu +"px";
}
setInterval(hareket_dusman,50);


var kontrol = 0;
var kontrol_vurma = 0;
function mermi_yukari(){
    if(kontrol_vurma == 0){
        var mermi = document.getElementById("mermi");
        var mermi_y = mermi.offsetTop;
        var mermi_x = mermi.offsetLeft;
        mermi.style.top = mermi_y -10+"px";
        if(mermi_y == 10){
            kontrol = 0;
            mermi.style.display = "none";
        }
        if(mermi_y < 50){
            if(kotuler.get_konum_x() < mermi_x+25){
                if(kotuler.get_konum_x() +50 > mermi_x){
                    kontrol_vurma = 1;
                    kotuler.vurulma();
                    kontrol = 0;
                    mermi.style.display = "none";
                }
            } 
        }
    }
}
var player1 = new player("player");
var kotuler = new dusman();

window.onkeydown = function(harf){
    if(harf.keyCode == 68){
        player1.sag_git();
    }else if(harf.keyCode == 65){
        player1.sol_git();
    }else if(harf.keyCode == 32){
        if(kontrol==0){
            var player = document.getElementById("player");
            var player_x = player.offsetLeft;
            document.getElementById("mermi").style.left = player_x+12+"px";
            document.getElementById("mermi").style.top = 250+"px";
            document.getElementById("mermi").style.display = "block";
            let yukari = setInterval(mermi_yukari,20);
            setTimeout(clearInterval,1250,yukari);
            kontrol = 1;
            kontrol_vurma = 0;
        }
    }
}