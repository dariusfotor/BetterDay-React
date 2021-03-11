import React, {useEffect} from 'react';
import {getPatientById} from '../../modules/actions'
import {PatientDetailsType} from '../../modules/types'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import DeleteModal from '../modal/delete-modal'
import MediaCard from './components/card'

interface RouteParams {id: string, param2?: string}

const PatientPage =()=>{
    const[show, setShow]=React.useState<boolean>(false)
    const {id}  = useParams<RouteParams>();
    const history = useHistory();
    const[patientData, setPatientData]=React.useState<PatientDetailsType>()
    useEffect(()=>{
        getPatientById(+id).then(setPatientData)
    },[id])
    
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
                </div>
                <div className='card'>
                   {patientData ? <MediaCard history={history} setShow={setShow} patientData={patientData} /> : <h3>loading...</h3>} 
                 </div>  
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
.card{
    margin-top: 15px;
}
`