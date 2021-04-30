/**
 * Vraag 3
 * a) Voeg aan het object bob de hobby 'Gaming' toe. 
 *    Uiteraard zonder de oorspronkelijke declaratie te wijzigen.
 * b) Gebruik destructuring assignment om met één statement
 *    twee variabelen hobby1 en hobby2 te creëren met de eerste twee hobbies.
 *    Zie ook console.log-statement.
 */

let bob = {
    name: 'Bob',
    age: 60,
    hobbies: ['Cycling', 'Fishing'],
};

/* Oplossing a) */
bob.hobbies.push('Gaming');
console.log(bob);

/* Oplossing b) */
const [hobby1, hobby2] = bob.hobbies;
console.log(hobby1, hobby2); //Cycling Fishing

/* Oplossing b) alt*/
const { hobbies: [hobby1alt, hobby2alt] } = bob;
console.log(hobby1alt, hobby2alt); //Cycling Fishing

