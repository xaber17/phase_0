/* Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam 
string tersebut.

Code
*/
function urutkanAbjad(str) {
  // you can only write your code here!
  var kamus = "abcdefghijklmnopqrstuvwxyz";
  var tampung = [];
  var hasil = [];
  var final = "";
  let done;
  for (let a = 0; a < str.length; a++) {
      for (let b = 0; b < kamus.length; b++) {
          if (str[a] == kamus[b]) {
            tampung.push(kamus[b]);
          }
      }
  }
  while (done != true) {
    done = true;
    for(let c = 1; c < tampung.length; c++) {
        if(tampung[c - 1] > tampung[c]) { 
            hasil = tampung[c - 1];
            tampung[c - 1] = tampung[c];
            tampung[c] = hasil; 
            done = false;
        }
      
    }
  }
  for (let d = 0; d < tampung.length; d++) {
    final += tampung[d];
  }
  return final;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'