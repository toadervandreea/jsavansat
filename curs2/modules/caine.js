import { Animal } from "./animal.js";

class Caine extends Animal{
 constructor(greutate, nrPicioare, nume){
   
    super(greutate, nrPicioare);
    this.nume = nume;
 }
 info(){
   console.log(`numele meu este ${this.nume}`);
   super.comunica("ham ham");
 }
 comunica(mesaj){
   super.comunica(mesaj);
   console.log("nu musc")
 }
}
export{Animal ,Caine};