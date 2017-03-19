/**
 * Created by jiangjun on 2017/3/12.
 */
window.onload=function(){
  var inputContent=document.getElementById("data");
  var btn1=document.getElementById("btn1");
  var btn2=document.getElementById("btn2");
  var btn3=document.getElementById("btn3");
  var btn4=document.getElementById("btn4");
  var display=document.getElementById("display");
  var disContent=[];


  //left side entry
  function show1(){
    var detail=inputContent.value
    disContent.unshift(detail);
    inputContent.value="";
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<span style='display: inline-block;margin-right:3px;'>"+disContent[i]+"</span>"
    }
    display.innerHTML=str;
  }
  btn1.onclick=show1;


  //right side entry
  function show2(){
    var detail=inputContent.value
    disContent.push(detail);
    inputContent.value="";
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<span style='display: inline-block;margin-right:3px;'>"+disContent[i]+"</span>"
    }
    display.innerHTML=str;
  }
  btn2.onclick=show2;


  //left side delete
  function show3(){
    var c;
    c=disContent.shift(disContent[0]);
    alert(c)
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<span style='display: inline-block;margin-right:3px;'>"+disContent[i]+"</span>"
    }
    display.innerHTML=str;

  }
  btn3.onclick=show3;



  //right side delete
  function show4(){
    var d;
    d=disContent.pop(disContent[disContent.length-1]);
    alert(d)
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<span style='display: inline-block;margin-right:3px;'>"+disContent[i]+"</span>"
    }
    display.innerHTML=str;
  }
  btn4.onclick=show4;
}