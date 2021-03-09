import { Configuration } from "../../configuration";
import { PatientModel } from "../api-models/patient-model";

export const API = new class APIClass {
    private buildPath(pathname: string): string {
        return `${Configuration.API.host}/${pathname}`;
    }

    public async GetPatients(): Promise<PatientModel[]> {
        const req = await fetch(this.buildPath("patients"));
        return req.json();
    }

    public async GetPatientDetails(id: string): Promise<PatientModel> {
        const req = await fetch(this.buildPath(`patients/${id}`));
        return await req.json();
    }

    public async PutPatientDetails(id: string, model: PatientModel): Promise<void> {
        await fetch(this.buildPath(`patients/${id}`), {
            method: "PUT",
            body: JSON.stringify(model)
        });
    }
}();
