/**
 * Created by jiangjun on 2017/3/15.
 */
var a=[{user: "admin", num: 3, bool: true},
  {user: "admin", num: 4, bool: true },
  {user: "admin", num: 5}, {user: "abc", num: 3, bool: true},
  {user: "abc", num: 3}] ;
var b={};
var c=[];
for(var i=0,j=0;i<a.length;i++){
  if(a[i].user==a[j].user){
    b.user=a[i].user;
    b.num=a[i].num+a[j].num;
    if(a[i].bool==true&&a[j].bool==true){
      b.boolnum=a[i].num+a[j].num;
    }
  }
  c.push(b);
}
console.log(c);