// Task 1
let arr = Array(7);
arr.fill("Hello");
console.log(arr);

// Task 2
arr.fill("Hi", 2, 5);
console.log(arr);

// Task 3
let new_arr = Array(5);
for (let i = 0; i <  new_arr.length; i++) {
    new_arr[i] = i * 10;
}

console.log(new_arr);