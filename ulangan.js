const siswa = {
    nama : " aNdI ",
    kelas : "x ict",
    email : " ANDI@GMAIL.COM "
};
const { nama: namaSiswa, kelas : kelasSiswa, email : emailSiswa} = siswa;
console.log( `Nama: ${namaSiswa.trim().toUpperCase()}
Kelas : ${kelasSiswa.toUpperCase()}
Email : ${emailSiswa.trim().toLowerCase()}
 `);

 const siswa2 = [
        {nama : "Andi", email : "andi@gmail.com", umur: 17},
        {nama : "Budi", email : "budi@yahoo.com", umur: 17},
        {nama : "Citra", email : "citra@gmail.com", umur: 17}
    ];

    const siswaHasil = siswa2.filter (user => 
    user.email.endsWith("@gmail.com")).map(user => ({nama:user.nama, email : user.email})
);
    console.log (siswaHasil);