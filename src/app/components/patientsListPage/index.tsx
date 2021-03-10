import React, {useEffect} from 'react';
import { colors } from '../../styles/colors'
import {getPatients} from '../../modules/actions'
import {PatientsListTypes} from '../../modules/types'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import PageviewIcon from '@material-ui/icons/Pageview';

const PatientsListPage =()=>{
    const history = useHistory();
    const[data, setData]=React.useState<PatientsListTypes[]>()
    useEffect(()=>{
        getPatients().then(setData)
    },[data])
    const pacientsList = data?.map(patient=>{
        return(
           <tr key={patient.id}>
               <td>{patient.fullName}</td>
               <td><Button
            className="edit-button"
            size="small"
            variant="contained"
            startIcon={<PageviewIcon />}
            onClick={() => history.push(`/patient/${patient.id}`)}
            
          />
                </td>
           </tr>
        )
    })
    return(
        <Container>
            <Table>
<table>
    <thead>
        <tr>
            <th>Pacientai</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    {pacientsList}
    </tbody>
    
</table>
</Table>
        </Container>
        
    )
}

export default PatientsListPage
const Container = styled.div`
display: flex;
justify-content: center;
`

const Table = styled.table`
margin-top: 20px;
  table {
    display: table;
    text-align: center;
    border: 1px solid ${colors.greyDark};
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background: ${colors.greyLight};
  }
  tr:nth-child(odd) {
    background:${colors.white};
  }
  thead tr {
    border-bottom: 1px solid ${colors.grey};
  }
  th {
    padding: 16px 50.5px 14px 51.5px;
    background-color:${colors.white};
    font-size: 18px;
    color: ${colors.black};
    border-right: 1px solid ${colors.greyDark};
  }
  table tr td:last-of-type {
    border: none;
  }
  table tr th:last-of-type {
    border: none;
  }
  table tr td {
    text-align: center;
    font-size: 14px;
    color: ${colors.black};
    letter-spacing: 0px;
    border-right: 1px solid ${colors.greyDark};
  }
`;