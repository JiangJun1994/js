/**
 * Created by jiangjun on 2017/3/13.
 */
window.onload=function(){
  var preOrderBtn=document.getElementById("preOrderBtn");
  var root=document.getElementById("root");
  var lastNode=null;
  function preOrder(ele){
    if(ele){
      ele.style.backgroundColor="blue";
      if(lastNode){
        lastNode.style.backgroundColor="white";
      }
      lastNode=ele;
       for(var i=0;i<ele.children.length;i++){
         preOrder(ele.children[i]);
      }
    }
  };
  preOrderBtn.onclick=preOrder.bind(this,root);
}