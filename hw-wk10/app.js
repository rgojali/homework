const name = prompt('What is your name?');

function greet() {
    alert('Welcome ' + name);
}

greet();


let age = prompt('How old are you?');

function userAge() {


    if (age >= 22 && age <= 37) {
        alert("You're a millenial like me! Millenials UNITE.")
    } else if (age <= 21) {
        alert("You're part of the generation, iGen!")
    } else {
        alert("You're old! How does it feel to be wiser?")
    }
}
userAge();


let president = prompt('What number is the current President of the United States?')

function numOfPres() {
    if (president == 45) {
        alert("Yep, you're right!")
    } else {
        alert("Wrong! Are you sure you're an American?")
    }
}
numOfPres();

let countries = prompt("How many countries are bordering the United States?")
let borders = 2

function numOfCountries() {
    if (countries == 2 && borders == 2) {
        alert("Thank goodness you know your geography!")
    } else {
        alert("Think harder!")
    }
}
numOfCountries();

let weather = prompt('What is it always raining in the metaphoric statement, "It\'s raining blank and blank"?')

function metaphor() {
    if ((weather == 'cats and dogs') || (weather == 'cats') || (weather == 'dogs')) {
        alert('Yay!! It is!')
    } else {
        alert('Wrong!')
    }
}
metaphor();