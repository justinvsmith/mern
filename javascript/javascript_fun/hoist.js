//#1

console.log("hello");
var hello = 'world';

//var hello;
//console.log("hello"); // logs undefined
//var hello = "world"; 
// hello = "world";

//#2

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//var needle = 'haystack'; // saves variable 
// test(); // should return error because this is not a function yet
//var needle; //variable gets declared
//function test(){} // function gets called
// var needle = 'magnet' // value gets  saved
//console.log(needle); // nothing gets output


//#3

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool' // will return super cool if called;
// function print() - gets called first and will be ceiling for vars inside
// brendan = 'only okay'
//console.log(brendan);
// outside of function, this will return super cool

//#4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken'; // set variable, will return chicken if called
// console.log(food); // will return 'chicken'
// var food; variable declared, not set
// food set to 'half-chicken';
// console.log(food)  // returns 'half-chicken'
// var food set to 'gone'; new variable listed
//eat() // function called, will return 'half-chicken'

//#5

mean();
console.log(food);
var mean = function(){
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
}
console.log(food);

// console.log(food) // returns undefined
//var mean() // function set inside of variable
// var food; // variable declared but not set
//food = 'chicken' // var not set
//var food = 'fish' //var set
//console.log(food) // undefined
//console.log(food) // will return fish
//mean () function gets called
//console.log(food) // returns undefined


//#6

console.log(genre);
var genre = "disco";
rewind();
function rewind(){
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}

console.log(genre);

//var genre; var declared, not set
// console.log(genre) // returns undefined
//genre = 'rock' // genre set as rock
// console.log(genre) // returns rock
//genre = 'r&b'; // genre set as r&b
// console.log(genre) // returns r&b
//rewind() // function called
//console.log(genre) // returns disco;


//#7

dojo = 'san jose';
console.log(dojo);
learn();
function learn(){
    dojo='seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);

//dojo = 'san jose' // var set to san jose
// console.log(dojo) // returns san jose
//function learn() function set
//dojo = 'seattle' // variable set as 'seattle'
//console.log(dojo) // returns 'seattle'
//var dojo = 'burbank' // variable set as 'burbank'
//console.log(dojo) // returns 'burbank'
//learn() // function called
//console.log(dojo) // returns san jose

//#8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name= name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    } else if(dojo.students <= 0){
        dojo = "closed for now";
    } return dojo;
}

//function makeDojo(name, students){ // function declared/defined
// constant dojo {};  // constant set to empty list
// dojo.name = name // variable set to passed through value of name
// dojo.students = students // variable set to passed through value of students
// if students is greater than 50 // if statement made (if true returns true for dojo.hiring)
// else if students <= 0 // else for students <= 0, set dojo variable to 'closed for now'
// return the value of dojo;
//console.log(makeDojo("Chicago", 65)); // returns {}
//console.log(makeDojo("Berkeley", 0)); // returns {}

