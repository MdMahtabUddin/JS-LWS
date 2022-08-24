// Lws 36

// The JavaScript for in statement loops through the properties of an Object:

const person = {fname:"John", lname:"Doe", age:25};

for (let x in person){
    console.log(x);
}


// !Note 
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

// *Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

