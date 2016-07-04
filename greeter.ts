/**
 * Created by vincebloise on 7/4/16.
 */
function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);