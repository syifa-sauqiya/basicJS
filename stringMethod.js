// const nama = "Andi";
// console.log (nama.toUpperCase());
// console.log (nama.toLowerCase());

// const username = "AnDi";
// const usernameBaru = username.toLowerCase();
// console.log (usernameBaru);
                           
// const nama = " Andi ";
// console.log(nama);
// console.log(nama.trim()); //menghilangkan spasi 

// const email = "andi@gmail.com";
// if (email.includes("@")) {
//     console.log ("Email valid");
// } else {                                          
//     console.log ("email tidak valid");
// }

// const nama = "Andi";
// console.log(nama.includes("di"));
// console.log(nama.includes("xyz"));

// const kode = "LT-001";
// if (kode.startsWith("PC")) {
//     console.log("Barangnya komputer");
// } else {
//     console.log("Barangnya bukan komputer");
// }

// const file = "laporan.jpg"; 
// if (file.endsWith(".pdf")) {
//     console.log("File pdf");      
// } else if (file.endsWith(".jpg")) {
//     console.log ("File gambar");
// } else if (file.endsWith(".docx")) {
//     console.log ("FIle word");
// } else { 
//     console.log ("File tidak didefinisikan");
// }

// const murid = "Andi";

// console.log(murid.indexOf("d"), murid.indexOf("i"));
// console.log(murid.indexOf("z"))

// const murid = "Andi";
// if (murid.indexOf("z") !== -1) {
//     console.log ("Huruf ditemukan");
// } else { console.log ("Huruf tidak ditemukan");
// } 

// const numby = 2;
// if (numby % 2 ===0) {
//     console.log ("angka genap");
// } else if (numby % 2 !==0) {
//     console.log ("angka ganjil");
// }

// const nama2 = "Andi";
// console.log(nama2.slice(0, 2)); //artinya mentok mengambil huruf di urutan ke 1 (sebelum 2)

// const namaBarang = "PC-001"
// console.log(namaBarang.slice(3 , 7))

// const kalimat = "Saya belajar Java";

// const hasil = kalimat.replace (
//     "Java", "JavaScript"
// );
// console.log(hasil);

// const hasil2 = hasil.replace (
//     "Saya", "Aku"
// );
// console.log(hasil2)

// const warna = "Merah - Kuning - Hijau"
// const hasil3 =  warna.split(" - ")
// console.log(hasil3)

// const namaKelompok = ["Andi", "Budi", "Citra"];
// const joinKelompok = namaKelompok.join (" - ");
// console.log(joinKelompok)

// const kasus1 = ("Aku suka renang");   
// const kasusBaru = kasus1.replace ("Aku", "Saya")
// const kasus3 = kasusBaru.replace ("renang", "Berenang")
// const hasilAkhir = kasus3.split(" ");
// console.log(hasilAkhir);

// const kasus = ("Aku suka renang");
// const kasusHasil = kasus.replace("Aku", "Saya")
// const kasusHasil2 = kasusHasil.replace("renang", "berenang")
// const kasusHasil3 = kasusHasil2.split(" ");
// console.log(kasusHasil3);

// const username2 = "AdMIN123";
// const hasill = username2 
// .trim()
// .toLowerCase();
// console.log(hasill);

// const emailAndi = " ANDI@GMAIL.COM ";
// const emailAndiBaru = emailAndi.trim().toLowerCase();
// console.log(emailAndiBaru); 

// const murid2 = {
//     nama : " aNdI ",
//     kelas : "x ict",
//     email : " ANDI@GMAIL.COM "
// };
// const { nama: namaSiswa, kelas : kelasSiswa, email : emailSiswa} = siswa;
// console.log( `Nama: ${namaSiswa.trim().toUpperCase()}
// Kelas : ${kelasSiswa.toUpperCase()}
// Email : ${emailSiswa.trim().toLowerCase()}
//  `);



    //target out : buat hsil cl : nama : ANDI
    //Kelas : X ICT
    //Email : kecil semua
    //object,destructuring,stringmethod,tl

//     const siswa5 = [
//         {nama : "Andi", email : "andi@gmail.com", umur: 17},
//         {nama : "Budi", email : "budi@yahoo.com", umur: 17},
//         {nama : "Citra", email : "citra@gmail.com", umur: 17}
//     ];

//     const siswaHasil = siswa5.filter (user => 
//     user.email.endsWith("@gmail.com")).map(user => ({nama:user.nama, email : user.email})
// );
//     console.log (siswaHasil);
//     siswaHasil.forEach((siswa) => {
//     console.log(siswa.nama)
//     });

//    console.log(siswaHasil)

//hasil cl : [
// {nama : "Andi", email : "andi@gmail.com"},
// {nama : "Andi", email : "andi@gmail.com"}, ]
//use endswith and filter

const murid = [
    {nama : "Elsha", umur : 16},
    {nama : "Syifa", umur : 17},
    {nama : "Shifa", umur : 15},

];
console.log(murid[0].nama, murid[2].umur)
