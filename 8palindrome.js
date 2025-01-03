str ="mam" 
     str1 = ""
      for(i=str.length-1;i>=0;i--) 
      {
      str1 += str[i]
       }
       if(str1 === str) {
        console.log("it is palindrome")
       }
       else{
        console.log("is is not a palindrome")
       }


let arr =["one","two","three","four"]
for(i=0;i<arr.length;i++){
     console.log(arr[i][1])
}

let arr1 = ["one","two","three","four"]
for (i = 0; i <= arr1.length - 1; i++) {
     let str1 = "";
     if (i>=0) {
       for (k= arr1[i].length-1; k >= 0; k--) {
         str1 += arr1[i][k];
       }
     } else str1 += arr1[i];
     arr1[i] = str1;
   }
   console.log(arr1);