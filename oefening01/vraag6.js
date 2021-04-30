/**
 * Vraag 6
 * a) Creëer op basis van de array getallen een nieuwe array getallen2, waarbij
 *    je elk element van de array verhoogt met één.
 * b) Tel alle cijfers die zich op een even index bevinden in 
 *    de array getallen (oorspronkelijke array) samen.
 *    Voor deze opdracht moet je verplicht gebruikmaken van de array-methode reduce().
 */

const getallen = [1, 4, 2, 5, 1, 5, 4];

/* Oplossing */
// prettier-ignore
const getallen2 = getallen.map(x => x + 1);
const resultaatReduce = getallen.reduce((res, x, i) => {
    if ((i % 2) === 0) {
        return res + x;
    } else {
        return res;
    }
}, 0);

console.log(getallen2); // [2, 5, 3, 6, 2, 6, 5];
console.log(resultaatReduce); //8

/* Oplossing alt */
const resultaatReduceAlt = getallen.reduce(
    (res, x, i) => ((i % 2) === 0 ? res + x : res));


console.log(resultaatReduceAlt); //8

