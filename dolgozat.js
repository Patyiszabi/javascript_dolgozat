let input;
do {
    input = prompt("Kérem a nevét!");
} while (!isNaN(input));

console.log("\n1.feladat\nSzia, " + input, "Örülök, hogy itt vagy!");

let randomszam = Math.floor(Math.random() * 10) + 1;
console.log("\n2.feladat\nA véletlen szám: " + randomszam);

let dobokocka = Math.floor(Math.random() * 6) + 1;
console.log("\n3.feladat\nA dobókocka ezt a számot dobta:" + dobokocka);

let intervallum1, intervallum2;
do {
    intervallum1 = prompt("Kérek egy alsó intervallumot!");
    intervallum2 = prompt("Kérek egy felső intervallumot!");
    intervallum1 = parseInt(intervallum1);
    intervallum2 = parseInt(intervallum2);
} while (isNaN(intervallum1) || isNaN(intervallum2));

let szam = Math.floor(Math.random() * (intervallum2 - intervallum1 + 1)) + intervallum1;
console.log("\n4.feladat\nA szám a két intervallum között: " + szam);

let inputeletkor;
do {
    inputeletkor = prompt("Kérem az életkorát!");
    inputeletkor = parseInt(inputeletkor);
} while (isNaN(inputeletkor));

switch (true) {
    case (inputeletkor >= 0 && inputeletkor <= 6):
        console.log("\n5.feladat\nAz adott életkor: gyerek");
        break;

    case (inputeletkor >= 7 && inputeletkor < 18):
        console.log("\n5.feladat\nAz adott életkor: iskolás");
        break;

    case (inputeletkor >= 19 && inputeletkor < 60):
        console.log("\n5.feladat\nAz adott életkor: dolgozó");
        break;

    case (inputeletkor >= 60):
        console.log("\n5.feladat\nAz adott életkor: nyugdíjas");
        break;

    default:
        console.log("\n5.feladat\nAz adott életkor érvénytelen");
}

let inputSzam;
do {
    inputSzam = prompt("Kérem egy számot!");
    inputSzam = parseInt(inputSzam);
} while (isNaN(inputSzam));

switch (true) {
    case (inputSzam > 0):
        console.log("\n6.feladat\nA szám pozitív");
        break;

    case (inputSzam < 0):
        console.log("\n6.feladat\nA szám negatív");
        break;

    case (inputSzam == 0):
        console.log("\n6.feladat\nA szám 0");
        break;

    default:
        console.log("\n6.feladat\nAz szám érvénytelen");
}
