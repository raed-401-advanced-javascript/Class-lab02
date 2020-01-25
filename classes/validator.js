class Validator {
    isArray(input){
        return Array.isArray(input) === "true";
    }
    isString(input){
        return typeof(input)  === 'string';
    }
    isObject(input){
        return Object.getPrototypeOf(input).constructor.name === "Object";
    }
    isBollean(input) {
        return typeof(input) === "boolean"
    }
    isFunction(input) {
        return typeof(input) === "function"
    }
    isNumber(input){
        return typeof(input) === "number"
    }
}
let w = new Validator
console.log(w.isArray(['hi']))
module.exports = Validator