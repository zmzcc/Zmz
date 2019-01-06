window.onload = function() {
    var topfloat = document.getElementById('total_1');
    window.onscroll = function(){
        var st = document.documentElement.scrollTop || document.body.scrollTop;
        if(st>130){
            topfloat.style.position = 'fixed';
        }else{
            topfloat.style.position = 'static';
        }
    };
};

function checked150ml() {
    var Checked150ml = document.getElementById('checked150ml');
    var Checked300ml = document.getElementById('checked300ml');
    var ml = document.getElementById('ml');
    Checked150ml.innerHTML = '<div class="bg3_1_3_checked" id = "checked150ml" onclick="checked150ml()">150ml</div>';
    Checked300ml.innerHTML = '<div class="bg3_1_3_noChecked" id = "checked300ml" onclick="checked300ml()">300ml</div>';
    ml.innerText = "150ml";
}

function checked300ml() {
    var Checked150ml = document.getElementById('checked150ml');
    var Checked300ml = document.getElementById('checked300ml');
    var ml = document.getElementById('ml');
    Checked150ml.innerHTML = '<div class="bg3_1_3_noChecked" id = "checked150ml" onclick="checked150ml()">150ml</div>';
    Checked300ml.innerHTML = '<div class="bg3_1_3_checked" id = "checked300ml" onclick="checked300ml()">300ml</div>';
    ml.innerText = "300ml";
}

function pic1checked() {
    var pic1 = document.getElementById("pic1");
    var pic2 = document.getElementById("pic2");
    var Simg = document.getElementById("Simg");
    var Bimg = document.getElementById("Bimg");
    Simg.innerHTML = '<img src="img/pp0.jpeg" alt=""/>';
    Bimg.innerHTML = '<img src="img/pp0B.jpg" alt=""/>';
    pic1.innerHTML = '<div class="bg3_1_4_checked"><img src="img/sp0.jpeg" alt="" onclick="pic1checked()"></div>';
    pic2.innerHTML = '<div class="bg3_1_4_noChecked"><img src="img/sp1.jpeg" alt="" onclick="pic2checked()"></div>';
}

function pic2checked() {
    console.log("sdfsdfsdfsd");
    var pic1 = document.getElementById("pic1");
    var pic2 = document.getElementById("pic2");
    var Simg = document.getElementById("Simg");
    var Bimg = document.getElementById("Bimg");
    Simg.innerHTML = '<img src="img/pp1.jpeg" alt=""/>';
    Bimg.innerHTML = '<img src="img/pp1B.jpg" alt=""/>';
    pic1.innerHTML = '<div class="bg3_1_4_noChecked"><img src="img/sp0.jpeg" alt="" onclick="pic1checked()"></div>';
    pic2.innerHTML = '<div class="bg3_1_4_checked"><img src="img/sp1.jpeg" alt="" onclick="pic2checked()"></div>';
}

function jian() {
    var num = document.getElementById('goumai');
    var jian = document.getElementById('jian');
    var jia = document.getElementById('jia');
    var i = num.innerText;
    if (i > 0){
        i--;
        num.innerText = i;
        jia.style.cursor = "pointer";
    }
    if (i === 0)
        jian.style.cursor = "no-drop";

}
function jia() {
    var num = document.getElementById('goumai');
    var jian = document.getElementById('jian');
    var jia = document.getElementById('jia');
    var i = num.innerText;
    if (i < 5){
        i++;
        num.innerText = i;
        jian.style.cursor = "pointer";
    }
    if (i === 5)
        jia.style.cursor = "no-drop";
}