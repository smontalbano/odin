const alphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter word: ", (word) => {
    rl.question("Enter key (must be an integer): ", (key) => {
        key = Number(key);

        console.log(word)
        console.log(key)

        rl.close();
    });
});
