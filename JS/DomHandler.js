export class DomHandler {
    static updatePatientList(patients) {
        const selectPatient = document.getElementById("selectPatient");
        selectPatient.innerHTML = `<option value="">--Selecione um paciente--</option>`;
        patients.forEach(patient => {
            const option = document.createElement("option");
            option.value = patient.name;
            option.textContent = patient.name;
            selectPatient.appendChild(option);
        })
    };
    static updateDoctorList(doctors) {
        const selectDoctor = document.getElementById("selectDoctor");
        selectDoctor.innerHTML = `<option value="">--Selecione um médico--</option>`;
        doctors.forEach(doctor => {
            const option = document.createElement("option");
            option.value = doctor.name;
            option.textContent = doctor.name;
            selectDoctor.appendChild(option);
        })
    };
    static showMedicalAppointment(message) {
        const clinicalConsultationList = document.getElementById("clinicalConsultation-list");

        const appointment = Array.from(clinicalConsultationList.getElementsByTagName("li"));
        const existentAppointment = appointment.some((li)=>
            li.textContent.includes(message)
        );
        if(existentAppointment){
            alert("Essa consulta já foi agendada!");
            return
        }
        const li = document.createElement("li");
        li.classList.add("clinicalConsultation-li");
        li.textContent = message;
        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn-cancel");
        btnCancel.textContent = "Cancelar";
        btnCancel.addEventListener("click", () => {
            li.remove();
        })
        li.appendChild(btnCancel);
        clinicalConsultationList.appendChild(li);
    }
}