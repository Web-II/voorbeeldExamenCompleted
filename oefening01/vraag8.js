/**
 * Vraag 8
 * Voeg statements toe om de volgende opdrachten uit te voeren
 * a) Verwijder het item (key='Zweden', value='Groot') uit het Map-object landen.
 * b) Creëer op basis van het Map-object landen een array groottes, met de unieke groottes.
 *    De array groottes mag dus slechts drie waarden bevatten ['Groot','Medium','Klein']
 */

const landen = new Map([
    ['Franrijk', 'Groot'],
    ['Zweden', 'Groot'],
    ['Spanje', 'Groot'],
    ['Duitsland', 'Groot'],
    ['Denemarken', 'Medium'],
    ['Nederland', 'Medium'],
    ['Luxemburg', 'Klein'],
]);

/* Oplossing */
landen.delete('Zweden');
const groottes = [...new Set(landen.values())];

console.log(landen);
console.log(groottes);
