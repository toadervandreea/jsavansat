class Student{
    constructor(id, nume, varsta, nota1, nota2){
        this.id = id;
        this.nume = nume;
        this.varsta = varsta;
        this.nota1 = nota1;
        this.nota2 = nota2;

    }
    salut(nume){
        console.log(`buna numele meu este ${nume}`)
    }
    Examen(nota1,nota2){
     this.nota1= nota1;
     this.nota2 = nota2;
     console.log(`examenul are nota1: ${nota1} si nota2 ${nota2}`)

    }
    Calc(nota1, nota2){
        rezultat = (this.nota1 + this.nota2)/2
        console.log(`media este ${rezultat}`)
    }
}