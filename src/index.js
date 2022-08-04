module.exports = function reverse (n) {
    let module = Math.abs(n);
    let numberAsString = module.toString();

    return numberAsString.split("").reverse().join("");
}