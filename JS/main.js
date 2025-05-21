import { Patient } from "./Patient.js";
import { Doctor } from "./Doctor.js";
import { DomHandler } from "./DomHandler.js";

let doctors = [];
let patients = [];

async function downloadData() {
    try {
        const responseDoctor = await fetch("./data/doctor.json");
        const doctorData = await responseDoctor.json();

        doctors = doctorData.map((doctor) => new Doctor(doctor.name, doctor.age, doctor.cpf, doctor.medSpecialty))
        const responsePatient = await fetch("./data/patient.json");
        const patientData = await responsePatient.json()

        patients = patientData.map((patient) => new Patient(patient.name, patient.age, patient.cpf));
        DomHandler.updateDoctorList(doctors);
        DomHandler.updatePatientList(patients)
    } catch {
        console.error("Erro ao carregar os dados:", error)
    }
}
function formatDate(date) {
    const [fullYear, month, day] = date.split("-")
    return `${day}/${month}/${fullYear}`
}

function scheduleMedicalAppointment() {
    const selectedPatient = document.getElementById("selectPatient").value;
    const selectedDoctor = document.getElementById("selectDoctor").value;
    const selectedDate = document.getElementById("inputDate").value;


    if (!selectedPatient || !selectedDoctor || !selectedDate) {
        alert("Por favor, preencha todos os campos")
    }
    const patient = patients.find(p => p.name === selectedPatient);
    const doctor = doctors.find(p => p.name === selectedDoctor);
    if (patient && doctor) {

        doctor.medicalAppointment(patient, formatDate(selectedDate)).then(
            (message) => {
                DomHandler.showMedicalAppointment(message);
                document.getElementById("selectPatient").value = "";
                document.getElementById("selectDoctor").value = "";
                document.getElementById("inputDate").value = "";
            }
        )
    }

}

document.addEventListener("DOMContentLoaded", () => {
    downloadData();
    document.getElementById("btn-schedule").addEventListener("click", scheduleMedicalAppointment)
})

