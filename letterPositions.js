function countLetterPositions(string){

var counter = {};

for (var i = 0; i < string.length; i += 1){

  //identify current letter position - grab information

  var letterPositions = string[i]
  console.log(letterPositions)

  //check to see if counter has letterPosition as key
if(counter[letterPositions]) {
counter[letterPositions].push(i)
} else {
  counter[letterPositions] = [i];
}

  //if it does have letter as key - take current value and + 1. Otherwise value is 1

}
return counter;

}
console.log(countLetterPositions("Jane Desbarats"))

// var obj = {};

// obj.first = 1;
// obj['second'] = 2;

// console.log(obj.first, obj['first'], obj.second, obj['second']);

// var key = 'second';

// obj.key
// obj['key']

// obj[key]

