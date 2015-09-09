var input = [1, 2, null, 4];

var isValid = true;

for (var i = 0; i < input.length; i++) {
    if (input[i] === null) {
        isValid = false;
        break;
    }
}

console.log(isValid);