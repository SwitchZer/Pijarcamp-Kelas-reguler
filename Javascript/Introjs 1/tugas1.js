// Soal Nomor 1
const biodata = {
  name: "Alfred Cristian Nugraha Zagoto",
  age: 19,
  hobbies: ["Komputer", "Sepeda", "Game"],
  isMarried: false,
  schoolList: [
    {
      Nama: "SD Negeri 10 Padang",
      yearIn: "2010",
      yearOut: "2016",
      major: null,
    },
    {
      Nama: "SMP Negeri 20 Padang",
      yearIn: "2016",
      yearOut: "2019",
      major: null,
    },
    {
      Nama: "SMK Negeri 2 Padang",
      yearIn: "2019",
      yearOut: "2022",
      major: null,
    },
  ],
  skills: [
    {
      skillName: "Swimming",
      level: "Advance",
    },
    {
      skillName: "PHP",
      level: "Advance",
    },
    {
      skillName: "JS",
      level: "Beginner",
    },
  ],
  interestInCoding: true,
};

console.log(biodata);

// Soal Nomor 2
const hitungRataRataUN = (indonesia, inggris, matematika, ipa) => {
  if (
    typeof indonesia !== "number" ||
    typeof inggris !== "number" ||
    typeof matematika !== "number" ||
    typeof ipa !== "number"
  ) {
    return "Semua nilai harus berupa angka dan tidak boleh kosong!";
  }

  const rataRata = (indonesia + inggris + matematika + ipa) / 4;

  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata < 80) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata < 70) {
    grade = "D";
  } else {
    grade = "E";
  }

  return `Rata-Rata UN: ${rataRata}, Grade: ${grade}`;
};

const hasil = hitungRataRataUN(85, 93, 92, 0);
console.log(hasil);

// Soal Nomor 3
const printSegitiga = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    console.log("Parameter harus angka!");
    return;
  }
  let output = "";

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + " ";
    }
    output += "\n";
  }

  console.log(output);
};

printSegitiga(7);

// Soal Nomor 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  Fullstack: "Web Developer Batch 19 | 2 Pijar Camp",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

console.log(data);

// Soal Nomor 4 Point A
const newData = {
  ...data,
  name: "Alfred Cristian Nugraha Zagoto",
  email: "alfredcnzagoto@gmail.com",
  hobby: ["Komputer", "Ngoding", "Games"],
};

console.log(newData);

// Soal Nomor 4 Point B
const {
  address: { street, city },
} = data;

console.log("Street:", street);
console.log("City:", city);
