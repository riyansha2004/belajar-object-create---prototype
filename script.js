// 1.Object literal
// let mahasiswa1 = {
//   nama: "Riyansha",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}. selamat makan :`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Gibran",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}. selamat makan :`);
//   },
// };

// 2.Function Declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo $(this.nama), selamat  makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo $(this.nama), selamat bermain game`);
//   },
//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo $(this.nama) selamat tidur!;`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let riyansha = Mahasiswa("Riyansha", 10);
// let gibran = Mahasiswa("gibran", 10);

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${$this.nama}, selamat main`;
};
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${$this.nama}, selamat tidur`;
};

let riyansha = new Mahasiswa("Riyansha", 10);

// 3.Constructor function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo $(this.nama), selamat  makan!`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo $(this.nama), selamat bermain game`);
//   };
// }

// let riyansha = new Mahasiswa("Riyansha", 10);

// 4.Objeck.Create
