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
    var detail=parseInt(inputContent.value);
    if(detail>10&&detail<100){
      if(disContent.length>60){
        alert("you would better not add number")
      }
      disContent.unshift(detail);
      inputContent.value="";
      var str="";
      for (var i=0;i<disContent.length;i++){
        str+="<span style='width:20px;margin-right:3px;'>"+disContent[i]+"</span>"
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
      disContent.push(detail);
      inputContent.value="";
      var str="";
      for (var i=0;i<disContent.length;i++){
        str+="<span style='width:20px;margin-right:3px;'>"+disContent[i]+"</span>"
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
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<span style='width:20px;margin-right:3px;'>"+disContent[i]+"</span>"
    }
    display.innerHTML=str;
  };
  btn3.onclick=show3;


//right side delete
  function show4(){
    var c;
    c=disContent.pop(disContent[0]);
    alert(c);
    var str="";
    for (var i=0;i<disContent.length;i++){
      str+="<span style='width:20px;margin-right:3px;'>"+disContent[i]+"</span>"
    }
    display.innerHTML=str;
  };
  btn4.onclick=show4;

  //search   we can use children to get content(contains one or more html labels) in a div,
  //we can use replace to take place of some content   replace(a,b)  b will replace a.

  var btn_search=document.getElementById("btn_search");
  function search(){
    var queue = document.getElementById("display").children;
    var len=queue.length;
    var inquiryInput = document.getElementById("search_content").value;
    var reg = eval("/"+inquiryInput+"/g");
    for(var i = 0;i<len;i++){
      var str = queue[i].innerHTML.toString();
      var str = queue[i].innerHTML.replace(reg,"<span style='color:blue;'>" + inquiryInput + "</span>");
      queue[i].innerHTML = str;
      document.getElementById("search_content").value=""
    }
  }
  btn_search.onclick=search;
}