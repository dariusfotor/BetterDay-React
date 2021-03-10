import React from 'react';
import { RouteComponentProps } from "react-router";
import PatientsListPage from '../components/patientsListPage'
import Header from '../components/header'

export const IndexRoute: React.FC<RouteComponentProps> = props => {
    return (
        <div>
            <Header/>
            <PatientsListPage />
        </div>
    );
}
