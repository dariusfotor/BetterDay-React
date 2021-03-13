import axios from 'axios'
import { PatientDetailsType } from './types'

const { REACT_APP_PATIENTS_API_URL } = process.env
export const getPatients = async () => {
  return axios
    .get(`${REACT_APP_PATIENTS_API_URL}/patients`)
    .then((response) => response.data)
}

export const getPatientById = async (id: number) => {
  return axios
    .get(`${REACT_APP_PATIENTS_API_URL}/patientsDetails/${id}`)
    .then((response) => response.data)
}

export const updatePatient = async ([objectPatients, id]: [
  Omit<PatientDetailsType, 'id' | 'image'>,
  number,
]) => {
  await axios.patch(
    `${REACT_APP_PATIENTS_API_URL}/patientsDetails/${id}`,
    objectPatients,
  )

  await axios.patch(`${REACT_APP_PATIENTS_API_URL}/patients/${id}`, {
    fullName: `${objectPatients.firstName} ${objectPatients.lastName}`,
  })
}

export const deletePatient = async (id: number) => {
  await axios.delete(`${REACT_APP_PATIENTS_API_URL}/patientsDetails/${id}`)

  await axios.delete(`${REACT_APP_PATIENTS_API_URL}/patients/${id}`)
}
