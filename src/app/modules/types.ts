export interface PatientsListTypes {
  id: number
  fullName: string
}
export interface PatientDetailsType {
  id: number
  firstName: string
  lastName: string
  image: string
  dateOfBirth: Date | null
  phoneNumber: string
  address: {
    address1: string
    zipCode: string
    city: string
    state: string
  }
}
