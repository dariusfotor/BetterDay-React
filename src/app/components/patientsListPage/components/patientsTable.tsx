import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { PatientsListTypes } from '../../../modules/types';
import PageviewIcon from '@material-ui/icons/Pageview';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router'

interface Props{
  data: PatientsListTypes[]
}

const PatientsTable: React.FC<Props> =(props)=> {
  const history = useHistory();

  return (
    <TableContainer style={{ width: 600}} component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Pacientai</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">
              <Button
            className="edit-button"
            size="small"
            variant="contained"
            startIcon={<PageviewIcon />}
            onClick={() => history.push(`/patient/${row.id}`)}
          />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PatientsTable