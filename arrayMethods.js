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
                             
const siswa = [
    {nama : "Andi", nilai : 80},
    {nama : "Budi", nilai : 65},
    {nama : "Citra", nilai : 90},
    {nama : "Dina", nilai : 75},
    {nama : "Eko", nilai : 85},
];

siswa.forEach((siswa) => {
    if (siswa.nilai >= 75) {
        console.log (siswa.nama + " - " + siswa.nilai + " - Lulus");
    } else {
        console.log(siswa.nama + " - " + siswa.nilai + " - Remedial")
    }
});