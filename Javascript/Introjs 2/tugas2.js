// Soal Nomor 1
// indexOf(): Metode ini digunakan untuk mendapatkan indeks tertentu dalam array.
const fruits1 = ["apple", "banana", "orange", "apple", "mango"];
const index = fruits1.indexOf("apple");
console.log(index);

// includes(): Metode ini digunakan untuk memeriksa apakah suatu elemen ada dalam array, mengembalikan nilai boolean.
const fruits2 = ["apple", "banana", "orange"];
const isPresent = fruits2.includes("apple");
console.log(isPresent);

// toUpperCase(): Metode ini digunakan untuk mengubah string menjadi huruf kapital.
const name1 = "john";
const upperCaseName = name1.toUpperCase();
console.log(upperCaseName);

// toLowerCase(): Metode ini digunakan untuk mengubah string menjadi huruf kecil.
const name2 = "JOHN";
const lowerCaseName = name2.toLowerCase();
console.log(lowerCaseName);

// find(): Metode ini digunakan untuk mencari elemen dalam array yang memenuhi kondisi yang ditentukan dan mengembalikan nilainya.
const numbers1 = [1, 2, 3, 4, 5];
const evenNumber = numbers1.find((number) => number % 2 === 0);
console.log(evenNumber);

// isArray(): Metode ini digunakan untuk memeriksa apakah suatu nilai adalah array, dan mengembalikan true jika nilai tersebut adalah array, dan false jika tidak.
const numbers2 = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers2));

const stringValue = "Hello";
console.log(Array.isArray(stringValue));

// concat(): Metode ini digunakan untuk menggabungkan dua atau lebih string dan mengembalikan string baru.
const str1 = "Hello";
const str2 = "world!";
const combinedStr = str1.concat(", ", str2);
console.log(combinedStr);

// slice(): Metode ini digunakan untuk mengambil sebagian dari sebuah string berdasarkan posisi awal dan akhir yang ditentukan.
const message2 = "Hello, world!";
const slicedStr = message2.slice(7, 12);
console.log(slicedStr);

// filter() metode ini digunakan untuk membuat array baru dengan elemen-elemen yang memenuhi kondisi tertentu.
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);

// Math.random(): Metode ini digunakan untuk menghasilkan angka acak antara 0 dan 1.
const randomNum = Math.random();
console.log(randomNum);

// Soal Nomor 2
const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchName = (keyword, limit, callback) => {
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(keyword.toLowerCase())
  );
  const slicedNames = filteredNames.slice(0, limit);
  callback(slicedNames);
};

function printNames(names) {
  console.log(names);
}

searchName("an", 3, printNames);

// Soal Nomor 3
const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (dataArray.length <= 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  }

  if (nilaiAwal > nilaiAkhir) {
    return "Nilai awal harus lebih kecil dari nilai akhir";
  }

  const hasilPencarian = dataArray.filter(
    (data) => data > nilaiAwal && data < nilaiAkhir
  );

  if (hasilPencarian.length === 0) {
    return "Nilai tidak ditemukan";
  } else {
    return hasilPencarian.sort((a, b) => a - b);
  }
};

console.log(SeleksiNilai(5, 26, [3, 22, 6, 14, 17, 48, 9]));
console.log(SeleksiNilai(15, 3, [3, 22, 6, 14, 17, 48, 9]));
console.log(SeleksiNilai(5, 17, [3, 22, 6]));
console.log(SeleksiNilai(5, 17, [3, 22, 5, 1, 48, 18]));
