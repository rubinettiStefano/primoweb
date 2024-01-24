//Creazione array
let sonoArray = [];//ho creato un vettore vuoto
//List<Qualcosa> sonoList = new ArrayList<Qualcosa>();
//i vettori hanno lunghezza VARIABILE

//l'equivalente del .add di java è il .push

sonoArray.push('ciao');//pos 0
sonoArray.push(47);//pos 1

//Type by Inference
//lui determina in automatico il tipo di una variabile in base a come è fatta

let elementoPos1 = sonoArray[1];

for(let i=0;i<sonoArray.length;i++)
{
    let elementoPosIesima = sonoArray[i];
}
/*
for(int i=0;i<sonoArray.length;i++)
{
    String elementoPosIesima = sonoArray[i];
}
*/

/*foreach

for(String el: sonoArray)
{
    System.out.println(el);
}
*/
for(let el of sonoArray)
{
    console.log(el);
}

//creo vettore persone
let people = [];
people.push(new Person("Stefano","Rubinetti",1995,176,true));
people.push(new Person("Simone","Di Muzio",1996,180,true));
people.push(new Person("Irene","Alieksieieva",1995,169,false));
people.push(new Person("Niko","Ricci",1996,190,true));

//voglio filtrare e ottenere solo persone più alte di 177
let personeAlte = [];

for(let p of people)
    if(p.height>177)
        personeAlte.push(p);

//V2
function piuAltoDi(p,min)
{
    return p.height>min;
}

for(let p of people)
    if(piuAltoDi(p,177))
        personeAlte.push(p);

//V3
let piuAltoV3 = function (p,min) 
{
    return p.height>min;
}

for(let p of people)
    if(piuAltoV3(p,177))
        personeAlte.push(p);

//V4
let piuAltoV4 = (p,min) =>
{
    return p.height>min;
}

for(let p of people)
    if(piuAltoV4(p,177))
        personeAlte.push(p);


//V5
let piuAltoV5 = (p,min) => p.height>min;

for(let p of people)
    if(piuAltoV5(p,177))
        personeAlte.push(p);

//V6
let personeAlteVettore = people.filter(p=>p.height>177);
/*
    List<Person> alte = people.stream().filter(p->p.height>177).toList();

*/

let vettoreNomiCognomi = people.map(p=> p.name + " "+p.surname);

//Stefano Rubinetti
//Simone Di Muzio
//ecc....
let vettoreNomiCognomiAlti = people.
                            filter(p=>p.height>177).
                            map(p=> p.name + " "+p.surname).
                            filter(nominativo=> nominativo.startsWith("S"));