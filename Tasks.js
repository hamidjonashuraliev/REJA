// // A- TASK Animals
// const Animals = ["fox", "ant", "bird", "lion", "wolf", "deer", "bear", 
//                "frog", "hen", "mole", "duck", "goat", "dog", "cat", "bat", "cock", "cow" ]  

// const onSearch = (input) => {
//     let newArr = [];
//     for(let i= 0; i < Animals.length; i++){
//         if(Animals[i].includes(input.toLowerCase())  || Animals[i].includes(input.toUpperCase())){
//             newArr.push(Animals[i])
//         }
//     }
//     console.log(newArr);
// }
// onSearch('h');




// B-task
// let r = "hamidjon66bobo664";
// let x = "2bobo5john9keys";
// function hisob(Str) {
//     let newStr = Str.match(/[0-9]/g).join("");
//     return newStr.length;
// }
// let result = hisob(r);
// console.log(result);


//e - task 
//1- method 
// function getReverse(hello) {
//     letter_text = hello.split("");
    
//     const new_list = [];
//     letter_text.forEach(ele => {
//       new_list.unshift(ele);
//     });
//     console.log(new_list.join(""))
// }

// getReverse("world");


// //2- method 
// function getReverse(world) {
//     let split = world.split("").reverse().join("");
//     console.log(split);
//     // let reversed = split.reverse()
//     // let str = reversed.join("");
// }
//  getReverse("hello");

//  //3- method 
//  function getReverse(world) {
//     let split = world.split("")
//     console.log(split);
//     let reversed = split.reverse()
//     console.log(reversed);
//     let str = reversed.join("");
//     console.log(str);
// }
//  getReverse("hello");


//f-task
function findDoublers(str) {
    // Bo'sh ob'ektni yaratamiz, harflarni san'aymiz
    const charCount = {};

    // Stringni aylanib o'tamiz va harflarni san'aymiz
    for (const char of str) {
        if (charCount[char]) {
            // Agar harf allaqachon sanalgan bo'lsa, true qaytar
            return true;
        }
        charCount[char] = 1;
    }

    // Harf bir marta ham takrorlanmagan bo'lsa, false qaytar
    return false;
}

// Test qilish
console.log(findDoublers("hello")); // true
console.log(findDoublers("world")); // false
console.log(findDoublers("programming")); // true

// TASK-I

basic_array= ['w','o','r','d']
function getCompute(basic_array) {
  const first_index = basic_array.shift()
  console.log(first_index);
  basic_array.push(first_index);
  console.log(basic_array)
}

getCompute(['h','e','l','l','o'])