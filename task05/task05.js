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
  var height=[];

  //left side entry

  function show1(){
    var detail=parseInt(inputContent.value);
    if(detail>10&&detail<100){
      if(disContent.length>60){
        alert("you would better not add number")
      }
      height1=detail*3+"px";
      height.unshift(height1);
      disContent.unshift(detail);
      inputContent.value="";
      var str="";
      for (var i=0;i<disContent.length;i++){
        str+="<img style='width:20px;background:red;margin-right:3px;height:"+height[i]+"'></img>"
      }
      display.innerHTML=str;
    }else{alert("please input right number")}
  };
  btn1.onclick=show1;


//right side input
  function show2(){
    var detail=parseInt(inputContent.value);
    if(detail>10&&detail<100){
      if(disContent.length>60){
        alert("you would better not add number")
      }
      height1=detail*3+"px";
      disContent.push(detail);
      height.push(height1);
      inputContent.value="";
      var str="";
      for (var i=0;i<disContent.length;i++){
        str+="<img style='width:20px;background:red;margin-right:3px;height:"+height[i]+"'></img>"
      }
      display.innerHTML=str;
    }else{alert("please input right number")}
  };
  btn2.onclick=show2;
  //left side delete


  function show3(){
    var c;
    c=disContent.shift(disContent[0]);
    alert(c);
    height.shift(height1);
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<img style='width:20px;background:red;margin-right:3px;height:"+height[i]+"'>"
    }
    display.innerHTML=str;
  };
  btn3.onclick=show3;


  //right side delete

  function show4(){
    var c;
    c=disContent.pop(disContent[0]);
    alert(c);
    height.pop(height1);
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<img style='width:20px;background:red;margin-right:3px;height:"+height[i]+"'></img>"
    }
    display.innerHTML=str;
  };
  btn4.onclick=show4;
}