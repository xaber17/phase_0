/* Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi 
huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di 
passwordGenerator dan return password-nya dari function ini juga
*/
function changeVocals(str) {
    //code di sini
    var hasil = '';
    var kamusVokal = "aiueoAIUEO";
    var vokal = "bjvfpBJVFP";

    for (let a = 0; a < str.length; a++) {
        var condition = true;
        for (let b = 0; b < kamusVokal.length; b++) {
            if (str[a] == kamusVokal[b]) {
                hasil += vokal[b];
                condition = false;
            }
        }
        if (condition == true) {
            hasil += str[a];
        }
    }
    return hasil;
}

function reverseWord(str) {
    //code di sini
    var hasil = "";
    for (let a = str.length - 1; a >= 0; a--) {
        hasil += str[a];
    }
    return hasil;
}

function setLowerUpperCase(str) {
    //code di sini
    var hasil = "";
    for (let a = 0; a < str.length; a++) {
        if (str[a] == str[a].toLowerCase()) {
            hasil += str[a].toUpperCase();
        } else {
            hasil += str[a].toLowerCase();
        }
    }
    return hasil;
}

function removeSpaces(str) {
    //code di sini
    var hasil = "";
    for (let a = 0; a < str.length; a++) {
        if (str[a] != " ") {
            hasil += str[a]
        }
    }
    return hasil;
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
    return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))));
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'