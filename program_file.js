//check for Palindrome

 let bag="";
    for(i=N-1;i>=0;i++){
      bag=bag+str[i];
      
      
    }
   
 if(bag==str){
        console.log("Yes");
    }
    else {
       console.log("No");
    }



//check for Prime Number

let count=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==1){
    console.log("Yes");
}
else{
    console.log("No");
}