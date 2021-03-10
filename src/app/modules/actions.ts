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

export const getPatient = (id: number) => {
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
  try {
    await axios
      .get(`http://localhost:3010/patientsDetails/${id}`, objectPatients)
      .then((response) => response.data);
    // await axios
    //   .get(`http://localhost:3010/patients/${id}`, {fullName: objectPatients.fullName})
    //   .then((response) => console.log(response.data));
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