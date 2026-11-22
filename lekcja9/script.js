"use strict";

// TODO: utwórz zmienną przechowującą stan licznika
let counter = 0;
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
function addPoint() {
    counter += 1;
    document.getElementById("counter-display").textContent = counter;
}
function resetPoint() {
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}
// TODO: utwórz tablicę z elementami do losowania
let items = ["Astrobot", "Gwiazda", "Księżyc", "CzarnaDziura"];
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
function drawItem() {
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}
