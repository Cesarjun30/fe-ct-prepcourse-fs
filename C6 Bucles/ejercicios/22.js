function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"


   let combinacion = "" 
   let longitudTotal= Math.max(str1.length, str2.length,str3.length)

   for(let i = 0 ; i < longitudTotal; i++){

      if(i < str1.length && str1 !== ""){
         combinacion += str1[i]
      }
      
      if(i < str2.length && str2 !== ""){
         combinacion += str2[i]
      }
      
      if(i < str3.length && str3 !== ""){
         combinacion += str3[i]
      }
   }
   console.log(combinacion)
   return combinacion
}

combine("abc","123","67489")


function combine2(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"


   let combinacion = "" 
   let strings= str1 + str2 + str3
   

   for(let i = 0 ; i < strings.length; i++){
     if(i< str1.length && str1 !== ""){
      combinacion += str1.charAt(i)
     }
     if(i< str2.length && str2 !== ""){
      combinacion += str2.charAt(i)
     }
     if(i< str3.length && str3 !== ""){
      combinacion += str3.charAt(i)
     }
   }
   console.log(combinacion)
   return combinacion
}

combine2("abc","123","")


module.exports = combine;
