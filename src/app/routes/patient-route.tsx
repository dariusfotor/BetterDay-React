import React from 'react';
import { RouteComponentProps } from "react-router";
import PatientPage from '../components/patientPage'
import Header from '../components/header'
import styled from 'styled-components'

export const PatientHomePage: React.FC<RouteComponentProps> = props => {
    return (
        <React.Fragment>
        <Header />
        <Container>
            <PatientPage />
        </Container>
        </React.Fragment>
    );
}
const Container = styled.div`
padding: 10px 20px;
`

