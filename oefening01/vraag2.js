/**
 * Vraag 2
 * Verwijder uit onderstaande array uit de tweede subarray het tweede element.
 * De array groepen moet er dus uiteindelijk als volgt uitzien:
 * [
 *   ['jan', 'piet'],
 *   ['ann', 'carine'],
 *  ]
 */

const groepen = [
    ['jan', 'piet'],
    ['ann', 'griet', 'carine'],
];

/* oplossing */
// verwijderen griet
groepen[1].splice(1, 1);
console.log(groepen);

