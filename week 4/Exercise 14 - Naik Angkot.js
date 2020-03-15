/* Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

Code
*/
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var hasil = [];
    for (let a = 0; a < arrPenumpang.length; a++) {
        var simpan = {};
        simpan.penumpang = arrPenumpang[a][0];
        simpan.naikDari = arrPenumpang[a][1];
        simpan.tujuan = arrPenumpang[a][2];
        var asal = arrPenumpang[a][1];
        var sampai = arrPenumpang[a][2];
        var count = 0;
        for (let c = 0; c < rute.length; c++) {
            if (asal == rute[c]) {
                for (let d = c; d <= rute.length; d++) {
                    if (sampai == rute[d]) {
                        simpan.bayar = count;
                    } else {
                        count += 2000;
                    }

                }
            }

        }

        hasil.push(simpan);
    }

    return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]