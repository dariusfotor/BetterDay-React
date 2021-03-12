import React from 'react'
import { RouteComponentProps } from 'react-router'
import PatientEditPage from '../components/patientEditPage'
import styled from 'styled-components'

export const EditPatientHomePage: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
      <PatientEditPage />
    </Container>
  )
}
const Container = styled.div`
  padding: 0px 40px;
`
