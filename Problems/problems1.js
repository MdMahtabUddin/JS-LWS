// remove falsy value from any array 

// ??

//2. convert any value to boolean  
// console.log('mahtab');

// যেকোনো ভ্যালু কে বুলিয়ানে কনভার্ট করতে চাইলে সামনে !! সাইন ব্যবহার করলেই হবে । 
// using !! infront of any value  
// console.log(!! 'mahtab'); 

// we can also use Boolean()
// console.log(Boolean('Mahtab'));

// 3. Resising any array 

const animal =['mahtab','shawon','rubel','pavel','mona'];

// we can use array length property  
// রিসাইজ করার জন্য লেন্থ উল্লেখ করে দিলেই হবে । 
animal.length =3;
// console.log(animal)


// 4. how to flattern a multi dimenstional array  

const students =['mahtab',['shawon','payel'],['rubel,jannat']];


// we can use Array.flat method to flatren one level array 
// console.log(students.flat());

// multi level array 
const friens =['mahtab',['shawon',['mona'], 'payel'],['rubel,jannat']];

// we can pass Infinity parameter to multilevel array 
// console.log(friens.flat(Infinity));








