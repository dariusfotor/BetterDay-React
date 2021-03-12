import axios from 'axios';
import {PatientDetailsType} from './types'

const {REACT_APP_PATIENTS_URL, REACT_APP_PATIENT_DETAILS_URL} = process.env
export const getPatients = async () => {
    return axios
      .get(`${REACT_APP_PATIENTS_URL}`)
      .then((response) => response.data);
};

export const getPatientById = async (id: number) => {
    return axios
      .get(`${REACT_APP_PATIENT_DETAILS_URL}/${id}`)
      .then((response) => response.data);
};

export const updatePatient = async ([objectPatients, id]: [Omit<PatientDetailsType, "id" | "image">, number]) => {
    await axios
      .patch(`${REACT_APP_PATIENT_DETAILS_URL}/${id}`, objectPatients)
      .then((response) => response.data);
    await axios
      .patch(`${REACT_APP_PATIENTS_URL}/${id}`, {fullName: `${objectPatients.firstName} ${objectPatients.lastName}` })
      .then((response) => response.data);

};

export const deletePatient = async (id?: number) => {
    await axios
      .delete(`${REACT_APP_PATIENT_DETAILS_URL}/${id}`)
      .then((response) => response.data);
    await axios
      .delete(`${REACT_APP_PATIENTS_URL}/${id}`)
      .then((response) => response.data);
};