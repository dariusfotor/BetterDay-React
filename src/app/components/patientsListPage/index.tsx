import React, { useEffect } from 'react'
import { getPatients } from '../../modules/actions'
import { PatientsListTypes } from '../../modules/types'
import styled from 'styled-components'
import PatientsTable from './components/patientsTable'

const PatientsListPage = () => {
  const [data, setData] = React.useState<PatientsListTypes[]>()
  useEffect(() => {
    getPatients().then(setData)
  }, [])
  return (
    <Container>
              {data ? <PatientsTable data={data}/> : <h3>loading...</h3>}
    </Container>
  )
}

export default PatientsListPage
const Container = styled.div`
  display: flex;
  justify-content: center;
`
