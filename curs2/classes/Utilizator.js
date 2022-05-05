class Utilizator{
    nume;
    email;
    varsta;
    static nr_picioare = 2;
    constructor(n, e, v){
        this.nume = n;
        this.email = e;
        this.varsta = v;
    }
    salut(){
        console.log(`Salut! Numele meu este ${this.nume} si am ${this.varsta} ani.`);
        // console.log(('Salut! Numele meu este ' + this.nume + ' si am ' + this.varsta + ' ani.'))
    }
    static merge(nr_pasi){
        // intr-o metoda statica nu putem folosii cuvantul (this)
        console.log(`Toti utilizatorii au mers azi ${nr_pasi} cu cele ${Utilizator.nr_picioare} picioare`)
    }

}

let user = new Utilizator('Ion', 'ion@ion.com', 23);
let user2 = new Utilizator('Vasile', 'vasile@vasile.com', 22)
console.log(user);
console.log(user2);
// user.varsta = 32;
// console.log(user);
user.salut();
user2.salut();
//console.log(Utilizator.nr_picioare);
Utilizator.merge(8000);
Utilizator.nr_picioare = 3;
Utilizator.merge(4000);
