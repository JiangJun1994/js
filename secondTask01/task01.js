/**
 * Created by jiangjun on 2017/3/14.
 */
window.onload=function () {
  //4-16characters, a chinese word=2 characters, 0-128 检验输入值字符数用charCodeAt;中文等于2个字符数，其他均为一个；
  var btnNickName=document.getElementById("btnNickName");
  function check1(){
    var inputNick=document.getElementById("nickName");
    var form1=document.getElementsByClassName("form")[0];
    var len=inputNick.value.length;
    var text=0;
    console.log(inputNick.value)
    for(var i=0;i<len;i++){
      if(inputNick.value.charCodeAt(i)>=0 && inputNick.value.charCodeAt(i)<128){
        text=text+1;
      }else{
        text=text+2;
      }
    };
    if(text<4||text>16){
      var p=document.createElement("p");
      var alarm=document.createTextNode("必填，长度为4~16个字符");
      p.appendChild(alarm);
      if(form1.children[3]){
        form1.removeChild(form1.children[3])
      }
      form1.appendChild(p);
    }else{
      var p2=document.createElement("p");
      var alarm2=document.createTextNode("名称格式正确");
      p2.appendChild(alarm2);
      if(form1.children[3]){
        form1.removeChild(form1.children[3])
      }
      form1.appendChild(p2);
      inputNick.style.border="1px solid green";
      p2.style.color="green";
    }
  }
  btnNickName.onclick=check1;
}
