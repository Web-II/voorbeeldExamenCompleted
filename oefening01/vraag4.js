/**
 * Vraag 4
 * Declareer een functie switchChars() die twee opeenvolgende karakters in een woord omwisselt.
 * De functie heeft twee parameters. De eerste parameter is een string (het woord) en de tweede parameter
 * is een getal, nl. de positie (zero-based) vanaf waar de karakters moeten omgewisseld worden.
 * Het resultaat is een string waarin de twee karakters omgewisseld zijn.
 * Zie ook de voorbeelden hieronder (console.log-statements).
 * (Je moet niet controleren op randgevallen. Je mag ervan uitgaan dat 
 * de functie enkel opgeroepen wordt met zinvolle argumenten.)
 */

/* Oplossing */
function switchChars(woord, position) {
    return (
        woord.slice(0, position) +
        woord[position + 1] +
        woord[position] +
        woord.slice(position + 2)
    );
}

/* Oplossing alt */
function switchChars2(woord, position) {
    const chrArray = [...woord];
    [chrArray[position], chrArray[position + 1]] = [
        chrArray[position + 1],
        chrArray[position],
    ];
    return chrArray.join('');
}

console.log(switchChars('drei', 2)); // drie
console.log(switchChars('hteerdaad', 1)); // heterdaad
console.log(switchChars2('drei', 2)); // drie
console.log(switchChars2('hteerdaad', 1)); // heterdaad

