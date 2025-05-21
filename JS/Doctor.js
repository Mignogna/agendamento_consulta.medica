import { Person } from "./Person.js";

export class Doctor extends Person {
    constructor(name, age, cpf, medSpecialty) {
        super(name, age, cpf);
        this.medSpecialty = medSpecialty;
    }
    medicalAppointment(patient, date){
        return new Promise((resolve) => {
            setTimeout(
                ()=> resolve(`${patient.name}, você tem consulta marcada com Dr(a). ${this.name} dia ${date}.`),1000
            );
        });
    }
}