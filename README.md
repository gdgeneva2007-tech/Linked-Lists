# 1.Review classes
1. Inside a class, you omit the 'function' keyword and the const/let keywords

class User{
    sayHello(){
        console.log("Hello!");
    }
}

class Player{
    score=0;    //No 'let' or 'const' needed
    name;   //Declared but undefined until set

    constructor(name){
        this.name=name;
    }
}

Private variables (The # Syntax)
if you want to ensure a variable cannot be accessed from outside the class (encapsulation), prefix it with a #

class BankAccount{
    #balance=0;

    deposit(amount){
        this.#balance +=amount;
    }

    showBalance(){
        console.log(this.#balance);
    }
}

const account=new BankAccount();
console.log(account.#balance);  //Error:Private field '#balance' must be declared

Important rules:
1) No let,const or var when declaring variables (properties)directly inside a class body or constructor
2) Must use 'this'
3) You need to use this.head /this.#balance (Don't miss 'this'!!!) everywhere inside your calss methods. (without 'this',js looks for a local or global variable called 'head' which doesn't exist)

in short, inside a class, always use this.propertyName to access the class's own properties

In this project: Use this.head   (NEVER head!);

# 2.Use !== everywhere consistently

# 3.'...' syntax in function parameters-----it is called rest parameters
1) It collects all remaining auguments into an array:
function example(first, ...rest) {
    console.log(first);
    console.log(rest);
}

example(1, 10, 11);
// first → 1
// rest  → [10, 11]

example(1, 10, 11, 12, 13);
// first → 1
// rest  → [10, 11, 12, 13]

example(1);
// first → 1
// rest  → []

2) How to access the values?
Since values is just an array, you can use any array method:
insertAt(index, ...values) {
    // Loop through them:
    for (let i = 0; i < values.length; i++) {
        console.log(values[i]);
    }

    // Or use forEach:
    values.forEach((val) => {
        console.log(val);
    });
}

# 4.Throwing Errors in JS:
Common error types && syntax:
throw new RangeError("Index out of bounds");
throw new TypeError("Expected a string");
throw new Error("Something went wrong");

What happens when you throw?
The function stops immediately and the error travels up

# 5.Different memory management in C and JS:
1) In C, variables creeated inside a function are stored on the stack, and they get destroyed when the function ends
That is why in C, you need malloc to create nodes that survive after the function ends

2) JS works differently
JS uses garbage collection. An object is only deleted when nothing references it anymore

3) Risks:
C: Memory leaks if you forget to free
JS:Almost none