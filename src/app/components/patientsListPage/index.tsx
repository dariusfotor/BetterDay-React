import { getPatients } from '../../modules/actions'
import { PatientsListTypes } from '../../modules/types'
import styled from 'styled-components'
import PatientsTable from './components/patientsTable'
import { useQuery } from 'react-query'

const PatientsListPage = () => {
  const { isLoading, error, data } = useQuery<PatientsListTypes[]>(
    'patient',
    () => getPatients(),
  )

  if (error) {
    return <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Klaida!</h3>
  }
  return (
    <Container>
      {data ? (
        <PatientsTable data={data} />
      ) : isLoading ? (
        <h3>palaukite...</h3>
      ) : null}
    </Container>
  )
}

export default PatientsListPage
const Container = styled.div`
  padding: 20px 0;
  background-color: #bc986a;
  display: flex;
  justify-content: center;
`
