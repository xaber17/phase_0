/* Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array 
tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . 
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. 
Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 
'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
Code
*/
function changeMe(arr) {
  // you can only write your code here!
  var biodata1 = {};
  var biodata2 = {};
  for (let a = 0; a < arr.length; a++) {
    if (a == 0) {
      biodata1.firstname = arr[a][0];
      biodata1.lastname = arr[a][1];
      biodata1.gender = arr[a][2];
      if (arr[a][3] != null) {
        biodata1.age = 2020 - arr[a][3];
      } else {
        biodata1.age = 'Invalid Birth Year';
      }
    } else if (a == 1) {
      biodata2.firstname = arr[a][0];
      biodata2.lastname = arr[a][1];
      biodata2.gender = arr[a][2];
      if (arr[a][3] != null) {
        biodata2.age = 2020 - arr[a][3];
      } else {
        biodata2.age = 'Invalid Birth Year';
      }
    }
  }
  console.log(`1. ${biodata1.firstname} ${biodata1.lastname}:`);
  console.log(biodata1);
  console.log(`2. ${biodata2.firstname} ${biodata2.lastname}:`);
  console.log(biodata2);
};

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""