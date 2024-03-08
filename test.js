const tab=[1,5,8,6,10];
//max tab
var max=tab[0];
function maxi(tab){
    for(let i=1;i< tab.length;i++){
        if (max<tab[i]){
            max=tab[i];
        }
    }
    
    return max;
   
}
 console.log(maxi(tab))

//min tab
 var min=tab[0];
 function mini(tab){
     for(let i=1;i< tab.length;i++){
         if (min>tab[i]){
             min=tab[i];
         }
     }
     
     return min;
    
 }
  console.log(mini(tab)) ;

// sum tab 

var s=0 
function sum(tab){
    for(let i=1;i< tab.length;i++){
       s+=tab[i]
    }
    
    return s;
   
}
 console.log(sum(tab));



const n=5;


 


//reverse srting

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  // count 
  function count(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      count++;
    }
    return count;
  }
  
  
  
  
  let str = "Hello";
  console.log( reverseString(str));
  console.log(count(str));
  