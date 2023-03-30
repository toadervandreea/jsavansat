class Animal{
    #familie;
    #mancare;
    #culoare;
    greutate;
    nrPicioare;
    

    constructor(greutate, nrPicioare){
        this.greutate = greutate;
        this.nrPicioare = nrPicioare;
    }

    mananca(cantitate){
        console.log(`cantitatea de hrana consumata este de ${cantitate} kg`);
    }
    doarme(ore){
        console.log(`dorme ${ore} pe zi `)
    }
    comunica(mesaj){
        console.log(`acest animal face ${mesaj}`)
    }
    get familie(){
        return this.#familie;
    }
    set familie(myFam){
        this.#familie = myFam;
    }
}
export {Animal};