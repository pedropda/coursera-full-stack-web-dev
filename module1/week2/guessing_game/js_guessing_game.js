var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
    var random_number = Math.floor(Math.random() * 100);
    target = random_number + 1;

    while (!finished) {
        guess_input_text = prompt("I am thinking of a number" +
            "in the range 1 to 100.\n\n" +
            "What is the number?");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess_input)) {
        alert("You have not entered a number. \n\n" +
            "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guess_input < 1) || (guess_input > 100)) {
        alert("Please enter a number in the range 1 to 100.");
        return false;
    }
    if (guess_input > target) {
        alert("Your number is too large!");
        return false;
    }
    if (guess_input < target) {
        alert("Your number is too small!");
        return false;
    }
    alert("You got it! The number was " +target +
            ".\n\n It took you " +guesses +
            " guesses to get the number!");
    return true;
}