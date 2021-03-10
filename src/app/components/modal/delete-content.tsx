import React from 'react'
import styled from 'styled-components';
import {PatientDetailsType} from '../../modules/types';

interface Props{
    patientInfo?: PatientDetailsType
}

const DeleteContent: React.FC<Props> =(props)=>{
    return(
        <Container>
            <h4>{props.patientInfo?.firstName + " " + props.patientInfo?.lastName }</h4>
        </Container>
    )
}
export default DeleteContent
const Container = styled.div``