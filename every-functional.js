var input = [1, 2, null, 4];

function notNull(element) {
    return element !== null;
}

var isValid = input.every(notNull);

console.log(isValid);