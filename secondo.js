//può contenere dichiarazioni di classi, funzioni, variabili e codice che viene eseguito

//quando vedete codice preceduto da class o function si tratta di DICHIARAZIONE
//il programma non sta facendo niente ma sta PREPARANDO classi o funzioni da eseguire

//Generalmente li mettiamo sopra

/*
    public class Person
    {
        String name,surname;
        int yob,height;
        boolean driver;

        public Person(.........)
        {
            ..............
        }

        public int getAge()
        {
            return 2023-yob;
        }
    }
*/
class Person
{
    //mettiamo gli ATTRIBUTI
    //non necessitano di parole chiave davanti
    //con attributo intendiamo metodo o proprietà

    //nome cognome dob altezza driver
    //1 si chiama constructor
    //2 definisce le proprietà dentro se stesso
    //3 le proprietà non hanno tipo
    constructor(name,surname,yob,height,driver)
    {
        this.name = name;//crea una nuova proprietà chiamata name e dagli il valore del primo parametro
        this.surname = surname;
        this.yob = yob;//anno di nascita
        this.height = height;
        this.driver = driver;
    }

    getAge()
    {
        return 2023-this.yob;//in java il this è obbligatorio solo in caso di omonimia con i parametri
                             //in js se volete chiamare attributo deve essere SEMPRE preceduto da this
    }
    //abbiamo dichiarato classe Person con queste proprietà: nome cognome dob altezza driver   E il metodo getAge()
}

//codice che verrà eseguito, come fosse un MAIN
// let p1 = new Person();
// let p2 = new Person("Stefano","Rubinetti");
// let p3 = new Person("Stefano","Rubinetti",1995);
// let p4 = new Person("Stefano","Rubinetti",1995,176);
// let p5 = new Person("Stefano","Rubinetti",1995,176,true);
// let p6 = new Person("Stefano","Rubinetti",1995,176,true,"boh a caso","tanto vengo scartato");

//metodo -> funzione dentro un oggetto
//funzione -> da sola
//dichiarato funzione
function stampaParametri(a,b,c) 
{
    console.log(a);
    console.log(b);
    console.log(c);
}

//la utilizzo, la chiamo

//la parte di NON DICHIARAZIONE viene detta INIZIALIZZATORE della PAGINA
console.log("prima stampa");
stampaParametri();
console.log("seconda stampa");
stampaParametri('aaaa','bbbb');
console.log("terza stampa");
stampaParametri('aaaa',222222,33333);
console.log("quarta stampa");
stampaParametri('aaaa',null,true,'ciao');

//undefined è il valore di default delle variabili in js
//null è VOLONTARIO, null è un valore che diamo NOI