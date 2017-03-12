/**
 * Created by jiangjun on 2017/3/12.
 */
window.onload=function(){
  var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
  ];
  var cities=[];
  for(var i=0;i<aqiData.length;i++){
    if(aqiData[i][1]>60){
      cities.push(aqiData[i])
    }
  }
  console.log(cities);

  var content="";
  for (var i=0;i<cities.length;i++){
    var j=i+1;
    if(cities[i]==cities[i+1]){

    }
    content+="<li>第"+j+"名："+cities[i][0]+"，"+cities[i][1]+"</li>"
  }
  console.log(content);
  var ulContent=document.getElementById("aqi-list");
  ulContent.innerHTML=content;

}