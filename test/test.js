/**
 * Created by jiangjun on 2017/3/9.
 */


/*var testData=[{city:"BJ",value:100},{city:"TJ",value:90},{city:"CD",value:90},
  {city:"CQ",value:86}];
class Map{
  constructor(len){
    this.length=len;
  }
  getlength(){
    console.log(this.length);
  }
}
class Value{
  constructor(val,city){
    this.val=val;
    this.cities=[];
    this.cities.push(city);
  }
  push(city){
    if(!this.cities.contains(city)){
      cities.push(city);
    }
  }


}*/
/*var testData=[{city:"BJ",value:100},{city:"TJ",value:90},{city:"CD",value:90},
  {city:"CQ",value:86}];

var group=[];
for(var i=0;i<testData.length;i++){
  if(i!=0&&testData[i].value==testData[i-1].value){
    group[group.length-1].push(testData[i].city);
  }else{
    group.push([testData[i].city]);
  }
}

var v=[[1,2],[3],[4,5]];
var str="";
v=group;
for(var i=0;i<v.length;i++){
  for(var j=0;j<v[i].length;j++){
    str=str+"No."+(i+1)+":"+v[i][j]+"\n";
  }
}
console.log(str);

*/

function sortNum(a,b){
  return parseInt(a)-parseInt(b);
}
class Dictionary{
  constructor(sortfunc){
    this.data=new Object();
    this.sortfunc=sortfunc;
  }
  add(key,val){
    this.data[key]=val;
  }
  keys(){
    return Object.keys(this.data);
  }
  keysInOrder(){
    var keys=new Array();
    for(var key in this.data){
      keys.push(key);
    }
    keys.sort(this.sortfunc);
    return keys;
  }
  get(key){
    return this.data[key];
  }
}
var testData=[{city:"BJ",value:100},{city:"TJ",value:90},{city:"CD",value:90},
  {city:"CQ",value:96},{city: "ZH",value:90}];
var d=new Dictionary(sortNum);
for(var i=0;i<testData.length;i++){
  if(d.get(testData[i].value)){
    d.get(testData[i].value).push(testData[i].city)
  }else{
    d.add(testData[i].value,[testData[i].city])
  }
}
var no=0;
var str="";
var keys=d.keysInOrder();
for(var key in keys){
  var g=d.get(keys[key]);
  no=no+1;
  for(var v in g){
    str=str+"No."+no+":"+g[v]+"\n";
  }
}
console.log(str);

