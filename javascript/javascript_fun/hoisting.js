// should return a reference error, no definition of "magicalUnicorns"
console.log(magicalUnicorns);

//should not return an error, but comes back as undefined
console.log(magicalUnicorns);
var magicalUnicorns = "awesome";

// this is how the interpreter reads that declaration...

var magicalUnicorns; //This variable is hoisted from our declaration, not defined
console.log(magicalUnicorns); //this is us calling a variable that exists, but hasn't been defined. 
var magicalUnicorns = "awesome"; // this is us actually now explicitly setting value for the variable.

//if we try to use const instead of var for the variable declaration
