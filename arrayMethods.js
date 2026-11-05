// const nilai = [80,75,90,85,70,65,93,90,60,78];
// nilai.forEach((angka) => {
//     console.log(angka);
// });

// nilai.forEach((angka) => {
//     if (angka >= 75) {
//         console.log (angka + " - Lulus");
//     } else {
//         console.log(angka + " - Remedial")
//     }
// });

// const baru = ["Syifa" , "Husna", "Novda", "Fayda", "Dhita", "Alen", "Nanda", "Shyka", "Talitha", "Nanda", "Farhanah"];
// baru.forEach((nama) => {
//     console.log ("halo, " + (nama));
// });
// const nilai = [80,75,90,85,70,65,93,90,60,78];
//  nilai.forEach((angka) => {
//      console.log(angka + 5);
//  });

//  const siswa = [   
//     { nama: "Andi", kelas: "X SIJA", alamat: "Jl.Melati", umur: 12 },
//     { nama: "Budi", kelas: "X SIJA", alamat: "Jl.Jalakan", umur: 13 },
//     { nama: "Citra", kelas: "X SIJA", alamat: "Jl.Begajah",  umur: 14 },
// ];

// const namaSaja = siswa.map ((namaDoang) => namaDoang.nama);
// console.log (namaSaja);
// const umurSaja = siswa.map ((umurDoang) => umurDoang.umur);
// console.log(umurSaja)

// const nilaiBaru = [ 80, 65, 90, 70, 85, 65, 45, 87, 92, 88];
// const nilaiTidaklulus = nilaiBaru.filter((angka) => { 
//     return angka <75;
// });
// console.log(nilaiTidaklulus);

// arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const angkaGenapbaru = arrayAngka.filter((jumlah)=> {
//     return jumlah % 2 ===0
// });

// console.log(angkaGenapbaru)

// const angkaGanjil = arrayAngka.filter((jumlah)=> {
//     return jumlah % 2 !==0
// });

// console.log(angkaGanjil)

// const warTicket = [
//     {nama : "Konser", jumlah : 300, dipesan : 200},
//     {nama : "Seminar", jumlah : 100, dipesan : 70},
//     {nama : "Workshop", jumlah : 80, dipesan : 80},
// ];    
// const warTicketbaru = warTicket.filter ((ticket) => {
//     return ticket.jumlah - ticket.dipesan >=30
// });

// console.log (warTicketbaru)

// const warTicket2 = [
//     {nama : "Konser", jumlah : 300, dipesan : 200},
//     {nama : "Seminar", jumlah : 100, dipesan : 90},
//     {nama : "Workshop", jumlah : 80, dipesan : 80},
// ];    
// const sisaTicket = warTicket2.find ((ticket) => {
//     return ticket.jumlah - ticket.dipesan !==0 && ticket.nama !== "Konser"
// });

// console.log (sisaTicket)                      
                             
// const siswa = [
//     {nama : "Andi", nilai : 80},
//     {nama : "Budi", nilai : 65},
//     {nama : "Citra", nilai : 90},
//     {nama : "Dina", nilai : 75},
//     {nama : "Eko", nilai : 85},
// ];

// siswa.forEach((siswa) => {
//     if (siswa.nilai >= 75) {
//         console.log (siswa.nama + " - " + siswa.nilai + " - Lulus");
//     } else {
//         console.log(siswa.nama + " - " + siswa.nilai + " - Remedial")
//     }
// });

const produk = [
    { nama: "Mouse", harga : 100000 },
    { nama: "Keyboard", harga : 150000 },
    { nama: "Headset", harga : 150000 },
    { nama: "Flashdisk", harga : 50000 },
    { nama: "Webcam", harga : 250000 },

];

// const hargaPromo = produk.map ((produk) => {
//     return produk.nama + produk.harga - (produk.harga * 0.10) })
// console.log ( hargaPromo)

const calonAnggota = [
    { nama : "Andi", nilai : 85, kehadiran : 90 },
    { nama : "Budi", nilai : 75, kehadiran : 95 },
    { nama : "Citra", nilai : 90, kehadiran : 85 },
    { nama : "Dina", nilai : 80, kehadiran : 70 },
    { nama : "Eko", nilai : 88, kehadiran : 100 },
    { nama : "Fajar", nilai : 70, kehadiran : 75 },
];
// const anggotaLolos = calonAnggota.filter ((lolos) => 
//     lolos.nilai >=80 && lolos.kehadiran >=80 )
//     anggotaLolos.forEach((siswa) => {
//     console.log(siswa.nama)
//     });

//     console.log("Jumlah anggota yang lulus seleksi : " + anggotaLolos.length);
// const anggotaLolos = calonAnggota.filter ((lolos) => 
//     lolos.nilai >=80 && lolos.kehadiran >=80 )
//     anggotaLolos.forEach((siswa) => {
//     console.log(siswa.nama)
//     });

//     console.log("Jumlah anggota yang lulus seleksi : " + anggotaLolos.length);

// const anggotaLolos = calonAnggota.filter((siswa) => {
//     return siswa.nilai >=80 && siswa.kehadiran >=80 ;
// });

// anggotaLolos.forEach((siswa) => {
//     console.log(siswa.nama);
// });

// console.log("");

// console.log (`Jumlah anggota yang lolos: ${anggotaLolos.length}`)

const inventaris = [
    { kode : "PC001", nama : "Komputer 1", kondisi : "Baik" },
    { kode : "PC002", nama : "Komputer 2", kondisi : "Rusak" },
    { kode : "PC003", nama : "Komputer 3", kondisi : "Baik" },
    { kode : "PC004", nama : "Komputer 4", kondisi : "Perbaikan" },
    { kode : "PC005", nama : "Komputer 5", kondisi : "Baik" },
    
];

const hasilCari = inventaris.find((item) => {
    return item.kode === "PC002";

});

if (hasilCari) {
    console.log ("Nama perangkat : " + hasilCari.nama)
    console.log ("Kondisi : " + hasilCari.kondisi)
} else {
    console.log ("Perangkat tidak ditemukan")
}


// if (hasilCari) {
//     console.log(`Nama perangkat: ${hasilCari.nama}`);
//     console.log(`Kondisi: ${hasilCari.kondisi}`);
    
// } else console.log ("Perangkat tidak ditemukan")
