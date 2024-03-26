// Soal No 1
// Point A
const isPalindrome = (word) => {
  const loweredWord = word.toLowerCase();
  const reversedWord = loweredWord.split("").reverse().join("");

  if (loweredWord === reversedWord) {
    return "palindrom";
  } else {
    return "bukan palindrom";
  }
};

const word1 = "katak";
console.log(isPalindrome(word1));
const word2 = "hello";
console.log(isPalindrome(word2));

// Point B
const reverseWords = (sentence) => {
  const words = sentence.split(" ").reverse().join(" ");

  return words;
};
const sentence = "Saya belajar Javascript";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence);

// Soal No 2
const PijarFood = (harga, voucher, jarak, pajak) => {
  let potongan = 0;
  let biayaAntar = 0;
  let pajakAmount = 0;

  if (voucher === "PIJARFOOD5" && harga >= 50000) {
    potongan = Math.min(harga * 0.5, 50000);
  } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
    potongan = Math.min(harga * 0.6, 30000);
  }

  biayaAntar = 5000 + Math.max(jarak - 2, 0) * 3000;

  if (pajak) {
    pajakAmount = harga * 0.05;
  }

  const subtotal = harga - potongan + biayaAntar + pajakAmount;

  console.log(`  
  Harga : ${harga}
  Potongan : ${potongan}
  Biaya Antar : ${biayaAntar}
  Pajak : ${pajakAmount}
  SubTotal : ${subtotal}`);
};

PijarFood(75000, "DITRAKTIRPIJAR", 5, true);

// Soal No 3
const divideAndSort = (number) => {
  const numberArray = String(number).split("0");

  const sortedArray = numberArray.map((num) => {
    return parseInt(num.split("").sort().join(""));
  });

  const result = parseInt(sortedArray.join(""));

  return result;
};

console.log(divideAndSort(5956560169466056));
