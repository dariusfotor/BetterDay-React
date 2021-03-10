import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import DeleteContent from './delete-content';
import {PatientDetailsType} from '../../modules/types';
import { useHistory } from 'react-router';
import {deletePatient} from '../../modules/actions';

interface Props{
    show: boolean;
    setShow: (arg: boolean)=> void;
    patientInfo?: PatientDetailsType
}

const DeleteModal: React.FC<Props>=(props)=>{
    const history = useHistory();
    if(!props.show){
        return null
    }
    return(
        <Container>
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                <h4>Ar tikrai norite ištrinti?</h4>
                </div>
                <div className='modal-body'>
                    <DeleteContent patientInfo={props.patientInfo} />
                </div>
                <div className='modal-footer'>
                <Button
                    color="primary"
                    className="edit-button"
                    size="small"
                    variant="contained"
                    onClick={() => {
                        props.setShow(false);
                    } }
                >Atšaukti
                </Button>
                <Button
                    color="primary"
                    className="edit-button"
                    size="small"
                    variant="contained"
                    onClick={() => {
                        props.setShow(false);
                        deletePatient(props.patientInfo?.id)
                        history.push('/index')
                    } }
                >Ištrinti</Button>
                </div>

            </div>
        </div>
        </Container>
    )
}
export default DeleteModal
const Container = styled.div`
.modal {
    position: fixed;
    background-color: ${colors.black};
    top:50%;
  left:50%;
  transform: translate(-50%,-50%);
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
.modal-footer{
    padding: 15px;
    display: flex;
    justify-content: space-evenly;
}
.modal-title {
    margin: 0
}
.modal-body {
    text-align: center;
    padding: 10px;
    border-top: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey}
}
`