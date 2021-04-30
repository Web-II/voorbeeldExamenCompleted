/** 
 * oefening02
 * ----------
 * In deze oefening moet je op basis van de array this._cards (zie onderstaande programmacode)
 * de webpagina dynamisch aanpassen, zodat als we bijvoorbeeld nog een vijfde kaart willen toevoegen 
 * aan de webpagina het volstaat om een element met de kaartnaam toe te voegen aan de array this._cards.
 * 
 * Het bestand oefening02.gif bevat een animatie van de te bekomen webpagina.
 * 
 * Niet alleen moet je javascriptcode schrijven om image-elementen toe te voegen
 * aan het container-element, maar je moet er ook voor zorgen dat 
 * als je met de muis over een kaart beweegt, de naam van de kaart verschijnt 
 * in het kader eronder. Bij het verlaten van de kaart moet in het kader 
 * opnieuw de oorspronkelijke tekst, nl. oefening02 worden weergegeven.
 
 * TIPS
 * De afbeeldingen staan in de map images.
 * Voorbeeld van een image-element: <img src="/media/examples/grapefruit.jpg" alt="Grapefruit">
 * Maak gebruik van de mouseover- en mouseout-events (of mouseenter/mouseleave).
 */

class CardsComponent {
    constructor() {
        this._cards = [
            { name: 'Jack_of_clubs' },
            { name: 'Jack_of_diamonds' },
            { name: 'Jack_of_hearts' },
            { name: 'Jack_of_spades' },
        ];
    }

    initialiseerHtml() {
        //OPLOSSING 
        const container = document.getElementById('img-container');

        this._cards.forEach((card) => {
            const imgElement = document.createElement('img');
            imgElement.src = `./images/${card.name}_fra.svg`;
            imgElement.alt = card.name;
            imgElement.onmouseover = () =>
                (document.getElementById('message1').innerText = card.name);
            imgElement.onmouseout = () =>
                (document.getElementById('message1').innerText = 'oefening02');
            container.appendChild(imgElement);
        });
    }    
}

const init = function () {
    const cardsComponent = new CardsComponent();
    cardsComponent.initialiseerHtml();
};

window.onload = init;
