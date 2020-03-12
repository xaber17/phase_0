/* Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. 
Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

Code
*/
function angkaPrima(angka) {
  // you can only write your code here!
  var counter = 0;
  if (angka > 1) {
      for (let a = 2; a <= angka; a++) {
          if (angka % a == 0 ) {
              counter++;
          }
      }

      if (counter < 2) {
          return true;
      } else {
        return false;
      }
  } else {
      return false;
  }
}

// TEST CASES
console.log(angkaPrima(2)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false