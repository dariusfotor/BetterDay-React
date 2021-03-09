import { AddressModel } from "./address-model";

export interface PatientDetailsModel {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    dateOfBirth: string;
    phoneNumber: string;
    address?: AddressModel;
}
