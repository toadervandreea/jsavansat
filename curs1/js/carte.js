class Carte{
    constructor(titlu, autor, editura, an, pret){
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an = an;
        this.pret = pret;
    }
    deschideCartea(pagina){
        console.log(`am deschis cartea la pagina ${pagina}`);
    }
    randomIntFromInterval(min, max){
        return Math.floor(Math.random() * (max-min+1) +min)
    }
    modificaPret(pretNou){
        if(pretNou<100 && pretNou>this.pret){
            this.pret =pretNou;
        }
    }
    reducere(procent){
        this.pret = this.pret - (procent/100 * this.pret)
        console.log(` pretul cu reducere este ${this.pret}`)
    }
}
