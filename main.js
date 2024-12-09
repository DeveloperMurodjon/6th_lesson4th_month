// 1–10: Oddiy hisob-kitoblar
//1. Funksiya yozing, u berilgan sonning juft yoki toq ekanligini aniqlasin.
function easy(number) {
  if (number % 2 == 0) {
    return `${number} juft son.`;
  } else {
    return `${number} toq son.`;
  }
}
//2. Funksiya yozing, u berilgan sonning musbat, manfiy yoki nol ekanligini aniqlasin.
function easy2(number2) {
  if (number2 > 0) {
    return `${number2} soni musbat son`;
  } else if (number2 == 0) {
    return `${number2} nolga teng`;
  } else {
    return `${number2} manfiy son`;
  }
}
console.log(easy2(12));
console.log(easy2(-12));
console.log(easy2(0));
//3. Funksiya yozing, u berilgan ikki sondan kattasini qaytarsin.
function easy3(number3, number4) {
  if (number3 > number4) {
    return `${number3} katta ${number4} dan`;
  }
  return `${number4} katta ${number3} dan`;
}
console.log(easy3(10, 20));
console.log(easy3(30, 15));
console.log(easy3(-5, -10));
console.log(easy3(7, 7));

//4. Funksiya yozing, u uchta sondan eng kattasini aniqlasin.
function easy4(number5, number6, number7) {
  let max = number5;

  if (number6 > max) {
    max = number6;
  }
  if (number7 > max) {
    max = number7;
  }

  return max;
}
console.log(easy4(12, 30, 11));

//5. Funksiya yozing, u berilgan sonning 3 ga bo‘linishini aniqlasin.
function easy5(number8) {
  if (number8 % 3 == 0) {
    return true;
  }
  return false;
}
console.log(easy5(21));
console.log(easy5(22));

//6. Funksiya yozing, u berilgan sonning kvadratini qaytarsin.
function easy6(number9) {
  return number9 ** 2;
}
console.log(easy6(5));

//7. Funksiya yozing, u ikki sonning ko‘paytmasini hisoblasin.
function easy7(number10, number11) {
  return number10 * number11;
}
console.log(easy7(2, 5));
console.log(easy7(9, 10));

//8. Funksiya yozing, u berilgan sonni 1 dan boshlab o‘sha songacha bo‘lgan barcha sonlarning yig‘indisini hisoblasin.
function easy8(number12) {
  number12 = +prompt(`Musbat son kiriting`);
  let sum = 0;
  for (let i = 1; i <= number12; i++) {
    sum += i;
  }
  return sum;
}
console.log(easy8());

//9. Funksiya yozing, u 1 dan 10 gacha bo‘lgan sonlarning ko‘paytmasini qaytarsin.
function easy9() {
  let sum2 = 1;
  for (let i = 1; i <= 10; i++) {
    sum2 *= i;
  }
  return sum2;
}
console.log(easy9());

//10. Funksiya yozing, u berilgan sondan boshlab 1 ga kamaytirib chiqaradi.
function easy10(number13) {
  for (let i = number13; i >= 1; i--) {
    console.log(i);
  }
}
let number13 = +prompt(`Musbat son kiriting`);
easy10(number13);

