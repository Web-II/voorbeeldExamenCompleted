/**
 * Vraag 1
 * Declareer een variabele vandaag en ken aan deze variabele een Date-object
 * toe, met de datum van vandaag.
 * Gebruik vervolgens de template literal syntax (backticks en $-tekens) om 
 * exact de volgende boodschap af te beelden in de console:
 * Het is vandaag dag: 26 van maand: 5.
 */

/* Oplossing */
const vandaag = new Date();
console.log(
    `Het is vandaag dag: ${vandaag.getDate()} van maand: ${vandaag.getMonth() + 1
    }.`
);

