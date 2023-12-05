// Here we have a function to get a random integer within a given range
function randomInt(max) {
    return Math.floor(Math.random() * (max)) + 1;
}

function playGame() {
    // Here we get user input for the range of integers and handle possible input errors
    var range = parseInt(prompt('Enter the range of possible integers (range goes from 1 to this number): '));
    while (isNaN(range) || range <= 1) {
        range = parseInt(prompt('Please enter a valid integer greater than 1:'));
    }

    // Here we get user input for the number of attempts and handle possible input errors
    var maxAttempts = parseInt(prompt('Enter the number of attempts:'));
    while (isNaN(maxAttempts) || maxAttempts <= 0) {
        maxAttempts = parseInt(prompt('Please enter a valid integer number of attempts greater than 0:'));
    }

    // Here we generate a random integer within the specified range, 1 being the min and user given int being max
    var targetNumber = randomInt(range);

    var attempts = 0;
    var userGuess;
    var difficulty = (range/maxAttempts);
    difficulty = difficulty.toFixed(3);

    // Here we have the main game loop, which breaks if the user wins the game
    while (attempts < maxAttempts) {
        userGuess = parseInt(prompt('Attempt ' + (attempts + 1) + '/' + maxAttempts + ': Enter your guess:'));

        if (isNaN(userGuess) || !(Number.isInteger(userGuess))) {
            alert('Please enter a valid integer.');
        } else {
            if (userGuess == targetNumber) {
                document.getElementById("output").innerHTML = 'Congratulations you have completed the MindDigits challenge\
                on difficulty rating ' + difficulty.toString() + '! You guessed the correct number (' + targetNumber + ') in ' + (attempts + 1) + ' attempts.';

                break;
                               
            } else if ((userGuess != targetNumber) && (attempts < (maxAttempts - 1))) {
                alert('Incorrect guess. Try again!');
            } else {
                alert('Incorrect guess.');
            }
        }

        attempts++;
    }

    // Here we have the message displayed if the user runs out of attempts
    if (attempts == maxAttempts) {
        document.getElementById("output").innerHTML = 'Sorry, you\'ve run out of attempts on difficulty rating ' + difficulty.toString() + '. The correct number was ' + targetNumber + '.';
    }
}
