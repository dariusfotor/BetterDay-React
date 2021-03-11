import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { updatePatient, getPatientById } from '../../modules/actions'
import 'react-datepicker/dist/react-datepicker.css'
import { useParams } from 'react-router-dom'
import { PatientDetailsType } from '../../modules/types'
import moment from 'moment'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { TextField } from '../forms-components/text-field'
import { DatePicker } from '../forms-components/date-picker'

interface RouteParams {
  id: string
  param2?: string
}

const EditPatientForm = () => {
  const history = useHistory()
  const [patientById, setPatientById] = React.useState<PatientDetailsType>()
  const { id } = useParams<RouteParams>()

  useEffect(() => {
    getPatientById(+id).then(setPatientById)
  }, [id])

  const phoneRegex = /^(\+370|8)\d{8}$/

  const PatientSchema = Yup.object().shape({
    firstName: Yup.string().required('Privalomas laukas'),
    lastName: Yup.string().required('Privalomas laukas'),
    dateOfBirth: Yup.string().required('Privalomas laukas'),
    phoneNumber: Yup.string()
      .required('Privalomas laukas')
      .matches(
        phoneRegex,
        'Netinkamas tel numeris, rašykite +3706 *** **** arba 86 *** **** ',
      ),
    address: Yup.object({
      address1: Yup.string().required('Privalomas laukas'),
      zipCode: Yup.string().required('Privalomas laukas'),
      city: Yup.string().required('Privalomas laukas'),
      state: Yup.string().required('Privalomas laukas'),
    }),
  })

  const getInitialValues = React.useCallback(() => {
    return {
      firstName: patientById?.firstName || '',
      lastName: patientById?.lastName || '',
      dateOfBirth: patientById?.dateOfBirth
        ? moment(patientById?.dateOfBirth)
        : null,
      phoneNumber: patientById?.phoneNumber || '',
      address: {
        address1: patientById?.address.address1 || '',
        zipCode: patientById?.address.zipCode || '',
        city: patientById?.address.city || '',
        state: patientById?.address.state || '',
      },
    }
  }, [patientById])

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: PatientSchema,
    onSubmit: (values) => {
      updatePatient(values, patientById?.id)
      history.goBack()
    },
  })

  useEffect(() => {
    console.log(patientById)
    if (patientById) {
      formik.setValues(getInitialValues())
    }
  }, [patientById])

  if (!patientById) {
    return null
  }
  return (
    <Container>
      <Button
        className="edit-button"
        size="small"
        variant="contained"
        startIcon={<KeyboardBackspaceIcon />}
        onClick={() => history.goBack()}
      />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <h3>
            Redaguoti {patientById.firstName + ' ' + patientById.lastName}
          </h3>
        </div>
        <TextField
          value={formik.values.firstName}
          label="Vardas"
          name="firstName"
          error={Boolean(formik.errors.firstName)}
          helperText={formik.errors.firstName}
          onChange={formik.handleChange}
        />
        <TextField
          value={formik.values.lastName}
          label="Pavardė"
          name="lastName"
          error={Boolean(formik.errors.lastName)}
          helperText={formik.errors.lastName}
          onChange={formik.handleChange}
        />
        <div className="form-group">
          <DatePicker
            value={formik.values.dateOfBirth?.format('YYYY-MM-DD')}
            label="Gimimo diena"
            name="dateOfBirth"
            error={Boolean(formik.errors.dateOfBirth)}
            helperText={formik.errors.dateOfBirth}
            onChange={formik.handleChange}
          />
        </div>
        <TextField
          value={formik.values.phoneNumber}
          label="Telefono nr."
          name="phoneNumber"
          error={Boolean(formik.errors.phoneNumber)}
          helperText={formik.errors.phoneNumber}
          onChange={formik.handleChange}
        />
        <TextField
          value={formik.values.address.address1}
          label="Adresas1"
          name="address.address1"
          error={Boolean(formik.errors.address?.address1)}
          helperText={formik.errors.address?.address1}
          onChange={formik.handleChange}
        />
        <TextField
          value={formik.values.address.city}
          label="Miestas"
          name="address.city"
          error={Boolean(formik.errors.address?.city)}
          helperText={formik.errors.address?.city}
          onChange={formik.handleChange}
        />
        <TextField
          value={formik.values.address.state}
          label="Valstija"
          name="address.state"
          error={Boolean(formik.errors.address?.state)}
          helperText={formik.errors.address?.state}
          onChange={formik.handleChange}
        />
        <TextField
          value={formik.values.address.zipCode}
          label="Kodas"
          name="address.zipCode"
          error={Boolean(formik.errors.address?.zipCode)}
          helperText={formik.errors.address?.zipCode}
          onChange={formik.handleChange}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Išsaugoti
        </Button>
      </form>
    </Container>
  )
}

export default EditPatientForm
const Container = styled.div`
width: 1200px;
margin: auto;


  .form {
    width: 600px;
    
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
`
