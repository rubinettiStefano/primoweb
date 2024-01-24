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


let people = [];
people.push(new Person("Stefano","Rubinetti",1995,176,true));
people.push(new Person("Simone","Di Muzio",1996,180,true));
people.push(new Person("Irene","Alieksieieva",1995,169,false));
people.push(new Person("Niko","Ricci",1996,190,true));


let vettoreNomiCognomiAlti = people.
                            //filter si aspetta una funzione che restituisca un boolean
                            // nomeSingoloElementoVettore => espressione booleana
                            filter(p=>p.height>177).
                            //la funzione da la trasformazione
                            map(p=> p.name + " "+p.surname).
                            filter(nominativo=> nominativo.startsWith("S"));

console.log(vettoreNomiCognomiAlti);


let numeri =[34,18,97,65,11];

let numeriRaddoppiati = numeri.map(n=> n*2);

//[68,36,194,130,22]
