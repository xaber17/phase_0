/* Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

Code
*/
function ubahHuruf(kata) {
  // you can only write your code here!
  var kamus = "abcdefghijklmnopqrstuvwxyz";
  var tampung = "";
  for (let a = 0; a < kata.length; a++) {
      for (let b = 0; b < kamus.length; b++) {
          if (kata[a] == "z") {
              tampung = tampung + "a";
          } else if (kata[a] == kamus[b]) {
              tampung = tampung + kamus[b + 1];
          } 
      }
  }
  return tampung;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu