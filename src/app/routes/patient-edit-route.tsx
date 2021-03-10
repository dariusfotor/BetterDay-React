import React from 'react';
import { RouteComponentProps } from "react-router";
import EditPatientForm from '../components/patient-edit/'
import styled from 'styled-components'

export const EditPatientHomePage: React.FC<RouteComponentProps> = props => {
    return (
        <React.Fragment>
        <Container>
            <EditPatientForm />
        </Container>
        </React.Fragment>
    );
}
const Container = styled.div`
padding: 10px 20px;
`

