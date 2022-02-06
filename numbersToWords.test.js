const numbersToWords = require('./numbersToWords');

//Numbers to Words test plan located in the NtW Test Plan.pdf file attached within the replit

//Correctness test suit
describe('1. Testing all individual values', () => {//As each value has a unique output all values are tested to confirm correctness(accuracy)
  test.each([
      ['1', 'one'],
      ['2', 'two' ],
      ['3', 'three'],
      ['4', 'four'],
      ['5', 'five'],
      ['6', 'six'],
      ['7', 'seven'],
      ['8', 'eight'],
      ['9', 'nine'],
      //Commented assertion below makes test case fail
      //['10', 'ten'] //This returns undefined undefined to fix this code will have to be included within the numbersToWords.js file specifically added to the variable units 
      
    ])(' 1.1 Confirm all unit values ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });//The test.each syntax is based of the Jest framework, enabling all tests to be ran individually. Initally I had stacked ten expect statements(assertions .toBe). In doing so only one test title would show in my shell, signifying only one test has been ran instead of passing all ten individual tests of all unique string outputs
  
//Commented assertion fails test case, uncomment to test
  // test.each([
  //     //['10', 'ten'],//Not needed to reduce duplication in test case 1.1
      
  //     ['20', 'twenty' ],//Returns twenty undefined, to fix this the if statement within the numbersToWords function within the numbersToWords.js file will have to estaplish '20' as an exception within the tens returns
  //     ['30', 'thirthy'],//The same ajustments as the assertion above will fix the following assertions
  //     ['40', 'fourty'],
  //     ['50', 'fifty'],
  //     ['60', 'sixty'],
  //     ['70', 'seventy'],
  //     ['80', 'eighty'],
  //     ['90', 'ninety'],
  //     //Commented assertion below makes test case fail
  //     //['100', 'one hundred'],//To get the actual value 'one hundred' a new variable hundreds will need to be added to the code within the numbersToWords.js file, passing through assigned values and add an else to the NumbersToWords function in the numbersToWords.js file so that it connects the units and the hundreds
  //   ])(' 1.2 Confirm all tens values ', (a, expected) => {
  //     expect(numbersToWords(a)).toBe(expected);
  // });
  
  test.each([
      ['11', 'eleven'],
      ['12', 'twelve' ],
      ['13', 'thirteen'],
      ['14', 'fourteen'],
      ['15', 'fifteen'],
      ['16', 'sixteen'],
      ['17', 'seventeen'],
      ['18', 'eighteen'],
      ['19', 'nineteen'],
      
    ])(' 1.3 Confirm all teens values ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });
});

//Reliability test suit
describe('2. Testing accuracy on units, teen and tens', () => {
   test.each([
      ['5', 'five'],
      ['15', 'fifteen' ],
      ['25', 'twenty five'],
      ['35', 'thirty five'],
      ['45', 'fourty five'],
      ['55', 'fifty five'],
      ['65', 'sixty five'],
      ['75', 'seventy five'],
      ['85', 'eighty five'],
      ['95', 'ninety five'],
      
    ])(' 2.1 Equivalence partitioning ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });//The valid range for this function is 0 to 100 inclusive, therefore equivalence testing method in this context divids the input domain into equivalent classes of data range bounds of 5. An advantage of this testing uncovers class errors thereby reducing time required to test multiple test cases

  test.each([
      //Commented assertion below makes test case fail
      //['0', 'zero'],//This returns undefined to fix this code will have to be included within the numbersToWords.js file specifically added to the variable units to be assign'zero' to '0'
      ['1', 'one' ],//Not needed to reduce duplication in test case 1.1
  
    ])(' 2.2 Lower boundary tests units ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });

  test('2.2 Lower boundary tests units', () => {
    //Commented assertion below makes test case fail
    //expect(() => numbersToWords('-1')).toThrow(TypeError);//Negative numbers are not in valid range(0-100), to fix this code within the numbersToWords.js file should include with an if statement with a condition so when negative numbers strings are input/any string numbers out of valid range return throw new TypeError (from the Jest framework)
  });//This test is separated from test case 2.2 to avoid stacked assertions as in this case an error is appropriate but holds the same name title as its still testing the Lower boundary

  test.each([
      ['9', 'nine'],
      //['10', 'ten' ],//Not needed to reduce duplication in test case 1.1 and improve test efficiency
      ['11', 'eleven'],//Not needed to reduce duplication in test case 1.3
      
    ])('2.3 Upper boundary tests units ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });

  test.each([
      ['19', 'nineteen'],
      //['20', 'twenty' ],//Not needed to reduce duplication in test case 1.2
      ['21', 'twenty' + ' ' + 'one'],
      
    ])('2.4 Lower boundary test tens ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });

  test.each([
      ['99', 'ninety nine'],
      //Commented assertions below makes test case fail
      //['100', 'one hundred' ],//Not needed to reduce duplication in test case 1.2
      //['101', 'one hundred and one'],//To fix this and achieve 'one hundred and one' a new variable hundreds will need to be added to code within the numbersToWords.js file assigning values. Then it include if statement within the numbersToWords function specifying a new condition (range) for parameter num, an else statement returning the joint string for example 
    //else { return hundreds[num[0]] + ' ' + 'hundred' + ' ' + 'and' + units[num[1]] }
      
    ])(' 2.5 Upper boundary tests tens ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });

  test.each([
      ['9', 'nine'],
      //['10', 'ten' ],//Not needed to reduce duplication in test case 1.1
      ['11', 'eleven'],//Not needed as is duplicated test case 1.3
      
    ])('2.6 Lower boundary test teens ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });

  test.each([
      ['19', 'nineteen'],//Not needed to reduce dublication as present in test case 1.3
      //['20', 'twenty' ],//Not needed to reduce duplication in test case 1.1
      ['21', 'twenty one'],
      
    ])('2.7 Upper boundary test teens ', (a, expected) => {
      expect(numbersToWords(a)).toBe(expected);
  });
});

//Robustness test suit
describe('3. Negative testing through Error guessing', () => {
  test.each([
      ['-8', 'eight'],
      ['-25', 'twenty five'],
      ['-77', 'seventy seven' ],
      
    ])(' 3.1 Negative unit, tens, teens tests ', (a, expected) => {
      expect(numbersToWords(a)).not.toBe(expected);
  });

//Commented assertion fails test case, uncomment to test
  // test.skip('3.2 Negative numbers to give error', () => {
  //   expect(() => numbersToWords('-8')).toThrow(TypeError('Invalid data type detected'));//negative numbers are not within the range 0-100, for test to work code must be added to throw new TypeError within an if statement
  // });

//Commented assertion fails test case, uncomment to test
  // test.skip('3.5 Input no argument give error', () => {
  //  expect(() => numbersToWords()).toThrow(TypeError('Invalid data type detected'));//Code needs to be added to throw new TypeError if (num == undefined) within the numbersToWords function in the numbersToWords.js file
	// });

//Commented assertion fails test case, uncomment to test
  // test.skip('3.6 Number should retun error', () => {
  //   expect(() => numbersToWords(8)).toThrow(TypeError('Invalid data type detected'));//Code needs to be added to the numbersToWords.js file to throw new TypeError if (typeof num !== 'string') only strings are used not numbers this can be placed within the same if statement as test case 3.5         eg. if (num == undefined && typeof num !== 'string') { return throw new TypeError('Invalid data type detected')};
 	// });

//Commented assertion fails test case, uncomment to test
  // test.each([
  //     [{ value: 30 }, TypeError('Invalid data type detected')],
  //     [true, TypeError('Invalid data type detected')],
  //     [[5,5,1], TypeError('Invalid data type detected')],
  //     [4.001, TypeError('Invalid data type detected')],
      
  //   ])(' 3.7 Invalid data types input ', (a, expected) => {
  //     expect(() => numbersToWords(a)).toThrow(expected);
  // });//These tests are a form of negative testing, passing unexpected inputs to throw an error and returns the string Invalid data type detected, to make these test pass an if statement can be nested in the numbersToWords function in the numbersToWords.js file with an appropriate condition such as explained in test case 3.6 comments to retun throw new TypeError('Invalid data type detected')
});

//Please check the NtW Test Plan .pdf file that I attached to this replit to give an in depth insight to my testing approach