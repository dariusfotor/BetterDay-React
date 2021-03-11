import axios from 'axios';

export const getPatients = () => {
  try {
    return axios
      .get('http://localhost:3010/patients')
      .then((response) => response.data);
  } catch (err) {
    console.log(err);
    return Promise.resolve(null)
  }
};

export const getPatientById = (id: number) => {
  try {
    return axios
      .get(`http://localhost:3010/patientsDetails/${id}`)
      .then((response) => response.data);
  } catch (err) {
    console.log(err)
    return Promise.resolve(null)
    ;
  }
};

export const updatePatient = async (objectPatients: any, id?: number) => {
  console.log(objectPatients)
  try {
    await axios
      .patch(`http://localhost:3010/patientsDetails/${id}`, objectPatients)
      .then((response) => response.data);
    await axios
      .patch(`http://localhost:3010/patients/${id}`, {fullName: objectPatients.firstName + " " + objectPatients.lastName })
      .then((response) => console.log(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const deletePatient = async (id?: number) => {
  try {
    await axios
      .delete(`http://localhost:3010/patientsDetails/${id}`)
      .then((response) => response.data);
    await axios
      .delete(`http://localhost:3010/patients/${id}`)
      .then((response) => response.data);
  } catch (err) {
    console.log(err);
  }
};