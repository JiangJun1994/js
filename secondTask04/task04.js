/**
 * Created by jiangjun on 2017/3/15.
 */
/*
window.onload=function(){
  function change() {

var order=document.getElementById("orderContext")
var btn=document.getElementById("btn");
var boxHead=document.getElementById("boxHead");
var boxBody=document.getElementById("boxBody");
var headerTop=document.getElementById("boxHead").style.top;
var bodyTop=document.getElementById("boxBody").style.top;
var moveBoxTop=document.getElementById("moveBox").style.top;

var headerLeft=document.getElementById("boxHead").style.left;
var bodyLeft=document.getElementById("boxBody").style.left;
var moveBoxLeft=document.getElementById("moveBox").style.left;


  var orderContext = order.value;
  console.log(orderContext);
  if (orderContext == "go") {
    if (parseInt(headerTop) < parseInt(bodyTop) && parseInt(moveBoxTop) > 3) {
      var moveDown = parseInt(moveBoxTop) - 43;
      document.getElementById("moveBox").style.top = moveDown + "px";
      moveBoxTop = moveDown + "px";
      // console.log(moveBox)
    } else if (parseInt(headerTop) > parseInt(bodyTop) && parseInt(moveBoxTop) < 390) {
      var moveUp = parseInt(moveBoxTop) + 43;
      document.getElementById("moveBox").style.top = moveUp + "px";
      moveBoxTop = moveUp + "px";
    } else if (parseInt(headerLeft) < parseInt(bodyLeft) && parseInt(moveBoxLeft) > 3) {
      var moveLeft = parseInt(moveBoxLeft) - 43;
      document.getElementById("moveBox").style.left = moveLeft + "px";
      moveBoxLeft = moveLeft + "px";
    } else if (parseInt(headerLeft) > parseInt(bodyLeft) && parseInt(moveBoxLeft) < 390) {
      var moveRight = parseInt(moveBoxLeft) + 43;
      document.getElementById("moveBox").style.left = moveRight + "px";
      moveBoxLeft = moveRight + "px";
    }
  }


// else if(orderContext == "turnleft"){
// console.log(boxHead.style.width);
//     console.log(boxHead.style.top);
//
//
//     if((boxHead.style.width=="40px")&&(boxHead.style.top=="0px")){
//       boxHead.style.width="10px";
//       boxHead.style.height="40px";
//       boxHead.style.left="0px";
//       boxHead.style.top=="0px"
//
//       boxBody.style.width="30px";
//       boxBody.style.height="40px";
//       boxBody.style.left="10px";
//       boxBody.style.top=="0px"
//     }else if(boxHead.style.width=="10px"&& boxHead.style.left=="0px"){
//       boxHead.style.width=="40px";
//       boxHead.style.height=="10px";
//       boxHead.style.top=="30px";
//       boxHead.style.left="0px";
//
//       boxBody.style.width="40px";
//       boxBody.style.height="30px";
//       boxBody.style.top=="0px";
//       boxBody.style.left="0px";
//
//     }else if(boxHead.style.width=="40px"&&boxHead.style.top=="30px"){
//       boxHead.style.width="10px";
//       boxHead.style.height="40px";
//       boxHead.style.left="30px";
//       boxHead.style.top=="0px"
//
//
//       boxBody.style.width="30px";
//       boxBody.style.height="40px";
//       boxBody.style.left="0px";
//       boxBody.style.top=="0px"
//
//     }else{
//       boxHead.style.width=="40px";
//       boxHead.style.height=="10px";
//       boxHead.style.top=="0px";
//       boxHead.style.left=="0px";
//
//       boxBody.style.width="40px";
//       boxBody.style.height="30px";
//       boxBody.style.top="10px";
//       boxBody.style.left=="0px";
//     }
//   }
// }

  if (orderContext == "turnleft") {
    if (parseInt(headerTop) < parseInt(bodyTop)) {
      moveBox.style.transform = "rotate(270deg)"
    } else if (parseInt(headerTop) > parseInt(bodyTop)) {
      moveBox.style.transform = "rotate(90deg)"
    } else if (parseInt(headerLeft) < parseInt(bodyLeft)) {
      moveBox.style.transform = "rotate(180deg)"
    } else {
      moveBox.style.transform = "rotate(0deg)"
    }
  }
}
  btn.onclick=change;
}*/
window.onload=function(){
  function execution (){
    var order=document.getElementById("orderContext").value;
    var btn=document.getElementById("btn");
    var boxHead=document.getElementById("boxHead");
    var boxBody=document.getElementById("boxBody");
    var moveBox=document.getElementById("moveBox");

    var headTop = boxHead.getBoundingClientRect().top;//getBoundingClientRect().top／left/right/bottom获取离页面的距离；
    var bodyTop = boxBody.getBoundingClientRect().top;
    var headLeft = boxHead.getBoundingClientRect().left;
    var bodyLeft = boxBody.getBoundingClientRect().left;

    if(order=="go"){
      if(headTop<bodyTop){
        var top=parseInt(moveBox.style.top)-40;
        if(top>-1){
          moveBox.style.top=top+"px";
        }
      }else if(headTop>bodyTop){
        var top=parseInt(moveBox.style.top)+40;
        if(top<400){
          moveBox.style.top=top+"px";
        }
      }else if(headLeft<bodyLeft){
        var left=parseInt(moveBox.style.left)-40;
        if(left>-1){
          moveBox.style.left=left+"px"
        }
      }else if(headLeft>bodyLeft){
        var left=parseInt(moveBox.style.left)+40;
        if(left<400){
          moveBox.style.left=left+"px"
        }
      }
    }
    //transform rotate??根据什么进行旋转？
    if(order=="left"){
      if(headTop < bodyTop){
        moveBox.style.transform = "rotate(270deg)";
      }else if(headTop > bodyTop){
        moveBox.style.transform = "rotate(90deg)";
      }else if(headLeft < bodyLeft){
        moveBox.style.transform = "rotate(180deg)";
      }else{
        moveBox.style.transform = "rotate(0deg)";
      }
    }
    if(order=="right"){
      if(headTop<bodyTop){
        moveBox.style.transform = "rotate(90deg)";
      }else if(headTop>bodyTop){
        moveBox.style.transform = "rotate(270deg)";
      }else if(headLeft < bodyLeft){
        moveBox.style.transform = "rotate(0deg)";
      }else{
        moveBox.style.transform = "rotate(180deg)";
      }
    }
    if(order=="back"){
      if(headTop<bodyTop){
        moveBox.style.transform = "rotate(180deg)";
      }else if(headTop>bodyTop){
        moveBox.style.transform = "rotate(0deg)";
      }else if(headLeft < bodyLeft){
        moveBox.style.transform = "rotate(90deg)";
      }else{
        moveBox.style.transform = "rotate(270deg)";
      }
    }
  }

  btn.onclick=execution;
}