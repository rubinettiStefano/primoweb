//DICHIARATIVA
class Citta
{
    constructor(nome,regione,provincia,abitanti,foto)
    {
        this.nome = nome;
        this.regione = regione;
        this.provincia = provincia;
        this.abitanti = abitanti;
        this.foto = foto;
    }
}

let filterByProvince =()=>
{
    let ilMioDiv =  document. //l'intera pagina web
                    getElementById("listacomuni");

    let prov = document.getElementById("inprov").value;
    prov = prov.toUpperCase();

    console.log("Avvenuto evento keypress su input, valore attuale:"+prov);

    let comuniHtmlzzati = comuni.filter(c=>c.provincia.startsWith(prov)).map(c=> `
                                            <div class="w3-col m4 l4 w3-padding">
                                                <div class="w3-card-4" >
                                                    <img src="${c.foto}" alt="Avatar" width="100%" height="250">
                                                    <div class="w3-container">
                                                    <h4><b>${c.nome} (${c.provincia})</b></h4>    
                                                    <p>Regione: ${c.regione}  Abitanti: ${c.abitanti}</p>    
                                                    </div>
                                                </div>
                                            </div>
                                         `);
    let versioneHtmlComuni = comuniHtmlzzati.join("");
    ilMioDiv.innerHTML = versioneHtmlComuni;
}


//funzione che deve riempire il div con id="listacomuni" con le card dei vari comuni
let init =()=>
{
    let ilMioDiv =  document. //l'intera pagina web
                    getElementById("listacomuni");


    //comuni, vettore di città
    //tramite mappatura otteniamo comuniHtmlzzati, vettore di STRINGHE, dove ogni elemento è l'HTML che grafica un comune

    let comuniHtmlzzati = comuni.map(c=> `
                                            <div class="w3-col m4 l4 w3-padding">
                                                <div class="w3-card-4" >
                                                    <img src="${c.foto}" alt="Avatar" width="100%" height="250">
                                                    <div class="w3-container">
                                                    <h4><b>${c.nome} (${c.provincia})</b></h4>    
                                                    <p>Regione: ${c.regione}  Abitanti: ${c.abitanti}</p>    
                                                    </div>
                                                </div>
                                            </div>
                                         `);
    //da vettore di STring ottengo una unica string, le accodo tutte
    let versioneHtmlComuni = comuniHtmlzzati.join("");
    ilMioDiv.innerHTML = versioneHtmlComuni;
}

//ESECUZIONE - INIZIALIZZAZIONE
let comuni = [
    new Citta("Torino", "Piemonte", "TO", 887000,"https://electomagazine.it/wp-content/uploads/2021/02/shutterstock_544205710-scaled.jpg"),
    new Citta("Genova", "Liguria", "GE", 580000,"https://www.italia.it/content/dam/tdh/it/interests/liguria/genova/genova/media/20210506124258-shutterstock-1410992927.jpg"),
    new Citta("Alessandria", "Piemonte", "AL", 94000,"https://www.alessandriaturismopiemonte.it/wp-content/uploads/2019/02/la-cittadella-di-alessandria-700x525.jpg"),
    new Citta("Vercelli", "Piemonte", "VC", 46000,"https://upload.wikimedia.org/wikipedia/commons/7/72/Piazza_Cavour.jpg"),
    new Citta("Cuneo", "Piemonte", "CN", 56000,"https://lh3.googleusercontent.com/proxy/jTfhaQ-j9UDjEP1-NN9Kpgnv-CBcX2gMUswM0QIg6iBC4WCLg8pPPfSm20HuYQoujO2JFXcjAnZBiSNamBUwsDwN6viX2Rn6qP1ZgEuinXhQ-z1IdxV7myzaPrX8q4cKyx1NiQTJ5CCuWOw4tgPHvw"),
    new Citta("Albenga", "Liguria", "SV", 24000,"https://www.visitloano.it/wp-content/uploads/2013/05/centro-storico-albenga.jpg"),
    new Citta("Alassio", "Liguria", "SV", 11100,"https://www.liguria.info/wp-content/uploads/sites/113/alassio.jpg")
];

init();//la sto chiamando
//D.O.M.
//Document Object Model
//Permette a Javascript di vedere l'html come un OGGETTO
//oggetto che può essere letto e modificato
//una modifica sul DOM si traduce in una modifica nella pagina web
//si trova in una variabile GLOBALE chiamata document

