/*function power(pow) {
    return function (num) {
        return num**pow;
    }
}*/

const power = pow => num => num**pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(5));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(5));
console.log(powerOfThree(10));

console.log(power(5)(4));


let sq = x => y + x => z + y;
console.log(sq(2)(2)(2));