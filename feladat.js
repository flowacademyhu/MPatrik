//1. Adattípusok

//igazhamis-boolean
let igaz = true
//változók
var NemHasználom = 'NemHasználom';
//konstansok
const IlyenMarad = 'NemVáltozik';
//let-es változók
let Rugalmas = 'Változik';
//tombok
let egy1dsTomb = [1, 2, 3];
let tobbDsTomb = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
]
//Objecktek
let ObjectVagyok = { egyesKulcsom: 'ertek1', kettesKulcsom: 'ertek2'};

//2. Const vs Let

const Maradok = 'vmi'
// ha ezt írnám: Maradok = 'vmi uj', akkor hibát dobna, de ha tömb v object lenne,
//attól még a tartalmát manipulálhatnám, ha a tartalomra hivatkoznék
let Valtozok = 'vmi'
//ha ezt írnám: Valtozok = 'vmi uj', akkor átírná az értékét

//3.Referencia szerint vs érték szerint
//Referencia szerinti átadás esetén megváltozik az eredetinek is az értéke
let tomb = ['joe, elek', 'hugo']
tomb[0] = 'vmi'
//4.
const ContainsElement = (atnezendoTomb, aSzam) => {
for (let i = 0; i < atnezendoTomb.length; i++) {
    if (aSzam === atnezendoTomb[i]) {
        //ha van akk igen
        return true;
    }
}
//ide csak akkor jutunk el ha nincs benne
return false;
}
//5.
const TheOldestFella = (idosekOtthona) => {
    let DaOldest = idosekOtthona[0];
    let answer = ''
    for (let j = 1; j < idosekOtthona.length; j++) {
        if (DaOldest.age < idosekOtthona[i].age) {
            DaOldest = idosekOtthona[i];
        }
    }
    answer = DaOldest.name
    //lehetne DaOldest.name-et is returnolni
    return answer
}

//6. 2vel oszthato ketjegyu pozitiv
const Matek = (ebbenKeresd) => {
    let answerTomb = []
    for (let k = 0; k < ebbenKeresd.length; k++) {
        if (ebbenKeresd[k] > 0 && ebbenKeresd[k] % 2 === 0 && ebbenKeresd[k].toString().length === 2) {
            answerTomb.push(ebbenKeresd[k]);
        }
    }
    return answerTomb;
}

//7. Metszet

const Metszet = (egyesTomb, KettesTomb) => {
    let VegsoTomb = [];
    for (let l = 0; l < egyesTomb.length; l++) {
        for (let m = 0; m < KettesTomb.length; m++) {
            if (egyesTomb[l] === KettesTomb[m]) {
                //ide betehetnénk egy if-et h a VegsoTomb[0] undefined-e,
                //ha nem akk mehetne egy for ciklus h tartalmaz-e már ezzel megegyező elemet,
                //de gyakon az volt h ismétlődéssel ne foglalkozzunk
                VegsoTomb.push(egyesTomb[l]);
                //van talalat, abba lehet hagyni
                break;
            }
        }
    }
    return VegsoTomb;
}

// exportolos

const osszeadas = (egyes, kettes) => {
    return egyes + kettes
}

const szorzas = (egyes, kettes) => {
    return egyes * kettes
}

const hatvanyozas = (mit, mennyire) => {
    let ennyi = 1;
    for (let i = 1; i < mennyire; i++) {
        ennyi = ennyi * mit
    } 
    return ennyi
}

module.exports = {
    osszeadas,
    szorzas,
    hatvanyozas
  }

//pluszcucc
const Extra = (szam1, szam2) => {
    let answer = [];
    let toltendo = [];
    for (let k = 0; k < szam1; k++) {
        answer.push(toltendo);
        for (let n = 0; n < szam2; n++) {
            answer[k][n] =k * n;

    }
}
return answer
}