var id=0;
var i=0;
//var ar=new student();
/*name1=document.getElementById("name1").value;
name2=document.getElementById("name2").value;
birth=document.getElementById("birth").value;
dept=document.getElementById("dept").value;*/
var Student={
     info:{
        fname:"dsds",
        lname:"dsds",
        birth:5/5/1994,
        dept:"it",
        
        
         add:function(fnam,lnam,birt,dep){
          this.fname=fnam;
          this.lname=lnam;
          this.birth=birt;
          this.dept=dep;
            
         },
         
    
    
    
}};
function getAge(){
     birth=document.getElementById("birth").value;
     var arr=birth.split("-");
     //for(var x=0;x<arr.lenght;x++){
      //  console.log(arr[x]);
        
    // }
    // alert(parseInt(arr[2]+arr[3]+arr[4]+arr[5]));
     return (2017-parseInt(arr[0]));
     //alert( 2017-parseInt(arr[2]));
    
    
}

function myCreateFunction() {
    
    name1=document.getElementById("name1").value;
    name2=document.getElementById("name2").value;
    birth=document.getElementById("birth").value;
    dept=document.getElementById("dept").value;
    getAge();
  //alert(name2);
   Student.info.add(name1,name2,birth,dept);
    
    
    var table = document.getElementById("emp");
    var row = table.insertRow(++i);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML =Student.info.fname;
    cell2.innerHTML =Student.info.lname;
    cell3.innerHTML = getAge();
    cell4.innerHTML = ++id;
    cell5.innerHTML = Student.info.birth;
    cell6.innerHTML = Student.info.dept;
}
