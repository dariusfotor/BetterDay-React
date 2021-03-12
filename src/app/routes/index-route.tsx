import React from 'react'
import { RouteComponentProps } from 'react-router'
import PatientsListPage from '../components/patientsListPage'
import styled from 'styled-components'

export const IndexRoute: React.FC<RouteComponentProps> = (props) => {
  return (
    <Container>
      <PatientsListPage />
    </Container>
  )
}
const Container = styled.div`
  padding: 0px 40px;
`
