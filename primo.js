function impostaColoreScuro()
{
    //Chiama l'html di cui è parassita (embedded) document e lo vede come un oggetto
    //modificando le proprietà dell'oggetto document modifichiamo la pagina web
    document.        //TUTTA LA PAGINA WEB
    getElementById("scatolone"). //PRENDO L'ELEMENTO HTML con id "scatolone"
    style                       //Prendo l'ATTRIBUTO STYLE di quell'elemento
    .backgroundColor      = "#164ce0"
    //dello STYLE prendo il background-color

    document.        //TUTTA LA PAGINA WEB
    getElementById("scatolone"). //PRENDO L'ELEMENTO HTML con id "scatolone"
    style                       //Prendo l'ATTRIBUTO STYLE di quell'elemento
    .color     = "#4eeb10"
    
}

colore="chiaro";

function togglaColore()
{

    if(colore=="scuro")
    {
        // style="background-color: bisque;color: darkgreen;"
        document.       
        getElementById("scatolone"). 
        style                       
        .backgroundColor      = "#ffe4c4";

        document.       
        getElementById("scatolone"). 
        style                       
        .color      = "#006400";

        colore="chiaro";
    }
    else
    {
        document.       
        getElementById("scatolone"). 
        style                       
        .backgroundColor      = "#164ce0";
        

        document.        
        getElementById("scatolone"). 
        style                       
        .color     = "#4eeb10";

        colore="scuro";
    }
}

function allargaDiv()
{
    let contenuto = document.getElementById("scatolone").innerHTML; 
    contenuto = contenuto.replace("<p>",'<p style="margin-bottom:40px">');
    document.getElementById("scatolone").innerHTML = contenuto;    
}

function stringDiv()
{
    let contenuto = document.getElementById("scatolone").innerHTML; 
    console.log(contenuto);
    contenuto = contenuto.replace('<p style="margin-bottom:40px">',"<p>");
    console.log(contenuto);
    document.getElementById("scatolone").innerHTML = contenuto;    
}


function cambiaParola()
{
    let parolaDaCambiare = document.getElementById("dacambiare").value;
    let nuovaParola = document.getElementById("nuovaparola").value;

    let contenuto = document.getElementById("scatolone").innerHTML; 
    contenuto = contenuto.replace(parolaDaCambiare,nuovaParola);
    document.getElementById("scatolone").innerHTML = contenuto;    
}

function topolino()
{
    document.getElementById("nontopolino").style.display="none";

    document.getElementById("topolino").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mickey_Mouse.svg/440px-Mickey_Mouse.svg.png" />';
}