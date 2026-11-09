// let siswa = ["Alya", "Bima", "Caca", "Dafa", "Elsa"];
// let skor = [88, 72, 95, 65, 80];

// for (let i = 0; i < skor.length; i++) {
//     if (skor[i] >= 75) {
//         console.log(siswa[i]);
//         console.log("nilainya " + skor[i]);
//         console.log("LULUS");
//         console.log(" ");
//     } else {
//         console.log(siswa[i]);
//         console.log("nilainya " + skor[i]);
//         console.log("TIDAK LULUS");
//         console.log(" ");
//     }
// }

// let angka = [12, 7, 20, 15, 8, 3, 14, 9, 25, 30];
// for (let i = 0; i<angka.length; i++) {
//     if (angka[i] % 2 === 0 && angka [i]>=10)
//     {console.log (angka[i] + " - " + "Genap" + " - " + ">=10");}
//  else if  (angka[i] % 2 !== 0 && angka [i]>=10)
// { console.log (angka[i] + " - " + "Ganjil" + " - " + ">=10"); }
//  else { console.log (angka[i] + " - Angka kecil");}
// }
const dataSiswa = [
    { nama: "Rian", nilai: 82 },
    { nama: "Siti", nilai: 68 },
    { nama: "Doni", nilai: 75 },
    { nama: "Ayu", nilai: 60 }
];


// dataSiswa.forEach((angka) => { //without destructuring
//     if (angka.nilai >= 75) {
//         console.log (angka.nama, "-", "Nilai: " , angka.nilai + " - LULUS");
//     } else {
//         console.log(angka.nama, "-", "Nilai: " , angka.nilai + " - REMEDIAL")
//     }
// });

// console.log(`${angka.nama} - NIlai : ${angka.nilai} - LULUS`)
// console.log(`${angka.nama} - NIlai : ${angka.nilai} - LULUS`)

dataSiswa.forEach(({nama,nilai}) => { //with destructuring
    if (nilai >= 75) {
        console.log (nama, "-", "Nilai: " , nilai + " - LULUS");
    } else {
        console.log(nama, "-", "Nilai: " , nilai + " - REMEDIAL")
    }
});

// console.log(`${angka.nama} - NIlai : ${angka.nilai} - LULUS`)
// console.log(`${angka.nama} - NIlai : ${angka.nilai} - LULUS`)

const produkElektronik = [
    { nama: "Monitor", harga: 2000000 },
    { nama: "Keyboard Mechanical", harga: 500000 },
    { nama: "Mouse Wireless", harga: 200000 }
];