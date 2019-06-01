/**
 * Created by DELL on 2018/10/18.
 */
window.onload=function(){
    var P_ul_list = document.getElementsByClassName("P_ul_list")[0];
    var speed = 0;
    showImg();
    P_ul_list.onmouseenter=function(){
        clearInterval(time);
    };
    P_ul_list.onmouseleave=function(){
        showImg();
    };
    function showImg(){
        time=setInterval(function(){
            speed+=1;
            if(speed>=470){
                speed=0;
                P_ul_list.style.marginLeft=-speed+"px";
            }
            else{
                P_ul_list.style.marginLeft=-speed+"px";
            }
        },50);
    }
};