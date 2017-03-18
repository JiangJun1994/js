/**
 * Created by jiangjun on 2017/3/16.
 */
window.onload=function(){
  function execution() {
    var order = document.getElementById("orderContext").value;
    var btn = document.getElementById("btn");
    var boxHead = document.getElementById("boxHead");
    var boxBody = document.getElementById("boxBody");
    var moveBox = document.getElementById("moveBox");

    var headtop = boxHead.getBoundingClientRect().top;
    var bodytop = boxBody.getBoundingClientRect().top;
    var headleft = boxHead.getBoundingClientRect().left;
    var bodyleft = boxBody.getBoundingClientRect().left;


    if (order == "tra lef") {
      var left=parseInt(moveBox.style.left)-40;
      if(left>-1){
        moveBox.style.left=left+"px";
      }
    }else if(order=="tra rig"){
      var left=parseInt(moveBox.style.left)+40;
      if(left<400){
        moveBox.style.left=left+"px";
      }
    }else if(order=="tra top"){
      var top=parseInt(moveBox.style.top)-40;
      if(top>-1){
        moveBox.style.top=top+"px";
      }
    }else if(order=="tra bot"){
      var top=parseInt(moveBox.style.top)+40;
      if(top<400){
        moveBox.style.top=top+"px"
      }
    }else if(order=="move lef"){
      var moveleft=parseInt(moveBox.style.left)-40;
      if(headtop<bodytop){
        if(moveleft>-1){
          moveBox.style.transform="rotate(270deg)"
          moveBox.style.left=moveleft+"px";
        }else if(headtop>bodytop){
          if(moveleft>-1){
            moveBox.style.transform="rotate(270deg)"
            moveBox.style.left=moveleft+"px";
          }
        }else if(headleft<bodyleft){
          if(moveleft>-1){
            moveBox.style.transform="rotate(270deg)"
            moveBox.style.left=moveleft+"px";
          }
        }else{
          if(moveleft>-1){
            moveBox.style.transform="rotate(270deg)"
            moveBox.style.left=moveleft+"px";
          }
        }
        console.log(moveBox.style.left)
      }
    }else if(order=="move rig"){
      var moveleft=parseInt(moveBox.style.left)+40;
      if(headtop<bodytop){
        if(moveleft<400){
          moveBox.style.transform="rotate(90deg)"
          moveBox.style.left=moveleft+"px";
        }else if(headtop>bodytop){
          if(moveleft<400){
            moveBox.style.transform="rotate(270deg)"
            moveBox.style.left=moveleft+"px";
          }
        }else if(headleft<bodyleft){
          if(moveleft<400){
            moveBox.style.transform="rotate(0deg)"
            moveBox.style.left=moveleft+"px";
          }
        }else{
          if(moveleft<400){
            moveBox.style.transform="rotate(180deg)"
            moveBox.style.left=moveleft+"px";
          }
        }
      }
    }else if(order=="move top"){
      var movetop=parseInt(moveBox.style.top)-40;
      if(headtop<bodytop){
        if(movetop>-1){
          moveBox.style.transform="rotate(0deg)"
          moveBox.style.top=movetop+"px";
        }else if(headtop>bodytop){
          if(movetop>-1){
            moveBox.style.transform="rotate(deg)"
            moveBox.style.top=movetop+"px";
          }
        }else if(headleft<bodyleft){
          if(movetop>-1){
            moveBox.style.transform="rotate(deg)"
            moveBox.style.top=movetop+"px";
          }
        }else{
          if(movetop>-1){
            moveBox.style.transform="rotate(-90deg)"
            moveBox.style.top=movetop+"px";
          }
        }
      }
    }else if(order=="move bottom"){
      var movetop=parseInt(moveBox.style.top)+40;
      if(headtop<bodytop){
        if(movetop<400){
          moveBox.style.transform="rotate(180deg)"
          moveBox.style.top=movetop+"px";
        }else if(headtop>bodytop){
          if(movetop<400){
            moveBox.style.transform="rotate(deg)"
            moveBox.style.top=movetop+"px";
          }
        }else if(headleft<bodyleft){
          if(movetop<400){
            moveBox.style.transform="rotate(deg)"
            moveBox.style.top=movetop+"px";
          }
        }else{
          if(movetop<400){
            moveBox.style.transform="rotate(deg)"
            moveBox.style.top=movetop+"px";
          }
        }
      }

    }
  }
  btn.onclick=execution;
}