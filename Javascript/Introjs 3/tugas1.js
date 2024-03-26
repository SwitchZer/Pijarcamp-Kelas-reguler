// Soal No 1
const WorkDay = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 1000);
  });
};

// Menggunakan then dan catch
// then digunakan untuk menangkap hasil yang berhasil resolved dari janji.
// Dalam contoh tersebut, jika janji berhasil dan mengembalikan nilai, nilai tersebut akan ditangkap oleh
// .then dan dieksekusi dalam fungsi callback yang diberikan.

// catch digunakan untuk menangkap error rejected dari janji. Jika janji gagal atau mengembalikan error,
// error tersebut akan ditangkap oleh .catch dan dieksekusi dalam fungsi callback yang diberikan.
WorkDay("senin")
  .then((result) => {
    console.log(`Hari ${result} adalah hari kerja`);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Menggunakan try catch
// try digunakan untuk mencoba mengeksekusi potongan kode yang mungkin menghasilkan error.
// Dalam contoh tersebut, potongan kode yang berada di dalam blok try adalah pemanggilan fungsi WorkDay menggunakan await.

// catch digunakan untuk menangkap error yang terjadi dalam blok try. Jika terdapat error,
// error tersebut akan ditangkap oleh catch dan dieksekusi dalam blok catch yang diberikan.
async function checkWorkDay() {
  try {
    const result = await WorkDay("Minggu");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

checkWorkDay();

// Soal No 2
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry, Data Not Found"));
    }
  }, 1000);
};

getMonth((error, month) => {
  if (error) {
    console.log(error.message);
  } else {
    const mappedMonth = month.map((m) => m).join(", ");
    console.log(mappedMonth);
  }
});

// Soal No 3
// Point A
const checkEvenNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Bilangan genap");
    } else {
      reject(new Error("Bukan bilangan genap"));
    }
  });
};

checkEvenNumber(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
// Point B
const hitungLuasSegitiga = (alas, tinggi) => {
  return new Promise((resolve, reject) => {
    if (alas <= 0 || tinggi <= 0) {
      reject("Alas dan tinggi harus lebih dari 0");
    } else {
      const luas = (alas * tinggi) / 2;
      resolve(luas);
    }
  });
};

hitungLuasSegitiga(5, 8)
  .then((luas) => {
    console.log("Luas segitiga:", luas);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Soal No 4
const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.map((item) => {
      console.log(item.name);
    });
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
