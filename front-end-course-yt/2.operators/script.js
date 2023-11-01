// MAIN: OPERATORS

  // SUB: ARITHMETIC OPERATORS

    /* [ + - * / % ** ++ -- ]*/

    console.log(20+70);


    const resultx = 20 + 50 / 2;
    console.log(resultx)
    // the right side of the equal sign is called Javascript Expression while on the left side is the variable

    console.log(100 % 50)
    // modulus property - identifies remainder.
    // in the example the remainder of 100 divided by 50 is 0. So is displays zero.

    console.log(100 % 77)
    // in the example, the console shows 23 because 100 divided by 77 is 1 and the remainder is 23.

    console.log(8*8)
    // multiplication operator

    console.log(8**2)
    // exponent operator, 8 raise to 2 is 64.

    let startingNumber = 0;
    startingNumber++
    startingNumber++
    startingNumber++

    //this operator is equal to startingNumber = startingNumber + 1;

    startingNumber--
    startingNumber--
    startingNumber--
    // this is minus

    console.log(startingNumber)
    // NEW DISCOVERY: put the operators before the console because the console reads from top to bottom. So, always make the console.log last or else it will not read the operator when the operator is placed after the console.
    
    /* This increment operator will come in handy when dealing with loops */




  //SUB: ASSIGNMENT OPERATORS

    /* [ = += -= *= /= ] */
    /* this is not usually useful, probably you will not use it  for the next 20 years of front end coding */
  const myVariable = 20;

  let x = 10;
  console.log(x = x + 5);

  console.log(x+=5);
  // takes whatever on the right side to the left side so what was 15 is going to be 20.
  // this is the same with what i've written like (x = x + 5);
  
  console.log(x-=5);
  // minus 5

  console.log(x/=3);
  // divide

  console.log(x+=2);
  // plus

  //" = " is an operator that  is useful here. others are useless since you can already use arithmetic operators.

  // the reason why this is useless since it is just clear if we say x = x + 5 instead of x+=5.




  // SUB: COMPARISON OPERATORS

  const result1 = 20 > 18; 
  console.log(result1)


  const result2 = 20 === 20;
  console.log(result2)
  // === means is 20  equal to 20 in value and in type?

  // === == !== !=
  // === opposite is !==
  // == opposite is !=

  /*  == vs === */

  /* == compares value and data type doesnt matter while in ===, data type matter.
  */
 const stringValue = '20';
 const numberValue = 20;

  console.log(stringValue == numberValue)
  // it shows true because it is implicitly coercing the data type of these values. in easier words, it converts the string to a number then compare the values of the numbers.
  
  console.log(stringValue === numberValue)
  // it shows false because they are different type

  // triple equal is more recommended because we are being explicit

  console.log(Number(stringValue) === numberValue);

  //in this code Number(stringValue), we are being explicit rather than implicit, its not implicit like the javacscript does when double equal.
  // it is true.

   console.log(resultValue = stringValue == numberValue);
  // javascript reads the value of the right side which is true 
  // then, it assigns the  true to the result value.

  //  !=  'not equal'
  // also doesnt care about the type of data


  // !== 'not equal'
  // data type is important
  // tricky


  const myArray = [1, 2, 3, 4, 5]; 

  console.log(myArray === myArray )
  // this is true because it is itself

  const anotherArray = [1, 2, 3, 4, 5]; 

  console.log(myArray === anotherArray)
  // this is false since it compares other array to another array even they have the same value. youtuber said it is complex to explain.

  const myObj = {
    property1: 'some value',
    property2: 20
  }; 

  console.log(myObj === myObj)
  
  const anotherObj = {
    property1: 'some value',
    property2: 20
  }; 
  console.log(myObj === anotherObj)
  // this is the same with objects

    // SUB SUB: numeric comparison operators

    console.log( 20 < 40)

    console.log(40 > 20)

    console.log( 20 <= 40)

    console.log( 20 >= 20)

  // ternary operator

  const result = 20 === 20 ? 'values match' : 'values do not match';
  console.log(result)

  // if else
  let resultVariable;

  if (20 === 20) {
    resultVariable = 'values match';
  } else {
    resultVariable = 'values do not match';
  }

  console.log(resultVariable)
    // basically, ? in ternary operator is like if and : in ternary operator is like else
  
  
  
  //SUB: LOGICAL OPERATORS

    /* [ && || ! ] */

    console.log(20 === 20 && 10 === 10);
    // its true because both side of && are true.

    console.log(20 === 20 || 10 === 12);
    // its true because it only need 1 true for the whole expression to be true.

    console.log(!(20 === 20))
    // it shows false because ! reverses the result.
    console.log(!!(20 !== 20))

  const isUserLoggedIn = true;

  const doesUserHavePermission = false;

  const canUserPerformAction = isUserLoggedIn && doesUserHavePermission;

  console.log(canUserPerformAction);

  let access

  if (canUserPerformAction === true) {
    access= 'granted'; 
  } else {
    access= 'denied';
  }
  console.log(access)

  const result3 = !(((40/20) === 2 && true) || ('yes' === 'no'))

  console.log(result3)
  // this is a bad line since it is not readable. pls dont think you are smart if you wrote this.

  const step1 = 40/20;

  const step2 = step1 === 2;

  const step3 = step2 && true;

  console.log(step3)

  const step4 = 'yes' === 'no';
  console.log(step4)

  const step5 = step3 || step4;
  
  const step6 = !step5;

  console.log(step6)
  // this is false

  const result4 = (() => {
    return 20;
  })();
  //  function evaluating to a variable
  // right side is function that returns a value of 20
  // immediately invoked function
  // we havent tackled this btw
  console.log(result4)

  
// challenge4
  const expression1 = 100 % 50;
  const expression2 = 100 / 50;
  const expression3 = expression1 < expression2;
  const expression4 = expression3 && 300 + 5 === 305;
  const expression5 = !expression4;

  console.log(expression4);

  console.log( true && 'ass');
  console.log( false && 'ass');