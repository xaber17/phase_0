/* Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

Code
*/
function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var kamusKecil = "abcdefghijklmnopqrstuvwxyz";
  var kamusBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var tampung = "";
  let check = false;

  for (let a = 0; a < kalimat.length; a++) {
      check = false;
      for (let b = 0; b < kamusBesar.length; b++) {
          if (kalimat[a] === kamusBesar[b]) {
              tampung += kamusKecil[b];
              check = true;
          } 

        }
        for (let c = 0; c < kamusKecil.length; c++) {
            if (kalimat[a] === kamusKecil[c]) {
                tampung += kamusBesar[c];
                check = true;
            }
      }

    if (check == false) {
        tampung += kalimat[a];
    }
      
  }
  return tampung;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"