// const siswa = {
//     nama : "Reihan",
//     umur : 17,
//     kelas : 7,
//     hobby : "Catur"
// };
// // delete siswa.kelas;
// // console.log (siswa);

//  const { nama: namaSiswa , umur : umurSiswa, kelas : kelasSiswa, jurusan = "Belum ditentukan"} = siswa;

// console.log ("nama:" , namaSiswa) 
// console.log ("umur:" , umurSiswa)
// console.log ("kelas:" , kelasSiswa)
// console.log ("jurusan:" , jurusan)

// const warna = ["Merah", "Hijau", "Pink"];
// const [warna1, warna2, warna3] = warna; //destructuring bagian sini
// console.log (warna1)

const siswaBaru = [
    {nama: "Andi", nilai: 80, umur : 16, kelas : 8},
    {nama: "Budi", nilai: 65, umur : 15, kelas : 8},
    {nama: "Citra", nilai: 90, umur : 16, kelas : 7},
    {nama: "Dina", nilai: 70, umur : 17, kelas : 9},
    {nama: "Eko", nilai: 85, umur : 18, kelas : 10},
];

//  siswaBaru.forEach(({nama, nilai, umur, kelas}) => {
//      console.log("Nama : " + nama, "Nilai : " + nilai, "Umur: " + umur, "Kelas:" + kelas);
//  });
// const namaSaja = siswaBaru.map ((namaDoang) => namaDoang.nama);
// console.log (namaSaja);
// const nilaiSaja = siswaBaru.map ((nilaiDoang) => nilaiDoang.nilai);
// console.log (nilaiSaja);

// const daftarNama = siswaBaru.map(({nama, nilai}) => {
//     return {nama, nilai};
// });
// console.log(daftarNama)

const daftarHarga = [
    {nama : "Asus", harga : 14000000, kondisi : "Baru"},
    {nama : "Lenovo", harga : 16000000, kondisi : "bekas"},
    {nama : "MSI", harga : 22000000, kondisi : "Baru"},
];
const hargaTampil = daftarHarga.map(({nama ,  harga}) => {
    return {nama , harga};
});
console.log(hargaTampil)