# Elastic IP Address Info
- Assigning an elastic IP address will change the IP address for your server, but it will not change again until you release the elastic IP address. If you do terminate your server and create a new one, you can again associate the same elastic IP address with your new server. Note that your elastic IP address is allocated until your release it, not until you terminate your instance. So make sure you release it when you no longer need it. Otherwise you will get a nasty $3 bill every month.
  
# Console Commands
- ssh -i (copy and paste pem file path here) ubuntu@44.214.57.195
- scp -i (copy and paste pem file path here) (copy and past file you'd like to upload to website here) ubuntu@44.214.57.195:public_html/(Name of file you'd like to add html to)

# Launching in Production Environment
- Within the VSC terminal cd to the correct file
- ./deployFiles.sh -k (copy and paste pem file path here) -h yourdomain.click -s startup
- Doing this will make this deliverable of your startup available from https://startup.yourdomainname.
  
# Notes
- An IP address can be given a domain to be referenced to.
- To get rid of the "Not Secure" sign next to the url search, you need to have a web certificate.
- html	The page container
- Learned how to deploy startup
# Common HTML Elements
- head	Header information
- title	Title of the page
- meta	Metadata for the page such as character set or viewport settings
- script	JavaScript reference. Either a external reference, or inline
- include	External content reference
- body	The entire content body of the page
- header	Header of the main content
- footer	Footer of the main content
- nav	Navigational inputs
- main	Main content of the page
- section	A section of the main content
- aside	Aside content from the main content
- div	A block division of content
- span	An inline span of content
- h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
- p	A paragraph of text
- b	Bring attention
- table	Table
- tr	Table row
- th	Table header
- td	Table data
- ol,ul	Ordered or unordered list
- li	List item
- a	Anchor the text to a hyperlink
- img	Graphical image reference
- dialog	Interactive component such as a confirmation
- form	A collection of user input
- input	User input field
- audio	Audio content
- video	Video content
- svg	Scalable vector graphic content
- iframe	Inline frame of another HTML page

# JS Notes
- Log: The basic usage of the console object is to output a log message.

console.log('hello');
// OUTPUT: hello
You can create formatted messages in the log parameter.

console.log('hello %s', 'world');
// OUTPUT: hello world
You can even specify CSS declarations in order to style the log output.

console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text

- Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.

console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms

- Count
To see how many times a block of code is called you can use the count function.

console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1

- You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or by using the src attribute of the script element to reference an external JavaScript file.

index.js

function sayHello() {
  console.log('hello');
}
index.html

<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
Notice that we call the sayHello and sayGoodbye JavaScript functions from the HTML in the onclick attribute of the button element. Special attributes like onclick automatically create event listeners for different DOM events that call the code contained in the attribute's value. The code specified by the attribute value can be a simple call to a function or any JavaScript code.

<button onclick="let i=1;i++;console.log(i)">press me</button>

- JavaScript defines several primitive types.

Type | Meaning
Null	The type of a variable that has not been assigned a value.
Undefined	The type of a variable that has not been defined.
Boolean	true or false.
Number	A 64-bit signed number.
BigInt	A number of arbitrary magnitude.
String	A textual sequence of characters.
Symbol	A unique value.

Type | Use | Example
Object	A collection of properties represented by name-value pairs. Values can be of any type.	{a:3, b:'fish'}
Function	An object that has the ability to be called.	function a() {}
Date	Calendar dates and times.	new Date('1995-12-17')
Array	An ordered sequence of any type.	[3, 'fish']
Map	A collection of key-value pairs that support efficient lookups.	new Map()
JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}

- Type conversions
JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometimes the results of automatic conversions can be unexpected from programmers who are used to strongly typed languages. Consider the following examples.

2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
Getting unexpected results is especially common when dealing with the equality operator.

1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
⚠ The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

('b' + 'a' + +'a' + 'a').toLowerCase();

- Conditionals
JavaScript supports many common programming language conditional constructs. This includes if, else, and if else. Here are some examples.

if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
You can also use the ternary operator. This provides a compact if else representation.

a === 1 ? console.log(1) : console.log('not 1');
You can use boolean operations in the expression to create complex predicates. Common boolean operators include && (and), || (or), and ! (not).

if (true && (!false || true)) {
  //...
}

- Loops
JavaScript supports many common programming language looping constructs. This includes for, for in, for of, while, do while, and switch. Here are some examples.

- for
Note the introduction of the common post increment operation (i++) for adding one to a number.

for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1

- do while
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1

- while
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1

- for in
The for in statement iterates over an object's property names.

const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
For arrays the object's name is the array index.

const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1

- for of
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'

- Break and continue
All of the looping constructs demonstrated above allow for either a break or continue statement to abort or advance the loop.

let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1

- String functions
The string object has several interesting functions associated with it. Here are some of the commonly used ones.

Function	Meaning
length	The number of characters in the string
indexOf()	The starting index of a given substring
split()	Split the string into an array on the given delimiter string
startsWith()	True if the string has a given prefix
endsWith()	True if the string has a given suffix
toLowerCase()	Converts all characters to lowercase
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글

- Functions

In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world

- Function parameters
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish

- Anonymous functions
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2

- Creating, passing, and returning functions
Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value

- Inner functions
Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish

- JavaScript arrow function
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

() => 3;
The following two invocations of sort are equivalent.

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

- Return values
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
- This pointer
Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.

The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.

const a = 'a';
const b = 'b';

const closure = makeClosure(a);
Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.

console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

- A JSON document contains one of the following data types:

Type	Example
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}

- JavaScript regular expressions

Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

- Rest
Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.

function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
However sometimes you don't have an array to work with. In this case you could create one on the fly.

function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
But JavaScript provides the rest syntax to make this easier. Think of it as a parameter that contains the rest of the parameters. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.

function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
Note that you can only make the last parameter a rest parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, rest allows JavaScript to provide what is called variadic functions.

- Spread
Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
<!-- OUTPUT: 2 -->

- Exceptions
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code

-Fallbacks
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