// 11–20: Shart operatorlari va sikllar
//1. Funksiya yozing, u berilgan sonni faqat juft bo‘lsa ekranga chiqaradi.
function easy11(number14) {
  for (let i = 2; i <= number14; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
let number14 = +prompt(`Musbat son kiriitng`);
easy11(number14);

// Funksiya yozing, u berilgan ikki sondan kattasini ternary operator yordamida aniqlasin.
function easy12(number14, number15) {
  return number14 > number15
    ? `${number14} soni katta`
    : `${number15} soni katta`;
}
console.log(easy12(12, 5));
console.log(easy12(4, 5));
console.log(easy12(1, 5));
// Funksiya yozing, u berilgan son 5 ga va 3 ga bo‘linishini tekshiradi.
function easy13(number16) {
  if (number16 % 3 == 0 && number16 % 5 == 0) {
    return true;
  }
  return false;
}
console.log(easy13(15));
// Funksiya yozing, u berilgan sonning kvadrati va kubini qaytaradi.
const easy14 = (number15) => {
  const square = number15 ** 2;
  const cube = number15 ** 3;
  return { square, cube };
};

const result = easy14(3);
console.log(`Kvadrat: ${result.square}, Kub: ${result.cube}`);

// Funksiya yozing, u 1 dan 100 gacha bo‘lgan faqat juft sonlarni ekranga chiqaradi.
const easy15 = () => {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
};
easy15();
// Funksiya yozing, u 1 dan n gacha bo‘lgan toq sonlarni ekranga chiqaradi.
const easy16 = (number17) => {
  for (let i = 1; i >= number17; i += 2) {
    console.log(i);
  }
};
easy16(15);
// Funksiya yozing, u kiritilgan sonning faktorialini hisoblaydi.
let sum3 = 1;
const easy17 = (number18) => {
  for (let i = 1; i <= number18; i++) {
    sum3 *= i;
  }
  return sum3;
};
console.log(easy17(18));

// Funksiya yozing, u kiritilgan sonni 10 ga bo‘lgandagi qoldiqni qaytaradi.
const easy18 = (number19) => {
  return number19 % 10;
};
console.log(easy18(23));
// Funksiya yozing, u ikki sonni o‘zaro solishtirib, qaysi biri katta ekanligini ekranga chiqaradi.
const easy19 = (number20, number21) => {
  return number20 > number21
    ? `${number20} soni katta`
    : `${number21} soni katta`;
};
console.log(easy19(20, 30));
// Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning yig‘indisini qaytaradi.
const easy20 = () => {
  let sum4 = 0;
  for (let i = 1; i <= 50; i += 1) {
    sum4 += i;
  }
  return sum4;
};
console.log(easy20());
// 21–30: Matematik masalalar
// Funksiya yozing, u berilgan sonning kvadrat ildizini hisoblaydi (math metodlari ishlatilmasin).
// Funksiya yozing, u ikkita sonning o‘rta arifmetik qiymatini hisoblaydi.
const easy22 = (number20, number21) => {
  return (number20 + number21) / 2;
};

console.log(easy22(10, 20));
// Funksiya yozing, u berilgan son musbatmi yoki manfiy ekanligini if orqali aniqlasin.
const easy23 = (number22) => {
  if (number22 > 0) {
    return `${number22} soni musbat`;
  } else {
    return `${number22} manfiy son`;
  }
};

console.log(easy23(5));
console.log(easy23(-3));

// Funksiya yozing, u ikki sonni qo‘shadi, lekin agar sonlardan biri manfiy bo‘lsa, natijaga 10 qo‘shadi.
const easy24 = (number23, number24) => {
  if (number23 < 0 || number24 < 0) {
    return number23 + number24 + 10;
  } else {
    return number23 + number24;
  }
};
console.log(easy24(12, -12));
console.log(easy24(12, 11));

// Funksiya yozing, u berilgan ikkita sonni qo‘shadi va ko‘paytiradi, natijalarni alohida qaytaradi.
const easy25 = (number25, number26) => {
  return {
    add: number25 * number26,
    add2: number25 + number26,
  };
};
console.log(easy25(5, 3));
// Funksiya yozing, u foydalanuvchi kiritgan son 7 ga bo‘linishini aniqlaydi.
const easy26 = (number27) => {
  return number27 % 7 == 0 ? console.log(true) : console.log(false);
};
let number27 = +prompt(`Musbat son kirittng`);
easy26(number27);
// Funksiya yozing, u berilgan sonni xuddi shu tartibda 10 marta ko‘paytirib chiqaradi.
const easy27 = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(number * i);
  }
};

easy27(2);

// Funksiya yozing, u ikki sonni ko‘paytiradi, lekin agar sonlardan biri 0 bo‘lsa, natija 1 bo‘ladi.
const easy28 = (number28, number29) => {
  if (number28 == 0 || number29 == 0) {
    return 1;
  } else {
    return number28 * number29;
  }
};

