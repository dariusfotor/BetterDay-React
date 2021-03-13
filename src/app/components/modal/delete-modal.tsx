import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { colors } from '../../styles/colors'
import DeleteContent from './delete-content'
import { PatientDetailsType } from '../../modules/types'
import { useHistory } from 'react-router'
import { deletePatient } from '../../modules/actions'
import ReactDom from 'react-dom'
import { useMutation } from 'react-query'
import SnackBar from '../reused-components/snackbar'
import { ROUTES } from '../../routes'

interface Props {
  showDeleteModal: boolean
  setShowDeleteModal: (arg: boolean) => void
  patientData: PatientDetailsType
}

const DeleteModal: React.FC<Props> = (props) => {
  const mutation = useMutation(deletePatient)

  const portalDiv = document.getElementById('portal')
  const history = useHistory()

  return portalDiv && props.showDeleteModal
    ? ReactDom.createPortal(
        <Container>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4>Ar tikrai norite ištrinti?</h4>
              </div>
              <div className="modal-body">
                <DeleteContent patientData={props.patientData} />
              </div>
              <div className="modal-footer">
                <Button
                  color="primary"
                  className="edit-button"
                  size="small"
                  variant="contained"
                  onClick={() => {
                    props.setShowDeleteModal(false)
                  }}
                >
                  Atšaukti
                </Button>
                <Button
                  color="primary"
                  className="edit-button"
                  size="small"
                  variant="contained"
                  onClick={() => {
                    mutation.mutate(props.patientData.id)
                  }}
                >
                  Ištrinti
                </Button>
              </div>
            </div>
          </div>
          <SnackBar
            theme={'error'}
            open={mutation.isError}
            onClose={() => mutation.reset()}
          >
            Klaida! Bandykite dar karta
          </SnackBar>
          <SnackBar
            theme={'success'}
            open={mutation.isSuccess}
            onClose={() => {
              mutation.reset()
              history.push(ROUTES.PatientsList())
            }}
          >
            Įrašas sėkmingai ištrintas
          </SnackBar>
        </Container>,
        portalDiv,
      )
    : null
}
export default DeleteModal
const Container = styled.div`
  .modal {
    position: fixed;
    background-color: ${colors.black};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.black};
    box-shadow: 5px 10px 18px ${colors.grey};
  }
  .modal-content {
    width: 300px;
    background-color: ${colors.white};
  }
  .modal-header {
    padding: 5px;
    display: flex;
    justify-content: center;
  }
  .modal-footer {
    padding: 15px;
    display: flex;
    justify-content: space-evenly;
  }
  .modal-title {
    margin: 0;
  }
  .modal-body {
    text-align: center;
    padding: 10px;
    border-top: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
  }
`
