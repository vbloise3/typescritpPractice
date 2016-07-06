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

document.body.innerHTML = Greeter.greet2(user);
document.body.appendChild(button);