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

var user = new Person("Marin", "E.", "Bloise");
var greeter = new Greeter(user);

var button = document.createElement('button');
button.textContent = "Say Yo!";
button.onclick = function() {
    alert(greeter.greet());
};

document.body.innerHTML = Greeter.greet2(user);
document.body.appendChild(button);