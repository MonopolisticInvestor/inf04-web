const kursy = [
    {nazwa: "React", godziny: 30, aktywny: true},
    {nazwa: "Node.js", godziny: 20, aktywny: false},
    {nazwa: "MySQL", godziny: 15, aktywny: true},
    {nazwa: "Bootstrap", godziny: 10, aktywny: true}
]

function nazwyAktywnych(tablica) {
    return tablica.map((item) => item.nazwa)
}

function sumaGodzin(tablica) {
    const total = tablica.reduce((suma, item) => suma += item.godziny, 0)

    return total;
}

function opis(kurs) {
    return `Kurs ${kurs.nazwa} trwa ${kurs.godziny} godzin`;
}

function dodajGodzin(kurs, ile) {
    let modifiedKurs = kursy.filter(k => k.nazwa == kurs);
    const copy = {...modifiedKurs[0], godziny: modifiedKurs[0].godziny + ile}

    console.log(`Zmodyfikowany obiekt: ${JSON.stringify(copy)}`)
    console.log(`Niezmieniniona tablica: ${JSON.stringify(kursy)}`)
}

console.log(nazwyAktywnych(kursy))
console.log(sumaGodzin(kursy))