import React, {useEffect} from 'react';
import {getPatient} from '../../modules/actions'
import {PatientDetailsType} from '../../modules/types'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import moment from 'moment';
import DeleteModal from '../modal/delete-modal'
import DeleteIcon from '@material-ui/icons/Delete';

interface RouteParams {id: string, param2?: string}

const PatientPage =()=>{
    const[show, setShow]=React.useState<boolean>(false)
    const {id}  = useParams<RouteParams>();
    const history = useHistory();
    const[patientData, setPatientData]=React.useState<PatientDetailsType>()
    useEffect(()=>{
        getPatient(+id).then(setPatientData)
    },[id])

    const renderPatient = ()=>{
        return(
            <div className='renderedPatientContainer' >
                <div>
                    <div><img src={patientData?.image} alt='foto' width='320px' height="240px" /></div>
                </div>
                <div>
                    <div>Gimimo diena {moment(patientData?.dateOfBirth).utc().format('YYYY-MM-DD')}</div>
                    <div>Telefono nr. {patientData?.phoneNumber}</div>
                    <div className='title'>Adresas: 
                            <div>{patientData?.address.address1}</div>
                            <div>{patientData?.address.zipCode}</div>
                            <div>{patientData?.address.city}</div>
                            <div>{patientData?.address.state}</div>
                    </div>
                </div>
                
            </div>
        )
    }
    
    return(
        <Container>
            <div>
                <div className='buttons-container'>
                    <Button
                    className="edit-button"
                    size="small"
                    variant="contained"
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={() => history.goBack()}
                    />
                    <Button
                    className="edit-button"
                    size="small"
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => setShow(true)}
                    />
                    <Button
                    className="edit-button"
                    size="small"
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={() => history.push(`/patient/edit/${patientData?.id}`)}
                    />
                </div>
                    <h3>Pacientas {patientData?.firstName + " " + patientData?.lastName}</h3>
                    {renderPatient()}
                
            </div>
            <DeleteModal setShow={setShow} show={show} patientInfo={patientData} />
        </Container>
        
    )
}

export default PatientPage
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
.buttons-container{
display: flex;
justify-content: center;
}
`