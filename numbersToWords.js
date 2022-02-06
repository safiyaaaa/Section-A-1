// Numbers to words

// This program is will take a number in the form of a string and will return that number in words

// Write extensive tests for this code, you are not required to fix any bugs but add a comment in the tests that fail explaining why they have failed.

// The valid range for this function is 0 to 100 inclusive.

// Make sure you are testing all branches of the code. This includes all possible condtions met in the if statements and all the return values made possible by them.

// Reflect on whether you need to test every number from 0 to 100 but do make sure you are testing all the values in the units, tens and teens object. Also think about what inputs the function should take and what will happen if you give it an input that isn't a number in the form of a string. The function should always return a value and valid returns from the function are one, two etc. Undefined considered to be and unvalid return value. For the purpose of testing invalid inputs you can choose what you think they should return.

var units = {
  //Commented line below will make test case 2.2 pass only
  //'0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
}

var tens = {
  '2': 'twenty',
  '3': 'thirty',
  '4': 'fourty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety'
}

var teens = {
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen'
}

function numbersToWords(num) {
  // Function takes a number that has a datatype of string e.g. '13' and outputs letter string
  // parameter num: datatype string
  if (11 <= num && num <= 19) {
    return teens[num]
  }
  else if (num.length == 1) {
    return units[num]
  }
  else {
    return tens[num[0]] + ' ' + units[num[1]]
  }
}

module.exports = numbersToWords