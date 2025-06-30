


function fizzbuzz(n){
    if (n % 3 === 0 && n % 5 === 0) {

        return "FizzBuzz";}
else if (n % 3 === 0) {
            return "Fizz";
        } else if (n % 5 === 0) {
            return "Buzz";
        } else {
            return n;
        }
    }
    console.log(fizzbuzz(15)); // FizzBuzz
    console.log(fizzbuzz(9)); // Fizz
    console.log(fizzbuzz(10)); // Buzz
    console.log(fizzbuzz(7)); // 7
    console.log(fizzbuzz(0)); // FizzBuzz