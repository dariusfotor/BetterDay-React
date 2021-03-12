import React from 'react'
import { PatientDetailsType } from '../../modules/types'

interface Props {
  patientData: PatientDetailsType
}

const DeleteContent: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <h4>
        {props.patientData.firstName} {props.patientData.lastName}
      </h4>
    </React.Fragment>
  )
}
export default DeleteContent
