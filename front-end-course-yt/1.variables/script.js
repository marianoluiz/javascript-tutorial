// This is my first JavaScript code
console.log('Hello World');

// Variable
    let name = 'Mosh';
    console.log(name);
        
            // Variables cannot be a reserved keyword [if,let,const]
            // Variables should be meaningful and descriptive
            // Variable cannot start with a number
            // Cannot contain a space or hyphen (-)
            // Are case-sensitive

            let firstName = 'Mosh';
            let lastName = 'Hamedani';


// Constant
    let interestRate = '0.3';
    interestRate = '1';
    console.log(interestRate)
            // If used const instead of let, it would be error.
            // Best practice: use const when not reassigning.
 
// Primitives or Value Types
        // String
        let nickname = 'Mosh'; 
        // Number
        let age = 30;
        // Boolean
        let isApproved = false;
        // Undefined
        let selectedColor = null;

// Reference types

        // object
            const person = {
                name: 'Mosh',
                age: 30
            };

            // Dot Notation
            person.name = 'John';
            console.log(person)

            // Bracket Notation
            person ['name'] = 'Mary';

            console.log(person.name);

        // arrays
            let selectedColors = ['red', 'blue'];
            selectedColors[2] = 'green'
                // has index value of 0 , 1 , and so on
            console.log(selectedColors.length);
                // . is properties
     
        // function
            // performing a task
            function greet (name, lastName) {
                console.log('Hello ' + name + ' ' + lastName);
            }


            // function number (a,b) {
            //   console.log(a+b);
            // }
            // number(1,2)
            // number(3,2)


            greet('John', 'Smith');
            greet('Mary', 'Cooper');

                //  ' ' + ' ' is concatenate
                    // (name) is not accessible outside
                    // (name) is the parameter

                    // greet("John"); is the argument

                // greet() to indicate it is a statement

                    // we do not need semi colon for function since it is a function decaration.

            // calculating a value
            function square(number) {
                return number * number;
            }
            

                // let number = square(2)
                // console.log(number); or we can just
            console.log(square(2))


                
// INDEXES OF ARRAYS

  const firstArray = [10, 20, 30, 40];
  console.log(firstArray[0]);
  // the index 0 targets 10
  // index 1 targets 20 and so on

  const secondArray = [10, 'a string', { prop: 'guns'}, [1, 2]];

  console.log(secondArray)
  console.log(secondArray[0])
  console.log(secondArray[3])

  console.log(secondArray[3][0])
  // this console targets the index 0 of the 3rd index which is so cool lmao. this means you can get value from nested arrays.

// OBJECTS
  const objectVariable = { 
    prop1:30,
    prop2:50 };
  console.log(objectVariable)

  // to access  the value within array, we use this format it is different from the way we use access an index for arrays

  console.log(objectVariable.prop1)

  // nested  object
  const nestedObject = {
    layer1: {
        layer2: {
          layer3: {
            targetValue: 20
          }
        }
      }
    } 

    // to access, we use:
    console.log(nestedObject.layer1.layer2.layer3.targetValue);
    // or you can use, not working  at nested though so use the dot notation when targeting a nested shit
    console.log(objectVariable['prop1']) 
    // you can use these 2 ways in different situation, a guy from youtube prefers dot notation


//function

const functionContainerVariable = function() {
  return 20;
}

console.log(functionContainerVariable());




/* 
    const variable1 = 10;  
    |number|

    const variable2 = "pooleBoy";
    |string|

    const variable3 = false;
    |boolean|
*/


//Challenge#1
/* 
  const myBoolean = true 
  const myString = 'hello world' 
  const firstNumber = 20 
  let secondNumber = 40
  secondNumber = 80 
  const myArray = [myBoolean, myString]

  const myObject = {
      firstProperty: myArray,
      sumProperty: firstNumber + secondNumber
  };

  myObject

  myObject[myObject.sumProperty]

  myObject.firstProperty[1]

Challenge#5
  
*/

const objectVariable1 = {
  property1: 'i am property 1',
  property2: 'i am property 2',
  property3: [20, 30, 40]
};

console.log(objectVariable1.property3[2])

const myArray1 = [20, 30, 40];
console.log(myArray1[2]);