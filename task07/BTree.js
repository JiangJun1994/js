/**
 * Created by jiangjun on 2017/3/11.
 */
window.onload=function(){
  var root=document.getElementById("root");
  var btn=document.getElementById("preOrderBtn");
  // var btn1=document.getElementById("button");
  var lastNode=null;
  function preOrder(ele) {
    if(ele){
      ele.style.backgroundColor="blue";
      if(lastNode){
        lastNode.style.backgroundColor="white";
      }
      lastNode=ele;
      if(ele.firstElementChild){
        setTimeout(preOrder.bind(this,ele.firstElementChild),1900);// without bind,the action scope of preorder is wrong
        var seconds;                                               //setTimeout(function.bind(this,parameter),time)
        var offspringNum=getNumOffspring(ele.firstElementChild)    //settimeout("function(parameter)",time)
        seconds=(offspringNum+1)*2000+2000;
        setTimeout(preOrder.bind(this,ele.lastElementChild),seconds);
      }
    }
  }
  function getNumOffspring(ele) {
     var n=0
     if(ele.firstElementChild){
       n=n+1;
       n=n+getNumOffspring(ele.firstElementChild)
     }
     if(ele.lastElementChild){
       n=n+1;
       n=n+getNumOffspring(ele.lastElementChild);
     }
     return n;
  }
  btn.onclick=preOrder.bind(this,root);
  // function btn1Click() {
  //   var a="aaa";
  //   setTimeout(alert(a),3000);
  // }
  // btn1.onclick=btn1Click.bind(this);
}
