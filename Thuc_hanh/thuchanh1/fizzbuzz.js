"use strict";
exports.__esModule = true;
exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz(n) {
        if (n % 3 == 0 && n % 5 == 0) {
            this.message = 'FizzBuzz';
        }
        else if (n % 5 == 0) {
            this.message = 'Fizz';
        }
        else if (n % 3 == 0) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