console.log(easy28(5, 0));
console.log(easy28(7, 3));

// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning modulini hisoblaydi.
const easy29 = () => {
  let number30 = +prompt("1- sonni kiriting:");
  let number31 = +prompt("2- sonni kiriting:");

  return {
    mod1: Math.abs(number30),
    mod2: Math.abs(number31),
  };
};
let res = easy29();
console.log(`1- sonning moduli: ${res.mod1}`);
console.log(`2- sonning moduli: ${res.mod2}`);

// 31–40: Sonlar bilan ishlash
// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat manfiy bo‘lsa ekranga chiqaradi.
const easy30 = () => {
  let number32 = +prompt("Sonni kiriting:");

  if (number32 < 0) {
    console.log(number32);
  } else {
    console.log("Son manfiy emas");
  }
};
easy30();

// Funksiya yozing, u 1 dan 100 gacha bo‘lgan sonlardan faqat 5 ga karrali bo‘lganlarni ekranga chiqaradi.
const easy31 = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
};
easy31();

// Funksiya yozing, u berilgan ikki sonning yig‘indisini hisoblaydi, agar natija juft bo‘lsa, "Juft" deb qaytaradi.
const easy32 = (number33, number34) => {
  let sum5 = number33 + number34;
  if (sum5 % 2 == 0) {
    return "Juft";
  } else {
    return false;
  }
};
console.log(easy32(4, 6));
console.log(easy32(3, 5));

// Funksiya yozing, u foydalanuvchi kiritgan sonning bo‘luvchilarini ekranga chiqaradi.
const easy33 = () => {
  let number35 = +prompt("Sonni kiriting:");
  console.log(`${number35} sonining bo‘luvchilari:`);
  for (let i = 1; i <= number35; i++) {
    if (number35 % i == 0) {
      console.log(i);
    }
  }
};
easy33();

