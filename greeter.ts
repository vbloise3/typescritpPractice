/**
 * Created by vincebloise on 7/4/16.
 */
class Person {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class Greeter {
    person: Person;
    constructor(personParm: Person) {
        this.person = personParm;
    }
    greet() {
        return "Hello, " + this.person.firstName + " " + this.person.lastName;
    }
    static greet2(personParm: Person) {
        return "Hello, " + personParm.firstName + " " + personParm.lastName + "<br/>";
    }
}

class Peeps {
    name: string;
}

class Employee extends Peeps{
    department: number;
}

class Animal {
    breed: string;
}

function calcTax(income: number, state: string = 'NY', dependents?: number): number{
    var deduction: number;
    if (dependents) {  // handle the optional value in dependents
        deduction = dependents*500;
    }else {
        deduction = 0;
    }
    if (state == 'NY'){
        return income*0.06 - deduction;
    } else if (state=='NJ'){
        return income*0.05  - deduction;
    }
}

function StockQuoteGeneratorArrow(symbol: string){
    this.symbol = symbol;
    setInterval(() => {
        console.log("StockQuoteGeneratorArrow. The price quote for " + this.symbol
            + " is " + Math.random());
    }, 1000);
}

//var stockQuoteGeneratorArrow = new StockQuoteGeneratorArrow("IBM");

var tax: number = calcTax(50000, 'NJ', 3);
console.log("Your tax is " + tax);
var tax: number = calcTax(50000);
console.log("Your tax is " + tax);

var tax: number = calcTax(50000); //using default state parameter value and no dependents
var tax2: number = calcTax(60000, 'NJ', 3);

var user = new Person("Marin", "E.", "Bloise");
var greeter = new Greeter(user);

var button = document.createElement('button');
button.textContent = "Say Yo!";
button.onclick = function() {
    alert(greeter.greet());
};

var workers: Array<Peeps> = [];
workers[0] = new Peeps();
workers[1] = new Employee();
//workers[2] = new Animal();  // compile-time error

document.body.innerHTML = Greeter.greet2(user);
//document.body.innerHTML = stockQuoteGeneratorArrow();
document.body.appendChild(button);