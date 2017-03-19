window.onload=function(){
  var nickName=document.getElementById("nickName");
  var password=document.getElementById("password");
  var checkpass=document.getElementById("checkpass");
  var email=document.getElementById("email");
  var phone=document.getElementById("phone");
  var tip1=document.getElementById("tip1");
  var tip2=document.getElementById("tip2");
  var tip3=document.getElementById("tip3");
  var tip4=document.getElementById("tip4");
  var tip5=document.getElementById("tip5");
  var btn=document.getElementById("btn");


  //nickName
  nickName.onfocus=function(){
    tip1.style.color="gray";
    tip1.innerHTML="必填，长度为4-16个字符"
    nickName.style.border="1px solid black";
  };
  nickName.onblur=function(){
    var len=nickName.value.length;
    var number=0;
    for(var i=0;i<len;i++){
      if(nickName.value.charCodeAt(i)>=0&&nickName.value.charCodeAt(i)<128){
        number+=1;
      }else{
        number+=2;
      }
    };
    if(number==0){
      tip1.innerHTML="姓名不能为空！"
      tip1.style.color="red";
      nickName.style.border="1px solid red";
    }else if(number<4||number>16){
      tip1.innerHTML="格式错误！"
      tip1.style.color="red";
      nickName.style.border="1px solid red";
    }else{
      tip1.innerHTML="填写正确！"
      tip1.style.color="green";
      nickName.style.border="1px solid green";
    }
  };
  //password
  password.onfocus=function(){
    tip2.innerHTML="长度大于6";
    tip2.style.color="gray";
    password.style.border="1px solid black";

  };
  password.onblur=function(){
    var len=password.value.length;
    console.log(len)
    if(len==0){
      tip2.innerHTML="密码不能为空";
      tip2.style.color="red";
      password.style.border="1px solid red";
    } else if(0<len<6){
      tip2.innerHTML="格式错误";
      tip2.style.color="red";
      password.style.border="1px solid red";
    } else{
      tip2.innerHTML="密码可用";
      tip2.style.color="green";
      password.style.border="1px solid green";
    }
  }

  //checkpass
  checkpass.onfocus=function(){
    tip3.innerHTML="再次输入相同密码";
    tip3.style.color="gray";
    checkpass.style.border="1px solid black";

  };
  checkpass.onblur=function(){
    if(checkpass.value.length==0){
      tip3.innerHTML="密码不能为空";
      tip3.style.color="red";
      checkpass.style.border="1px solid red";
    }else if(checkpass.value==password.value&&checkpass.value.length>6){
      tip3.innerHTML="密码输入一致";
      tip3.style.color="green";
      checkpass.style.border="1px solid green";
    } else{
      tip3.innerHTML="密码不一致";
      tip3.style.color="red";
      checkpass.style.border="1px solid red";
    }
  };

  //email
  email.onfocus=function(){
    tip4.innerHTML="请输入邮箱";
    tip4.style.color="gray";
    email.style.border="1px solid black";
  };
  email.onblur=function(){
    var len=email.value;
    if(len.length==0){
      tip4.innerHTML="邮箱不能为空"
      tip4.style.color="red";
      email.style.border="1px solid red";
    }else if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email.value))){
      tip4.innerHTML="邮箱格式错误"
      tip4.style.color="red";
      email.style.border="1px solid red";
    }else{
      tip4.innerHTML="邮箱格式正确";
      tip4.style.color="green";
      email.style.border="1px solid green";
    }
  }
  //phone
  phone.onfocus=function(){
    tip5.innerHTML="请输入手机号";
    tip5.style.color="gray";
    phone.style.border="1px solid black";
  };
  phone.onblur=function(){
    var len=phone.value;
    if(len.length==0){
      tip5.innerHTML="手机号不能为空"
      tip5.style.color="red";
      phone.style.border="1px solid red";
    }
    else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone.value))){
      tip5.innerHTML="请输入正确的手机号"
      tip5.style.color="red";
      phone.style.border="1px solid red";
    }else{tip5.innerHTML="手机格式正确";
    tip5.style.color="green";
    phone.style.border="1px solid green";}
  }

  //all
  function ok() {
    if((tip1.innerHTML=="填写正确！")&& (tip2.innerHTML=="密码可用")&&(tip3.innerHTML=="密码输入一致")
    &&(tip4.innerHTML=="邮箱格式正确")&&(tip5.innerHTML=="手机格式正确")){
      alert("ok")
    }else{
      if(tip1.innerHTML!=="填写正确！"){
        tip1.innerHTML="格式错误！"
        tip1.style.color="red";
        nickName.style.border="1px solid red";
      }if(tip2.innerHTML!=="密码可用"){
        tip2.innerHTML="格式错误";
        tip2.style.color="red";
        password.style.border="1px solid red";
      }if(tip3.innerHTML!=="密码输入一致"){
        tip3.innerHTML="密码不一致";
        tip3.style.color="red";
        checkpass.style.border="1px solid red";
      }if(tip4.innerHTML!=="邮箱格式正确"){
        tip4.innerHTML="邮箱格式错误"
        tip4.style.color="red";
        email.style.border="1px solid red";
      }if(tip5.innerHTML!=="请输入正确的手机号"){
        tip5.innerHTML="请输入正确的手机号"
        tip5.style.color="red";
        phone.style.border="1px solid red";
      }
      alert("wrong")
    }
  }
  btn.onclick=ok;
}