import React from 'react'
import { RouteComponentProps } from 'react-router'
import PatientPage from '../components/patientPage'
import styled from 'styled-components'

export const PatientHomePage: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
      <PatientPage />
    </Container>
  )
}
const Container = styled.div`
  padding: 0px 40px;
`
