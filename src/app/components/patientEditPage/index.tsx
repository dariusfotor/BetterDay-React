import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { updatePatient, getPatientById } from '../../modules/actions'
import { useParams } from 'react-router-dom'
import { PatientDetailsType } from '../../modules/types'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { TextField } from '../forms-components/text-field'
import { DatePicker } from '../forms-components/date-picker'
import { useQuery, useMutation } from 'react-query'
import SuccessUpdate from './components/success-update'
import ErrorUpdate from './components/error-uptade'

interface RouteParams {
  id: string
}

const PatientEditPage = () => {
  const history = useHistory()
  const { id } = useParams<RouteParams>()
  const [openSuccess, setOpenSuccess] = React.useState(false)
  const [openError, setOpenError] = React.useState(false)
  const { error, data } = useQuery<PatientDetailsType>(['patient', id], () =>
    getPatientById(+id),
  )
  const phoneRegex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
  const PatientSchema = Yup.object().shape({
    firstName: Yup.string().required('Privalomas laukas'),
    lastName: Yup.string().required('Privalomas laukas'),
    dateOfBirth: Yup.string().required('Privalomas laukas'),
    phoneNumber: Yup.string()
      .required('Privalomas laukas')
      .matches(phoneRegex, 'Neteisingas tel. nr.'),
    address: Yup.object({
      address1: Yup.string().required('Privalomas laukas'),
      zipCode: Yup.string().required('Privalomas laukas'),
      city: Yup.string().required('Privalomas laukas'),
      state: Yup.string().required('Privalomas laukas'),
    }),
  })

  const getInitialValues = React.useCallback(() => {
    return {
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      dateOfBirth: data?.dateOfBirth ? data?.dateOfBirth : null,
      phoneNumber: data?.phoneNumber || '',
      address: {
        address1: data?.address.address1 || '',
        zipCode: data?.address.zipCode || '',
        city: data?.address.city || '',
        state: data?.address.state || '',
      },
    }
  }, [data])

  const mutation = useMutation(updatePatient, {
    onSuccess: () => {
      setOpenSuccess(true)
    },
    onError: () => {
      setOpenError(true)
    },
  })

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: PatientSchema,
    onSubmit: (values) => {
      if (data) {
        mutation.mutate([values, data.id])
      }
    },
  })

  useEffect(() => {
    if (data) {
      formik.setValues(getInitialValues())
    }
  }, [data])

  if (!data) {
    return null
  }
  if (error) {
    return <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Klaida!</h3>
  }
  return (
    <Container>
      <div className="form-container">
        <Button
          size="small"
          variant="contained"
          startIcon={<KeyboardBackspaceIcon />}
          onClick={() => history.push(`/patient/${data.id}`)}
        />
        <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <h3>
              Redaguoti {data.firstName} {data.lastName}
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

          <DatePicker
            value={formik.values.dateOfBirth}
            label="Gimimo diena"
            name="dateOfBirth"
            error={Boolean(formik.errors.dateOfBirth)}
            helperText={formik.errors.dateOfBirth}
            onChange={formik.handleChange}
          />

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
      </div>
      <SuccessUpdate
        patientId={data.id}
        history={history}
        openSuccess={openSuccess}
        setOpenSuccess={setOpenSuccess}
      />
      <ErrorUpdate openError={openError} setOpenError={setOpenError} />
    </Container>
  )
}

export default PatientEditPage
const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  .form {
    width: 600px;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
`
