/**
 * Vraag 7
 * Sorteer de landen van klein naar groot
 * Na sortering moet je (bijvoorbeeld) de volgende array bekomen 
 * [{land: 'Luxemburg', grootte: 'Klein'},
 *  {land: 'Andorra', grootte: 'Klein'},
 *  {land: 'Denemarken', grootte: 'Medium'},
 *  {land: 'Nederland', grootte: 'Medium'},
 *  {land: 'Franrijk', grootte: 'Groot'},
 *  {land: 'Zweden', grootte: 'Groot'},
 *  {land: 'Spanje', grootte: 'Groot'},
 *  {land: 'Duitsland', grootte: 'Groot'}]
 */

const landen = [
    { land: 'Frankrijk', grootte: 'Groot' },
    { land: 'Zweden', grootte: 'Groot' },
    { land: 'Spanje', grootte: 'Groot' },
    { land: 'Duitsland', grootte: 'Groot' },
    { land: 'Denemarken', grootte: 'Medium' },
    { land: 'Nederland', grootte: 'Medium' },
    { land: 'Luxemburg', grootte: 'Klein' },
    { land: 'Andorra', grootte: 'Klein' },
];

/* Oplossing */
function sorterenOpGrootte(a, b) {
    if (a.grootte === b.grootte) return 0;
    if (a.grootte === 'Groot' && b.grootte == 'Medium') return 1;
    if (a.grootte === 'Groot' && b.grootte == 'Klein') return 1;
    if (a.grootte === 'Medium' && b.grootte == 'Klein') return 1;
    return -1;
}

/* Oplossing alt */
function sorterenOpGrootte2(a, b) {
    const sorteerVolgorde = ['Klein', 'Medium', 'Groot'];
    return (
        sorteerVolgorde.indexOf(a.grootte) - sorteerVolgorde.indexOf(b.grootte)
    );
}

console.log(landen.sort(sorterenOpGrootte));
console.log(landen.sort(sorterenOpGrootte2));


