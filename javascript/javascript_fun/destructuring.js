//#1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [ ,otherRandomCar ] = cars 
//Predict the outputcopy
console.log(randomCar)
console.log(otherRandomCar)


// predicted outcome ~ console.log(randomCar)
the variable returns any of the 3 cars listed 

//Actual Outcome
the variable returned the first car, Tesla

// predicted outcome ~ console.log(otherRandomCar)
the variable returns either Mercedes or Honda

//Actual Outcome
the variable returned the second car, Mercedes

//#2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// predicted outcome ~ console.log(name)
the variable returns Elon

//Actual outcome:
the variable returns name is not defined

// predicted outcome ~ console.log(otherName)
the variable returns Elon

//Actual outcome: 
"Elon"

//#3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; 
//predict the output
console.log(password);
console.log(hashedPassword);

//predicted outcome ~ console.log(password)
the variable returns 12345

//Actual outcome:
12345

//predicted outcome ~ console.log(hashedPassword)
the variable returns undefined

//Actual outcome: 
the variable returns undefined

//#4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//predicted outcome ~ console.log(first == second)
the variable returns false

//Actual outcome
false

//predicted outcome ~ console.log(first == third)
the variable returns true

//Actual outcome 
true

//#5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//predicted outcome ~ console.log(key)
the variable will return 'value'

//Actual outcome
value

//predicted outcome ~ console.log(secondKey)
the variable will return [1, 5, 1, 8, 3, 3]

//Actual outcome
[1, 5, 1, 8, 3, 3]

//predicted outcome ~ console.log(secondKey[0])
the variable will return 1

//Actual outcome
1

//predicted outcome ~ console.log(willThisWork)
the variable will return 5

//Actual outcome 
5