// Funksiya yozing, u berilgan sondan kattalik bo‘yicha kichik bo‘lgan barcha toq sonlarni chiqaradi.
const easy34 = (number36) => {
  console.log(`${number36} sonidan kichik bo‘lgan toq sonlar:`);
  for (let i = 1; i < number36; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
easy34(10);

// Funksiya yozing, u berilgan sonni 1 dan 20 gacha bo‘lgan sonlarga bo‘lib, har birining qoldig‘ini chiqaradi.
const easy35 = (number37) => {
  console.log(
    `${number37} sonining 1 dan 20 gacha bo‘lgan sonlarga bo‘lish qoldiqlari:`
  );
  for (let i = 1; i <= 20; i++) {
    console.log(`${i}: ${number37 % i}`);
  }
};
easy35(45);

// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha bo‘luvchilarini hisoblaydi va yig‘indisini qaytaradi.
const easy36 = () => {
  let number38 = +prompt("Sonni kiriting:");
  let sum6 = 0;
  for (let i = 1; i <= number38; i++) {
    if (number38 % i == 0) {
      sum6 += i;
    }
  }

  return sum6;
};
console.log(easy36());

// Foydalanuvchidan son olib, bo‘luvchilarning yig‘indisini chiqaradi
const easy37 = () => {
  let number39 = +prompt("Sonni kiriting:");
  let sum6 = 0;
  for (let i = 1; i <= number39; i++) {
    if (number39 % i == 0) {
      sum6 += i;
    }
  }
  console.log(`Bo‘luvchilarning yig‘indisi: ${sum6}`);
};
easy37();

// Funksiya yozing, u foydalanuvchi kiritgan sonni faqat juft bo‘lsa kvadratini hisoblaydi.
const easy38 = () => {
  let number40 = +prompt("Sonni kiriting:");

  if (number40 % 2 == 0) {
    let sum7 = number40 * number40;
    console.log(`Sonning kvadrati: ${sum7}`);
  } else {
    console.log("Son juft emas.");
  }
};
easy38();

// Funksiya yozing, u berilgan son 100 dan katta bo‘lsa, uni ikki barobar oshiradi, aks holda 10 qo‘shadi.
const easy39 = (number41) => {
  if (number41 > 100) {
    return number41 * 2;
  } else {
    return number41 + 10;
  }
};
console.log(easy39(120));
console.log(easy39(50));

// Funksiya yozing, u foydalanuvchi kiritgan sonning barcha raqamlarini birma-bir chiqaradi.
const easy40 = () => {
  let number42 = +prompt("Sonni kiriting:");
  while (number42 > 0) {
    let sum8 = number42 % 10;
    console.log(sum8);
    number42 = Math.floor(sum8 / 10);
  }
};
easy40();

// 41–50: Murakkabroq masalalar
// Funksiya yozing, u foydalanuvchi kiritgan ikki sonning o‘zaro karrali ekanligini aniqlaydi.
function easy41() {
  let num43 = +prompt(`Son1ni kiriting`);
  let num44 = +prompt(`Son 2ni kritng`);
  if (num43 % num44 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
// Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisini hisoblaydi.
function easy42() {
  let num45 = +prompt(`Sonni kiriting`);
  let sum9 = 0;
  while (num45 > 0) {
    sum9 += num45 % 10;
    num45 = Math.floor(num45 / 10);
  }
  return sum9;
}
console.log(easy42());

// Funksiya yozing, u 1 dan foydalanuvchi kiritgan sondan katta bo‘lgan barcha sonlarni ekranga chiqaradi.
function easy43() {
  let num46 = +prompt("Sonni kiriting");
  for (let i = num46 + 1; i <= 100; i++) {
    console.log(i);
  }
}
easy43();

// Funksiya yozing, u foydalanuvchi kiritgan ikkita sonning bo‘linmasini hisoblaydi (qoldiqsiz).
function easy44() {
  let num47 = +prompt(`Son 1ni kiriting`);
  let num48 = +prompt(`Son 2ni kiriting`);
  if (num47 % num48 == 0) {
    console.log(true, num47 / num48);
  }
}
// Funksiya yozing, u 1 dan n gacha bo‘lgan barcha sonlarning kvadratlarini ekranga chiqaradi.
function easy45() {
  let num49 = +prompt(`Sonni kiriting`);
  let i = 1;
  while (i <= num49) {
    console.log(i ** 2);
    i++;
  }
}
// Funksiya yozing, u foydalanuvchi kiritgan sonning o‘z-o‘ziga karraligini aniqlaydi.(ishlanmaydi)
// Funksiya yozing, u foydalanuvchi kiritgan sonning har bir raqamini alohida kvadratga oshiradi va chiqaradi.
function easy46() {
  let num50 = +prompt(`Sonni kiriting`);
  while (num50 > 0) {
    console.log(`${num50 % 10} soni kvadrati ${(num50 % 10) ** 2}`);
    num50 = Math.floor(num50 / 10);
  }
}

// Funksiya yozing, u 1 dan 50 gacha bo‘lgan barcha sonlarning faqat toqlari yig‘indisini hisoblaydi.
function easy47() {
  let num51 = 0;
  let i = 1;
  while (i <= 50) {
    if (i % 2 == 1) {
      num51 += i;
    }
    i++;
  }
  return num51;
}
console.log(easy47());

// Funksiya yozing, u foydalanuvchi kiritgan sonni teskari tartibda chiqaradi.
function easy48() {
  let sum11 = 0;
  let num52 = +prompt(`Sonni kiriting`);
  while (num52 > 0) {
    let dig = num52 % 10;
    sum11 = sum11 * 10 + dig;
    num52 = Math.floor(num52 / 10);
  }
  console.log(sum11);
}

// Funksiya yozing, u foydalanuvchi kiritgan sonning raqamlari yig‘indisi 10 dan katta yoki kichikligini aniqlaydi.
function easy49() {
  let num53 = +prompt(`Sonni kiriting`);
  let sum12 = 0;
  while (num53 > 0) {
    sum12 += num53 % 10;
    num53 = Math.floor(num53 / 10);
  }
  if (sum12 > 10) {
    console.log(`${sum12} 10dan katta`);
  } else {
    console.log(`${sum12} 10dan kichik`);
  }
}
