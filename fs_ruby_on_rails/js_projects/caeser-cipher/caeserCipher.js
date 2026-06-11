const alphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

function shift(word, key) {
    let result = "";

    for(const char of word) {
        const index = alphaNumeric.indexOf(char);
        
        if(index === -1) {
            result += char;
            continue;
        };

        const newIndex = (index + key + alphaNumeric.length) % alphaNumeric.length;

        result += alphaNumeric[newIndex];
    };

    return result;
};

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter word: ", (word) => {
    rl.question("Enter key (must be an integer): ", (key) => {
        key = Number(key);

        const encrypted = shift(word, key)

        console.log(encrypted)
        rl.close();
    });
});
