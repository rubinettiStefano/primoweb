class Citta
{
    constructor(nome,regione,provincia,abitanti)
    {
        this.nome = nome;
        this.regione = regione;
        this.provincia = provincia;
        this.abitanti = abitanti;
    }
}

let comuni = [
    new Citta("Torino", "Piemonte", "TO", 887000),
    new Citta("Genova", "Liguria", "GE", 580000),
    new Citta("Alessandria", "Piemonte", "AL", 94000),
    new Citta("Novara", "Piemonte", "NO", 104000),
    new Citta("Biella", "Piemonte", "BI", 44700),
    new Citta("Vercelli", "Piemonte", "VC", 46000),
    new Citta("Cuneo", "Piemonte", "CN", 56000),
    new Citta("Asti", "Piemonte", "AT", 76100),
    new Citta("Verbano-Cusio-Ossola", "Piemonte", "VB", 160000),
    new Citta("Savona", "Liguria", "SV", 62000),
    new Citta("Imperia", "Liguria", "IM", 52000),
    new Citta("La Spezia", "Liguria", "SP", 95000),
    new Citta("Savona", "Liguria", "SV", 62000),
    new Citta("Alassio", "Liguria", "SV", 11100),
    new Citta("Sanremo", "Liguria", "IM", 55000),
    new Citta("Ventimiglia", "Liguria", "IM", 25000),
    new Citta("Albenga", "Liguria", "SV", 24000),
    new Citta("Chiavari", "Liguria", "GE", 28000),
    new Citta("Sestri Levante", "Liguria", "GE", 18000),
    new Citta("Finale Ligure", "Liguria", "SV", 12000),
];






//risolvibile sono con map e filter
//fate in modo che siano tutti return ec..... ;

console.log("Comuni piemontesi");
console.log(comuniPiemontesi(comuni));
console.log("Comuni liguri");
console.log(comuniLiguri(comuni));
console.log("Comuni con più di 50 mila abitanti");
console.log(comuniPiuPopolosiDi(comuni,50000));
console.log("Comuni della provincia di Savona");
console.log(comuniPiuPopolosiDi(comuni,"SV"));
console.log("Comuni della provincia di Imperia con più di 25 mila abitanti");
console.log(comuniPiuPopolosiDi(comuni,"IM",25000));
console.log("Solo nomi comuni piemontesi");
console.log(nomiComuniPiemontesi(comuni));
console.log("Solo nomi e abitanti comuni Liguri");
console.log(nomiAbitantiComuniRegione(comuni,"Liguria"));
console.log("Solo nomi e abitanti comuni della provincia di Imperia con più di 25 mila abitanti");
console.log(nomiAbitantiComuniProvinciaPiuPopolosiDi(comuni,"IM",25000));
