function add(a, b) { return a + b }
function sub(a, b) { return a - b }
function addIfGreater(a, b) {
    if (a < b) {
        throw new Error("A is not greater than B")
    }
    return a+b
}
function isEven(n) {
    if (n < 0) {
        throw new Error("N Should be a natural number")
    }
    return n%2 == 0
}

module.exports = {
    add,
    sub,
    addIfGreater,
    isEven
}