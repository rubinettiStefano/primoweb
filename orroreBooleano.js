let sonoUnBooleano = true;

//true
//false

//truthy
//falsy
//Sono booleani ricavati da NON booleani


let faccioFintaDiEssereUnBooleano=null;
//truthy
//falsy
//le stringhe sono truthy se hanno almeno un carattere
//i numeri se 0 false altrimenti true
//un vettore è sempre true
//un oggetto è sempre true

//null o undefined sono SEMPRE FALSE
//console.log(faccioFintaDiEssereUnBooleano);
if(faccioFintaDiEssereUnBooleano)
{
    //console.log("ciao blocco vero");
}
else
{
    //console.log("ciao blocco falso");
}


//if(faccioFintaDiEssereUnBooleano!=null || faccioFintaDiEssereUnBooleano!=undefined )
//è equivalente a
if(faccioFintaDiEssereUnBooleano)//se esiste
{

}

//se è nulla
if(!faccioFintaDiEssereUnBooleano)//se non esiste
{

}


//uguaglianza == 
//è uguaglianza di STATO, controlla che due oggetti abbiano lo stesso valore in tutte le proprietà
let stringa1 = "12";
let stringa2 = 12;

//uguaglianza === uguaglianza di STATO e TIPO
if(stringa1===stringa2)
{
    console.log("ciao blocco vero");
}
else
{
    console.log("ciao blocco falso");
}

//LAZY EVALUATION

let a=10;
let b=20;


if(a>15 && b<50)
{

}

//HORROR VACUI
//esempio di stampa solo se a è maggiore di 8
a>8 && console.log("CIAO");

if(a>8)
    console.log("ciao");