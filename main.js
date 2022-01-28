// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// opdracht 1a

// 1. Loop door de array heen.
// 2. Haal bij iedere iteratie de name uit de array.
// 3. Het resultaat loggen.

const typeOfTvs = inventory.map((typeOfTv) => {
  return typeOfTv.name;
});
console.log(typeOfTvs);

//opdracht 1b

// 1. Loop door de array heen.
// 2. Controleer bij iedere iteratie of een tv is uitverkocht.
// 3. Een tv is uitverkocht als originalStock - sold = 0.
// 4. Het resultaat loggen.

const soldOutTvs = inventory.filter((soldOutTv) => {
  return soldOutTv.originalStock - soldOutTv.sold === 0;
});
console.log(soldOutTvs);

//opdracht 1c

// 1. Via een array-methode alle tv's verzamelen die over ambilight beschikken.
// 2. Het resultaat loggen.

const ambiLightTvs = inventory.filter((ambiLightTv) => {
  return ambiLightTv.options.ambiLight === true;
});
console.log(ambiLightTvs);

//opdracht 1d

// 1. Loop door de array heen.
// 2. De prijs moet van hoog naar laag gesorteerd worden.
// 3. Plaats de tv met een hogere prijs voor de tv met een lagere prijs.
// 4. Het resultaat loggen.

inventory.sort((a,b) => {
  return a.price -b.price;
});
console.log(inventory);

//opdracht 2a

// 1. Maak een variabele aan waar alle tv's in die verkocht zijn opgeslagen worden.
// 2. Loop door de array heen.
// 3. Tel alle verkochte tv's bij elkaar op.
// 4. Het resultaat loggen.

let soldTvs = 0

for (let i = 0; i < inventory.length; i++) {
  soldTvs = soldTvs + inventory[i].sold;
}

console.log(soldTvs);

//opdracht 2b
// Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

// 1. Maak een element in HTML die je als container kunnen gebruiken.
// 2. Haal dat element naar je js file.
// 3. Maak in je js file nieuwe elementen om de waarde in op te slaan.
// 4. Koppel deze aan de container die je hebt gemaakt en binnengehaald in de file.
// 5. Geef dit styling.

const paragraph = document.getElementById("sold-tvs");
paragraph.textContent = `Het aantal verkochte televisies is ${soldTvs}.`;

// opdracht 2c
// Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

// 1. Maak een variabele waarin alle ingekochte tv's worden opgeslagen.
// 2. Loop door de array heen.
// 3. Tel alle ingekochte tv's bij elkaar op.
// 4. Het resultaat loggen.

let boughtInTvs = 0

for (let i = 0; i < inventory.length; i++) {
  boughtInTvs = boughtInTvs + inventory[i].originalStock;
}

console.log(boughtInTvs);

// opdracht 2d
//Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

// 1. Maak een element in HTML die je als container kunnen gebruiken.
// 2. Haal dat element naar je js file.
// 3. Maak in je js file nieuwe elementen om de waarde in op te slaan.
// 4. Koppel deze aan de container die je hebt gemaakt en binnengehaald in de file.
// 5. Geef dit styling.

const paragraph2 = document.getElementById("bought-in-tvs");
paragraph2.textContent = `Het aantal ingekochte tv's is ${boughtInTvs}.`;

// opdracht 2e
// Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

// 1. Maak een variabele aan voor het aantal nog te verkopen tv's.
// 2. Log het resultaat om te controleren of het klopt.
// 3. Maak een element in HTML die je als container kunnen gebruiken.
// 4. Haal dat element naar je js file.
// 5. Maak in je js file nieuwe elementen om de waarde in op te slaan.
// 6. Koppel deze aan de container die je hebt gemaakt en binnengehaald in de file.
// 7. Geef dit styling.

const toBeSoldTvs = boughtInTvs - soldTvs;
console.log(toBeSoldTvs);

const paragraph3 = document.getElementById("to-be-sold-tvs");
paragraph3.textContent = `Het aantal tv's dat  nog verkocht moet worden is ${toBeSoldTvs}.`;

// opdracht 3a
// Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

// 1. Maak een element in HTML die je als container kan gebruiken.
// 2. Haal dat element naar je js file.
// 3. Ga door de array heen.
// 4. Maak voor elke iteratie een list-element.
// 5. Stop de tv naam in dat element.
// 6. Voeg het resultaat toe aan de container.

const brandOfTvs = document.getElementById("brand-of-tvs");

inventory.map((listTv) => {
  const newList = document.createElement("li");
  newList.textContent = listTv.brand;
  return brandOfTvs.appendChild(newList);
});

// opdracht 3b
//Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

// 1. Maak een functie.
// 2. Schrijf de logica van 3a in de functie.
// 3. Roep de functie aan

function List(array) {
  const brands = document.getElementById("brand-of-tvs");

  array.map((listTv) => {
    const newList = document.createElement("li");
    newList.textContent = listTv.brand;
    return brands.appendChild(newList);
  })
}

List(inventory);

// opdracht 4a
// Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt:
// [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

