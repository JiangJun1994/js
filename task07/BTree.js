/**
 * Created by jiangjun on 2017/3/11.
 */
window.onload=function(){
  var root=document.getElementById("root");
  var btn=document.getElementById("preOrderBtn");
  var lastNode=null;
  function preOrder(ele) {
    if(ele){
      ele.style.backgroundColor="blue";
//      ele.parentNode.style.backgroundColor="white";
      if(lastNode){
        lastNode.style.backgroundColor="white";
      }
      lastNode=ele;
      preOrder(ele.firstElementChild);
      preOrder(ele.lastElementChild);
    }
  }
  btn.onclick=preOrder.bind(this,root);
}
