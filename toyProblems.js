//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  // reverseIt:

  function reverseIt(word) {
    reversed = word.split('').reverse().join('')
    console.log(reversed)
  }

  reverseIt('Will')

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  // removeDups:

  const array = [1,2,3,4,3,2,1]

  let unique = [...new Set(array)];
  console.log(unique);
  //Set is a js function that removes dups

  //if ES6 functions arent avaliable I would do it this way

  var unique = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

  console.log(uniq)
  
  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  // titleIt:

  function titleIt(str) {
   var splitStr = str.toLowerCase().split(' ');
   //this splits the words in the string to individual strings in an array
   for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
      //splitStr[i].charAt(0).toUpperCase takes the first letter in each string and then cappitalizes adn assigns it back to the array
   }
   return splitStr.join(' ');
   //directly return the joined string 
  }

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  // vowelCounter:

  //there are two ways quick ways I can think of doing this problem

  //#1
  function vowelCounter(str) {
    let counter = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for (let letter of str.toLowerCase()) {
      if (vowels.includes(letter)) {
        counter++
      }
    }
  console.log(counter)
  }
  vowelCounter('the quick brown fox jumped over the lazy dog')

  //#2
  var string = 'the quick brown fox jumped over the lazy dog'
  var vowels = /[aeiou]/gi
  var found = string.match(vowels).length 
  console.log(found)

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  // isPrime:

  function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
  }

  console.log(isPrime(10))

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  //foo: '1020'

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  // log1: Hello World
  // log2: bar is no defined (it is not within the scope)
}
