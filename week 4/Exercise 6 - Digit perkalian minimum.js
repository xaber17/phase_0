/* Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, 
sehingga function akan me-return 2.

Code
*/
function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  let string1;
  var counter = 0;
  let check;

  if (angka > 1) {
      for (let a = 2; a <= angka; a++) {
          if (angka % a == 0 ) {
              counter++;
          }
      }

      if (counter < 2) {
          check = true;
      } else {
        check = false;
      }
    } else {
        check = false;
    }

  if (check == false) {
      if (angka <= 81) {
          return 2;
      } else {
            for (let a = 1; a <= angka; a++) {
                for (let b = 1; b < angka; b++) {
                    if (a*b === angka && a+b <= angka) {
                        string1 = a.toString();
                        string1 += b.toString();
                        return string1.length;
                    }
                }
            } 
        } 
  } else {
      return angka.toString().length + 1;
  }
  return angka.toString().length + 1;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2