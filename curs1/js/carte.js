class Carte{
    static reducere = 10;
    mypret;
    constructor(titlu, autor, editura, an, nrpagini){
        this.titlu = titlu;
        this.autor = autor;
        this.editura = editura;
        this.an = an;
       
        this.nrpagini = nrpagini;
    }
    get pret(){
        console.log("sunt in getter");
        return this.mypret;
    }
    set pret(pretNou){
        console.log("sunt in setter");
        if (pretNou <= 0){
            throw "pretul nu poate fi actualizat";
        }
        else{
            this.mypret= pretNou;
        }
        // this.pret = pretNou;
    }
    info(){
        console.log(`titlul este  ${this.titlu}, autor ${this.autor}`);
    }
    deschideCartea(pagina){
        console.log(`am deschis cartea la pagina ${pagina}`);
    }
    randomIntFromInterval(min, max){
        return Math.floor(Math.random() * (max-min+1) +min)
    }
    // modificaPret(diferenta){
    //     if(pretNou<100 && pretNou>this.pret){
    //         this.pret =pretNou;
    //     }
    // }
    reducere(procent){
        this.pret = this.pret - (procent/100 * this.pret)
        console.log(` pretul cu reducere este ${this.pret}`)
    }


    // pretNou(){
    //     this.pret = this.pret - (Carte.reducere * this.pret) / 100
    // }

    // modificaPret(diferenta){
    //     this.pret = this.pret - diferenta;
    // }
}
