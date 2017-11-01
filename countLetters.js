function countLetter(string){

var counter = {};

for (var i = 0; i < string.length; i += 1){
  //identify current letter - grab information

  var letter = string[i]
  console.log(letter)

  //check to see if counter has letter as key
if(counter[letter]) {
counter[letter] = counter[letter] + 1
} else {
  counter[letter] = 1;
}



  //if it does have letter as key - take current value and + 1. Otherwise value is 1

}
return counter;

}
console.log(countLetter("Jane Desbarats"))

// var obj = {};

// obj.first = 1;
// obj['second'] = 2;

// console.log(obj.first, obj['first'], obj.second, obj['second']);

// var key = 'second';

// obj.key
// obj['key']

// obj[key]

