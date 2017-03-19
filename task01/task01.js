/**
 * Created by jiangjun on 2017/3/12.
 * done
 */
window.onload=function(){
  var inputValue=document.getElementById("aqi-input");
  var btn=document.getElementById("button");
  var showContent=document.getElementById("aqi-display");
  var display=function(){
    showContent.innerHTML=inputValue.value;
  }
  btn.onclick=display;
}