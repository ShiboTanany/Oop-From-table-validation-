
var Constrains={
    
    fname:{
        minLen:1,
        maxLen:15,
        
    },
    lname:{
        minLen:1,
        maxLen:25,
        
    },
    validateLen:function(formEl,type){
       if(formEl.value.length>type.maxLen||formEl.value.length<type.minLen){
            
           return false; 
           
        }else{
            
            return true;
        }
        
        
     
        
    },
    
  validateEmail: function(formEl){

var regEx =/^[a-zA-Z0-9\-\_]+\@[a-zA-Z0-9\_]+\.[a-zA-Z0-9\-\_]{2,4}/;
var emailTest = regEx.test(formEl.value);
if (emailTest) {

return true;
} else {

return false;
}
}
    
};
function validateAll(){
   // var x=new Constrains();
  alert( Constrains.validateLen(document.getElementById("name1"),Constrains.fname));
  alert(Constrains.validateLen(document.getElementById("name2"),Constrains.lname));
  alert(Constrains.validateEmail(document.getElementById("email")));
    //var flag=Constrains.validateLen(Constrains.fname,fname);
    //alert(flag);
    
    
}


