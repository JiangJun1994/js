/**
 * Created by jiangjun on 2017/3/15.
 */
window.onload=function(){
  var student=document.getElementById("student");
  var worker=document.getElementById("worker");
  var studentdiv=document.getElementById("inputStudent");
  var nonstudentdiv=document.getElementById("inputWorker");
  var city=document.getElementById("city");
  var school=document.getElementById("school");
  studentdiv.style.display="none";
  nonstudentdiv.style.display="none";

  function showstudent(){
    studentdiv.style.display="block";
    nonstudentdiv.style.display="none";
  };
  function showworker(){
    nonstudentdiv.style.display="block";
    studentdiv.style.display="none";
  };
//var option = new Option(text,value); selectedIndex==the index of selected option
  function showOptions(){
    var schoolList=[["北京邮电大学","北京大学","清华大学","北京航空航天大学","北京交通大学","北京理工大学","北京科技大学"],
      ["南开大学","天津大学","天津科技大学","天津工业大学","中国民航大学","天津理工大学","天津农学院"],
      ["复旦大学","同济大学","上海交通大学","华东理工大学","上海理工大学","上海海事大学","东华大学","上海大学"]]
    var index=city.selectedIndex-1;
    var schoolname=schoolList[index];
    for(var i=0;i<schoolname.length;i++){
      school[i+1]=new Option(schoolname[i],schoolname[i]);
    }
  }
  student.onclick=showstudent;
  worker.onclick=showworker;
  city.onchange=showOptions;
}