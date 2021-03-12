import React from 'react'
import { getPatientById } from '../../modules/actions'
import { PatientDetailsType } from '../../modules/types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import { useHistory } from 'react-router'
import DeleteModal from '../modal/delete-modal'
import MediaCard from './components/card'
import { useQuery } from 'react-query'

interface RouteParams {
  id: string
}

const PatientPage = () => {
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false)
  const { id } = useParams<RouteParams>()
  const history = useHistory()
  const { isLoading, data } = useQuery<PatientDetailsType>(
    ['patient', id],
    () => getPatientById(+id),
  )
  return (
    <Container>
      <div>
        <div className="buttons-container">
          <Button
            size="small"
            variant="contained"
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => history.push('/index')}
          />
        </div>
        <div className="card">
          {data ? (
            <MediaCard
              history={history}
              setShowDeleteModal={setShowDeleteModal}
              patientData={data}
            />
          ) : isLoading ? (
            <h3>palaukite...</h3>
          ) : null}
        </div>
      </div>
      {data ? (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          showDeleteModal={showDeleteModal}
          patientData={data}
        />
      ) : null}
    </Container>
  )
}

export default PatientPage
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: #bc986a;
  .buttons-container {
    display: flex;
    justify-content: center;
  }
  .card {
    margin-top: 15px;
  }
`
