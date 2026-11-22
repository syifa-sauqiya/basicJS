const barang = [
    {
        kode: "kb-001",
        nama : "keyboard mechanical",
        harga : 450000
    },
    {
        kode: "ms-002",
        nama : "mouse gaming",
        harga : 250000  
    },
{
        kode: "hs-003",
        nama : "headset",
        harga : 350000  
    },

];

const nama = barang[1].nama;
const harga = barang[1].harga;
const jumlah = 7;
const totalHarga = harga * jumlah;
let diskon;
if (jumlah >=5){
  diskon = 10;
}
else {
  diskon = 0
}
const potongan = totalHarga * diskon/100;
const totalBayar = totalHarga - potongan;

console.log("nama barang : ", nama )
console.log("jumlah pembelian : ", jumlah)
console.log("total pembayaran :", totalBayar);

const daftarSiswa = [
    {
        nama : "Andi",
        kelas : "XI SIJA",
        nilai : 85,
        kehadiran : 90
    },
    {
        nama : "Budi",
        kelas : "XI SIJA",
        nilai : 65,
        kehadiran : 85
    },
    {
        nama : "CItra",
        kelas : "XI SIJA",
        nilai : 92,
        kehadiran : 95
    },
    {
        nama : "Putri",
        kelas : "XI SIJA",
        nilai : 85,
        kehadiran : 70
    }
 
];

for (let i = 0; i < daftarSiswa.length; i++) {
    if (daftarSiswa[i].nilai >= 75 && daftarSiswa[i].kehadiran >= 80) {
        console.log(daftarSiswa[i].nama);
    } else { 

    }
};

const barangToko = [
    {
        nama : "Keyboard",
        stok : 10
    },
    {
        nama : "Mouse",
        stok : 3 
    },
{
        nama : "Headset",
        stok : 0
    },
{
        nama : "Webcam",
        stok : 7
    },
{
        nama : "USB hub",
        stok : 2
    },

];
for (let i = 0; i < barangToko.length; i++) {
    if (barangToko[i].stok===0) {
        console.log(barangToko[i].nama  + " - " + "Stok habis");
    } else if (barangToko[i].stok <=5 ) {
        console.log(barangToko[i].nama  + " - " + "Stok sedikit");
    } else { console.log (barangToko[i].nama  + " - " + "Stok tersedia")}

    };

 for (let i = 0; i <=10; i++)
 {console.log(i)};
 