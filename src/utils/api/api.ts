import { Configuration } from "../../configuration";
import { PatientDetailsModel } from "../api-models/patient-details-model";
import { PatientModel } from "../api-models/patient-model";

export const API = new class APIClass {
    private buildPath(pathname: string): string {
        return `${Configuration.API.host}/${pathname}`;
    }

    public async GetPatients(): Promise<PatientModel[]> {
        const req = await fetch(this.buildPath("patients"));
        return req.json();
    }

    public async GetPatientDetails(id: number): Promise<PatientDetailsModel> {
        const req = await fetch(this.buildPath(`patientsDetails/${id}`));
        return await req.json();
    }

    public async PutPatientDetails(id: number, model: PatientDetailsModel): Promise<void> {
        await fetch(this.buildPath(`patientsDetails/${id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(model)
        });
    }
}();
