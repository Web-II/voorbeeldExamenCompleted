/** 
 * oefening03
 * ----------
 * In deze oefening moet je data uit een JSON-file ophalen
 * en deze afbeelden in de Console.
 * 
 * Zorg ervoor dat je het onderstaande resultaat (vier regels) bekomt in de console,
 * door Vraag a), b) en c) hieronder op te lossen:
 
   Console output:

       De JSON-file bevat 3 boeken: 
       1. De bevrijding van Vlaanderen
       2. Sapiens
       3. De Bourgondiërs 
 
 */

class Book {
    // Vraag a)
    // Vul hieronder de constructor-methode verder aan en voorzie
    // in deze class een getter title en een getter author.
    constructor(title, author) {
        // TYP HIERONDER JOUW CODE
        this._title = title;
        this._author = author;
    }

    // TYP HIERONDER JOUW CODE
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
}

class Vraag10Compoment {
    constructor() {
        // this._books is een array van Book-objecten
        this._books = [];

        // Vraag b):
        // Haal de data uit de json-file /data/ebooks.json op en stop de data in de array 'this._books'.
        // Let op: de array 'this._books' moet Book-objecten (instances van de class Book) bevatten.
        // Roep vervolgens de methode booksToConsole() op.
        // TYP HIERONDER JOUW CODE
        fetch('./data/ebooks.json')
            .then((response) => response.json())
            .then((jsondata) => {
                this._books = jsondata.boekenNF.map((b) => new Book(b.boeknaam, b.auteur));
                this.booksToConsole();
            });
    }

    booksToConsole() {
        // Vraag c):
        // Deze methode genereert op basis van de array this._books (met Book-objecten)
        // de gevraagde console output.
        // TYP HIERONDER JOUW CODE
        console.log(`De JSON-file bevat ${this._books.length} boeken: `);
        this._books.forEach((b, index) =>
            console.log(`${index + 1}. ${b.title}`)
        );
    }
}

function init() {
    const vraag10Component = new Vraag10Compoment();
}

window.onload = init;
