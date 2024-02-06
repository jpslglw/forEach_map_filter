/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let newArr = []; // defining empty array to be filled
    arr.forEach(function(val,i){
        newArr[i] = val*2; // using for each to fill the array with double values
    })
    return newArr; // return the created array
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let newArr2 = []; // defining empty array to be filled
    arr.forEach(function(val2){
        if (val2 % 2 == 0)
        newArr2.push(val2); // using for each to fill the array with even numbers
    })
    return newArr2; // return the created array
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newArr3 = []; // defining empty array to be filled
    arr.forEach(function(val3){
        newArr3.push(val3[0] + val3[val3.length-1]); // using for each to fill the array with new strings
    })
    return newArr3; // return the created array
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newArr4 = []; // defining empty array to be filled
    arr.forEach(function(val4){
        val4[key] = value;
        newArr4.push(val4); // using for each to fill the array with new inputs
    })
    return newArr4; 
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let obj = {}; // defining empty object to be filled
    const vowels = 'aeiou'; // defining vowels
    let splitArr = str.split(""); // split string to access each character
    splitArr.forEach(function(letter) {
        let lowerCase = letter.toLowerCase() // lower case each letter
        if (vowels.indexOf(lowerCase) !== -1) {
          if (obj[lowerCase]) {
            obj[lowerCase]++; // iterate number if letter reoccurs
          } else {
            obj[lowerCase] = 1; // otherwise 1
          }
        }
      });
      return obj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(val){ // returning value returned from map function
        return val*2; // using for each to fill the array with double values
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val2,i){ // returning value returned from map function
        return val2*i; // using for each to fill the array with number*index
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(val3,i){ // returning value returned from map function
        return val3[key]; // take each value from objects
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(val4,i){ // returning value returned from map function
        return val4['first']+' '+val4['last']; // take value from objects and add space
    })
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val){ // returning value returned from filter function
        if (val[key]) // checking for key included
        return val; // returning that array entry
    }); // returning the value inside the array entry
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function(val2){ // returning value returned from filter function
        return val2 === searchValue; // returning the search value if there
    })[0]; // returning the value inside the array entry
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
        return arr.filter(function(val3){ // returning value returned from filter function
            if (val3[key] === searchValue) // checking for key included
            return val3; // returning that array entry
        })[0]; // returning the value inside the array entry
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let arr = []; // defining empty object to be filled
    const vowels = 'aeiou'; // defining vowels
    let splitArr = str.split(""); // split string to access each character
    splitArr.filter(function(letter) {
        let lowerCase = letter.toLowerCase() // lower case each letter
        if (vowels.indexOf(lowerCase) === -1) {
          arr.push(lowerCase); // create the new array
        }
      });
      return arr.join(""); // join without commas
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
        return arr.filter(function(val){
            if (val % 2 !== 0)
            return val; // the array with ineven numnbers is used as array to be mapped
        }).map(function(val2){ 
            return val2*2; // using for each to fill the array with double values
        });
}