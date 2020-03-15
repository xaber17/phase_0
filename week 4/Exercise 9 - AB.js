/* Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
function tersebut mengembalikan nilai truejika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter 
lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

Code
*/
function checkAB(str) {
  // you can only write your code here!
  var count = 0;
  for (let a = 0; a < str.length; a++) {
      if (str[a] == "a") {
          for (let b = a; b < str.length; b++) {
              if (str[b] == "b") {
                  if (count == 4) {
                      return true;
                  }
              } else {
                  count ++;
              }
          } 
      }
    }

    count = 0;
    for (let c = 0; c < str.length; c++) {
        if (str[c] == "b" ) {
            for (let d = c; d < str.length; d++) {
                if (str[d] == "a") {
                    if (count == 4) {
                        return true;
                    } else {
                        count++;
                    }
                } else {
                    count++;
                }
                
            }
            
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false