class Carte{
    constructor(titlu, autor, editura, an_aparitie, pret, numar_pagini){
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an_aparitie = an_aparitie;
        this.pret = pret;
        this.numar_pagini = numar_pagini;
    }

    obtine_titlu(){
        console.log(`Titlul cartii este ${this.titlu}`)
    }

    detalii(){
        document.write(`Titlul cartii este ${this.titlu}, avand autorul ${this.autor} de la editura ${this.editura}, anul aparitiei este ${this.an_aparitie}, cu numarul de pagini ${this.numar_pagini}, iar pretul este ${this.pret}<br>`);
    }

}