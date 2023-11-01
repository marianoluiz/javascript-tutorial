// MAIN: FUNCTIONS, CONDITIONALS, AND LOOPS

  // SUB: CONDITIONALS
    if ('some string' === 'another string') {
      console.log('the strings are equal');
    } else {
      console.log('the strings are not equal');
    }

    const myExpression = (20 === 20) && (50 === 50);
    
    // basic format:
    /* if () {} else {} */

    const firstNumber = 20;
    const secondNumber = 10;
    const jsExpression = firstNumber > secondNumber;

    // if statement
    if (jsExpression) {
      console.log('this expression is true');
    }

    // An if-else statement with else if

    // Hint: you can add as many "else if" statements as you want
    // kung true, titigil na siya sa if. pag sablay sa if, didiretso sa 'else if' tas pag sablay uli didiretso sa 'else'.
    if (jsExpression) {
      console.log('the expression is true');
    } else if (firstNumber > 0) {
      console.log('the expression is false and the firstNumber is greater than 0');
    } else {
      console.log('expression false, and firstNumber 0 or less');
    }

    // switch case statement
    // we can use switch case statement that works like if else
    // this is just more readable when dealing with a lot of elements in it like this:

      // index
      const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

      // gets random number  between 0 and 4 and stores in a variable
      const randomIndex = Math.floor(Math.random() * colors.length );

      /* 
      remember, to get a value from an array, we use bracket notation. for example, to get 'green', we use 'colors[1]' */

      const randomColor = colors[randomIndex]
      
      // Switch / Case Statement

      switch (randomColor) {
        case 'orange':
          console.log('the color is orange');
          break;
        case 'green':
          console.log('the color is green');
          break;
        case 'yellow':
          console.log('the color is yellow');
          break;
        case 'purple':
          console.log('the color is purple');
          break;
        case 'blue':
          console.log('the color is blue')
          break;
        default:
          console.log('no color found');
      }

      // switch case statement is not usually used. you'll know later why.


  // SUB TOPIC: LOOPS

  /*  the reason we need loops is to iterate or loop over a set of resources*/

  /* resources means a bunch of similar data often stored in a database*/

  const arr = [20, 40, 60];

  console.log(arr[0])
  console.log(arr[1])
  console.log(arr[2])

  /* this is not efficient compared to loops */

  const blogPosts = [
    {
      title: 'What is JavaScript',
      author: 'Zach Gollwitzer',
      publishDate: 'Dec 20, 2020',
      content: 'some post content here'
    },
    {
      title: 'How do Arrays work?',
      author: 'Zach Gollwitzer',
      publishDate: 'Jan 1, 2021',
      content: 'some post content here'
    },
    {
      title: 'How long does it take to learn coding',
      author: 'Zach Gollwitzer',
      publishDate: 'Jan 20, 2021',
      content: 'some post content here'
    }
  ]
  
  for (let i = 0; i < blogPosts.length; i++) {
      const postTitle = blogPosts[i].title;
      console.log(postTitle);
      const postAuthor = blogPosts[i].author;
      console.log(postAuthor);
      const postDate = blogPosts[i].publishDate;
      console.log(postDate);
      const postContent = blogPosts[i].content;
      console.log(postContent);
  }

  /* to simplify loop: */

  for (let i = 0; i < 100; i++) {
    console.log(i);
  }

      /* inside the bracket is the iteration of this loop. ito yung uulitin. */

      /* we let i = 0 since array starts at index 0*/
      /* i is just a variable, we can replace it with any variable name we want */

      /* stop condition [ i < 100 ] means loop will stop when i = 100 
      the reason for this is it starts from 0 to 99 which is a hundred.*/
      /* we can try console.log(i) inside the bracket to see 0 to 99 in the console */

    const arrr = ['kwek kwek', 'fish ball', 'pares', 'lugaw', 7, 5, 11];

    for (let i = 0; i < arrr.length; i++) {
      if (typeof arrr[i] === 'number') {
        console.log(arrr[i]);
      }
    }

  // SUB TOPIC: FUNCTION

    function myFunction() {
      console.log('hello world, this is my first function');
    }
    // it doesn't do anything or rather print, because we haven't called or invoked this function.

    // execute a function, call a function, invoke a function means the same.

    // myFunction is just a variable that the computer remembers.

    // console.log(typeof myFunction)

    myFunction();

    // console.log(myFunction); 
    // console.log(myFunction());

    // we have to declare a function first then we have to call a function.




    // we have a way to declare and call them at the  same time.

    // it is not used frequently, it is called an "immediately invoked function".

    (function anotherFunction() {
      console.log('hello');
    })();

    // SUB SUB TOPIC: PARAMETERS AND ARGUMENTS

      function myFunctionn(param1, param2) {
        console.log(param1);
        console.log(param2);
      }
      
      // inside () is a parameter. 
      
      // parameters are saying: hey computer im going to pass in some value inside this function so be ready for them.

      // we dont know what param1 and param2 equal to because we haven't assigned them as "arguments".

      // we still have to invoke the function.

      // console.log(myFunctionn());

      // the parameters are equal to the argument that you pass in.

      myFunctionn(20, 'some string');

      // 20 is param1; 'some string' is param2.

  // SUB TOPIC: BASIC INTRODUCTION TO SCOPE
      
      /* scope is where  these variables are available in the code.*/

      /* console.log(param1); */

      // it is not available in the global scope, it is only available in the function.

      // scopes are super complex when learned deeply but this is just basic.

  // SUB TOPIC: ANOTHER WAY OF WRITING A FUNCTION.

      function myFunctionnnn () {
        console.log('something');
      }


      // this is a normal function, In general, it is not recommended to write functions with the same name. *you can write same name function but different parameters*.

      
      const anotherFunctionn = function () {
        console.log('another thing');
      }
      // anonomous function because  on the right side off the equal sign, the function doesn't have a name. However, we can use it since we assign it to a variable.

      // this doesn't appear in the console because again, we always need to invoke a function unless we make it a self invoked function. 
      console.log(anotherFunctionn);
      console.log(anotherFunctionn());
      // invoking is case sensitive.


    // SUB TOPIC: ANOTHER, ANOTHER WAY OF WRITING FUNCTION

      // arrow function.

      const arrowFunction = () => {
        console.log('i am an arrow function');
      }

      console.log(arrowFunction());

      () => {
        console.log('this wont work');
      }

      /* 
      function myFunction() {} 
      
      *practice the arrow function cause we gonna use it many
      */

      const myFunctionnn = () => {
        console.log('something');
      }

      const result = myFunctionnn();

      console.log(result)
      // this is undefined because the function did not return  anything. if we want to produce a value, we need to make return statement.

      // if we want function to produce a value, we need to put return return statement.

      const returnFunction = () => {
        const a = 20;
        return a;
      }

      const resultt = returnFunction();

      console.log(resultt)
      // it showed 20

      const improperReturnFunction = () => {
        let myNumber = 20;
        return myNumber;
        myNumber = 50;
      }
      // this is an error but is valid. myNumber is never reached by the return statement.

       const myNumber = 20;
       
       let myFunctionnnnn = () => {
        if (myNumber < 15) {
          return 'return the function early';
        }
        return 50;
        return 40;
       }
      //  pointless to put 2 returns na magkatabi.
       console.log(myFunctionnnnn())


  //SUB TOPIC: Objects and functions together

  function myFunction1() {
    return 20;
  }

  const aliasVariable = myFunction1

  console.log(aliasVariable());

  const myObj = {
    prop1: 50,
    prop2: myFunction1
  }

  console.log(myObj.prop2())

  //SUB TOPIC: built-in functions of javascript

  //https://www.tutorialspoint.com/javascript/javascript_switch_case.htm

  // method is another synonym of function --- Object method

  // lets try a string built in function from that website.

  const myString = 'zach';
  
  myString.replace('h', 'k');
  // replace h with a k
  // it changes it here but when printed....
  console.log(myString)
  // it doesn't replace because it doesnt replace the new value but rather just returned it.

  const newName = myString.replace('h', 'k');

  console.log(newName);
  // in here it completely replaces it



  // more examples of using javascript built in functions:

  console.log(myString.toUpperCase());

  console.log(myString)

  let str = 'hello world';

  console.log(str.toUpperCase().split(""))
  //  it looks at the string and splits the space there and makes it an array

  const result1 = str.toUpperCase().split(" ");

  console.log(result1)


  // finds the index of the element

  // we can always make it simpler

  const step1 = str.toUpperCase();

  const step2 = step1.split(" ");

  const step3 = step2.indexOf("WORLD");

  console.log(step3);
  // it shows 1, it is just same but the idea is you can make it simpler or break it into steps.




  /* IN SUMMARY THESE ARE THE WAYS YOU CAN WRITE A FUNCTION,
  
  1. function myFunction() {
      console.log('hello world, this is my first function');
    }

  2. (function anotherFunction() {
      console.log('hello');
    })();

  3. const anotherFunctionn = function () {
        console.log('another thing');
      }

  4. const arrowFunction = () => {
        console.log('i am an arrow function');
      }
  */




      
 /* Save:
 class SmallestIntegerFinder {
  findSmallestInt(arrayOfNumbers) {
    
    let smallestNumber;
    
    for (let i = 0; i < arrayOfNumbers.length; i++) {
    
      const arrNumber = arrayOfNumbers[i];
    
      if (i === 0) {
        smallestNumber = arrNumber;
      }
      
      if (arrNumber < smallestNumber) {
        smallestNumber = arrNumber;
      }
    }
      return smallestNumber;
  }
}
 */