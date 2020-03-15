/*Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari 
setiap class:

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> },
  <class>: { name: <name>, score: <score> }
}
*/
function highestScore (students) {
  // Code disini
  if (students == '') {
      return students;
  }
  
  var tigers = []; 
  var foxes = [];
  var wolves = [];
  var score = 0;
  var result = {};
  for (let a = 0; a < students.length; a++) {
      if (students[a].class == 'foxes') {
          foxes.push(students[a]);
      } else if (students[a].class == 'wolves') {
          wolves.push(students[a]);
      } else if (students[a].class == 'tigers') {
          tigers.push(students[a]);
    } 
  }
  
  for (let b = 0; b < foxes.length; b++) {
      if (foxes[b].score > score) {
          score = foxes[b].score;
      }   
  }
  for (let c = 0; c < foxes.length; c++) {
     if (foxes[c].score == score) {
        delete foxes[c].class;
        result.foxes = foxes[c]
        score = 0;
     }
  }

  for (let d = 0; d < wolves.length; d++) {
    if (wolves[d].score > score) {
        score = wolves[d].score;
    }   
  }
  for (let e = 0; e < wolves.length; e++) {
   if (wolves[e].score == score) {
      delete wolves[e].class;
      result.wolves = wolves[e];
      score = 0;
   }
  }

  for (let d = 0; d < tigers.length; d++) {
    if (tigers[d].score > score) {
        score = tigers[d].score;
    }   
  }
  for (let e = 0; e < tigers.length; e++) {
   if (tigers[e].score == score) {
      delete tigers[e].class;
      result.tigers = tigers[e];
      score = 0;
   }
  }

 return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}