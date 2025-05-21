import { Person } from "./Person.js";

export class Patient extends Person {
    constructor(name, age,cpf){
        super(name,age,cpf)
    }
}