// EASY 1: Массивын бүх тоог 2-оор үржүүл (map ашигла)
// [1, 2, 3] -> [2, 4, 6]
const e1 = [1, 2, 3, 4];
// Код энд бичнэ үү:
 
 
// EASY 2: 10-аас их тоонуудыг шүүж ав (filter ашигла)
// [5, 12, 8, 20] -> [12, 20]
const e2 = [5, 12, 8, 20, 3];
// Код энд бичнэ үү:
 
 
// EASY 3: "Bold" гэдэг нэрийг олж ав (find ашигла)
const e3 = ["Bat", "Oyun", "Bold", "Sara"];
// Код энд бичнэ үү:
 
 
// EASY 4: Массивын бүх тоонд 10 нэм (map ашигла)
// [1, 2, 3] -> [11, 12, 13]
const e4 = [1, 2, 3, 4];
// Код энд бичнэ үү:
 
 
// EASY 5: Тэгш тоонуудыг л шүүж ав (filter ашигла)
// [1, 2, 3, 4, 5, 6] -> [2, 4, 6]
const e5 = [1, 2, 3, 4, 5, 6];
// Код энд бичнэ үү:
 
 
/* ============================================================
   🟡 MEDIUM (5 дасгал)
   ============================================================ */
 
// MEDIUM 1: Барааны үнийг 10%-иар нэмэгдүүл (map ашигла)
// 1000 -> 1100
const m1 = [1000, 2000, 5000];
// Код энд бичнэ үү:





























// E1. Object-оос мэдээлэл авах
// student object-оос сурагчийн нэр, нас, оноог хэвлэ.
 
const studentE1 = {
  name: "Anu",
  age: 15,
  score: 88,
};
 
// Expected:
// Anu
// 15
// 88
 
console.log(studentE1.age)
console.log(studentE1.name)
console.lod(studentE1.score)
 
// E2. Object-ийн утгыг өөрчлөх
// Машины өнгийг "Black" болгож, 
// дараа нь бүх object-ийг хэвлэ.
 
const carE2 = {
  brand: "Toyota",
  year: 2020,
  color: "White",
};
 
// Expected:
// {
//   brand: "Toyota",
//   year: 2020,
//   color: "Black"
// }
 console.log(carE2.brand)
 console.log(carE2.year)
 console.log(carE2.color)
 
// E3. Шинэ property нэмэх
// phone object-д price нэртэй шинэ property нэм.
// Утга нь 2500000 байна.
 
const phoneE3 = {
  brand: "Samsung",
  model: "S25",
};
 
// Expected:
// {
//   brand: "Samsung",
//   model: "S25",-
//   price: 2500000
// }
 
console.log(phoneE3.brand)
console.log(phoneE3.model)
console.log()
 
// E4. Object destructuring
// movie object-оос title, year, rating утгуудыг
// destructuring ашиглан салгаж аваад хэвлэ.
 
const movieE4 = {
  title: "Interstellar",
  year: 2014,
  rating: 9,  
};

 
// Expected:
// Interstellar
// 2014
// 9
 
console.log(movieE4.title)
console.log(movieE4.year)
console.log(movieE4.rating)
 
// E5. Array destructuring
// Array-ийн эхний хоёр өнгийг
// firstColor, secondColor хувьсагчид хадгалаад хэвлэ.
 
const colorsE5 = ["red", "blue", "green", "yellow"];
 
// Expected:
// red
// blue
 
const [first, second] = colorsE5;
 
// E6. Spread ашиглан object хуулах
// user object-ийг spread ашиглан хуулж,
// copiedUser нэртэй шинэ object үүсгэ.
//
// Do not write:
// const copiedUser = user;
 
const userE6 = {
  name: "Bataa",
  age: 16,
  level: "Beginner",
};
 
// Expected:
// {
//   name: "Bataa",
//   age: 16,
//   level: "Beginner"
// }    
 const copiedUser = {...userE6}
 console.log(copiedUser);
 
 

// E7. Хуулаад нэг утгыг өөрчлөх
// product object-ийг өөрчлөхгүйгээр
// updatedProduct нэртэй шинэ object үүсгэ.
// Шинэ object-ийн price нь 180000 байх ёстой.
 
const productE7 = {
  name: "Keyboard",
  price: 150000,
  color: "Black",
};
 const updated = {...productE7, price:180000}
// Expected updatedProduct:
// {
//   name: "Keyboard",
//   price: 180000,
//   color: "Black"m```
// }
//
// Original product must stay unchanged.
  
// your code here
// M1. Function-д object дамжуулах
// showStudent() function бич.
//
// Function нь student object авч,
// дараах өгүүлбэрийг буцаана:
//
// "Anu scored 90 points."
 
const studentM1 = {
  name: "Anu",
  score: 90,
};
 
function showStudent(student) {
  // your code here
}
 
console.log(showStudent(studentM1));
 
// Expected:
// Anu scored 90 points.
 
// M2. Destructuring ашигладаг function
// getProductInfo() function дотор
// object destructuring ашигла.
//
// name, price, stock утгуудыг салгаж аваад
// өгүүлбэр буцаа.
 
const productM2 = {
  name: "Monitor",
  price: 850000,
  stock: 5,
};
 
function getProductInfo(product) {
  // your code here
}
 
console.log(getProductInfo(productM2));
 
// Expected:
// Monitor costs 850000 and has 5 items in stock.
 
// M3. map() ашиглан нэрүүдийг авах
// Бүх сурагчийн нэрийг агуулсан
// шинэ array үүсгэ.
 
const studentsM3 = [
  { id: 1, name: "Anu", score: 90 },
  { id: 2, name: "Bat", score: 75 },
  { id: 3, name: "Saraa", score: 85 },
];
 
// Expected:
// ["Anu", "Bat", "Saraa"]
 
// your code here
 
// M4. filter() ашиглан тэнцсэн сурагчдыг авах
// 80 болон түүнээс дээш оноотой сурагчдыг ол.
 
const studentsM4 = [
  { name: "Anu", score: 90 },
  { name: "Bat", score: 65 },
  { name: "Saraa", score: 85 },
  { name: "Bold", score: 72 },
];
 
// Expected:
// [
//   { name: "Anu", score: 90 },
//   { name: "Saraa", score: 85 }
// ]
 
// your code here
 
// M5. find() + destructuring
// id нь 3-тай тэнцүү хэрэглэгчийг ол.
// Дараа нь name болон age утгуудыг
// destructuring ашиглан салгаж аваад хэвлэ.
 
const usersM5 = [
  { id: 1, name: "Anu", age: 15 },
  { id: 2, name: "Bat", age: 17 },
  { id: 3, name: "Suvd", age: 16 },
];
 
// Expected:
// Suvd
// 16
 
// your code here
 
// M6. Array spread ашиглан шинэ элемент нэмэх
// Анхны products array-г өөрчлөхгүйгээр
// newProduct-ийг нэмсэн newProducts array үүсгэ.
 
const productsM6 = [
  { id: 1, name: "Mouse", price: 50000 },
  { id: 2, name: "Keyboard", price: 120000 },
];
 
const newProductM6 = {
  id: 3,
  name: "Monitor",
  price: 700000,
};
 
// Expected newProducts:
// [
//   { id: 1, name: "Mouse", price: 50000 },
//   { id: 2, name: "Keyboard", price: 120000 },
//   { id: 3, name: "Monitor", price: 700000 }
// ]
//
// Original productsM6 must stay unchanged.
 
// your code here