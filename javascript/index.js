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

    var n=document.getElementById("news");
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");
    p2.innerHTML=p1.innerHTML;
    var f=function(){
        n.scrollTop++;
        if(n.scrollTop>=p1.offsetHeight){
            n.scrollTop=0;
        }
    };
    var i=setInterval(f,20);
    n.onmouseover= function(){
        clearInterval(i);
    };
    n.onmouseout= function(){
        i=setInterval(f,20);
    };

    var fudongbox1 = document.getElementById('fudong1');
    fudongbox1.onmouseover = moveout1;
    function moveout1(){
        animate(fudongbox1,{right:0},function(){});
    }
    fudongbox1.onmouseout= moveback1;
    function moveback1(){
        animate(fudongbox1,{right:-80},function(){});
    }

    var fudongbox2 = document.getElementById('fudong2');
    fudongbox2.onmouseover = moveout2;
    function moveout2(){
        animate(fudongbox2,{right:0},function(){});
    }
    fudongbox2.onmouseout= moveback2;
    function moveback2(){
        animate(fudongbox2,{right:-80},function(){});
    }

    var fudongbox3 = document.getElementById('fudong3');
    fudongbox3.onmouseover = moveout3;
    function moveout3(){
        document.getElementById("fudong3_1").style.display = "none";
        document.getElementById("fudong3_2").style.display = "block";
        animate(fudongbox3,{right:0},function(){});
    }
    fudongbox3.onmouseout= moveback3;
    function moveback3(){
        document.getElementById("fudong3_2").style.display = "none";
        document.getElementById("fudong3_1").style.display = "block";
        animate(fudongbox3,{right:-80},function(){});
    }

    var fudongbox4 = document.getElementById('fudong4');
    fudongbox4.onmouseover = moveout4;
    function moveout4(){
        animate(fudongbox4,{right:0},function(){});
    }
    fudongbox4.onmouseout= moveback4;
    function moveback4(){
        animate(fudongbox4,{right:-80},function(){});
    }
};
function body_right_3_1_2_change() {
    var  myselect=document.getElementById("body_right_3_1_2");
    var index=myselect.selectedIndex;
    document.getElementById("body_right_3_1_3").innerHTML = '<span class=\"body_right_3_1_3\" id=\"body_right_3_1_3\">￥' + myselect.options[index].value+'</span>';
}