import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { colors } from '../../../styles/colors'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import { PatientDetailsType } from '../../../modules/types'
import styled from 'styled-components'
import moment from 'moment'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    width: 320,
    height: 240,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`,
  },
})
interface Props {
  patientData: PatientDetailsType
  setShowDeleteModal: (arg: boolean) => void
  history: any
}

const MediaCard: React.FC<Props> = (props) => {
  const classes = useStyles()
  return (
    <Container>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.patientData?.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.patientData.firstName + ' ' + props.patientData.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Telefono nr. {props.patientData.phoneNumber}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gimimo diena{' '}
            {moment(props.patientData.dateOfBirth).format('YYYY-MM-DD')}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Adresas:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.patientData.address.address1}
            <br />
            {props.patientData.address.zipCode}
            <br />
            {props.patientData.address.city}
            <br />
            {props.patientData.address.state}
          </Typography>
        </CardContent>

        <CardActions className={classes.buttons}>
          <Button
            className={classes.editButton}
            size="small"
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() =>
              props.history.push(`/patient/${props.patientData.id}/edit`)
            }
          />
          <Button
            size="small"
            color="secondary"
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => props.setShowDeleteModal(true)}
          />
        </CardActions>
      </Card>
    </Container>
  )
}

export default MediaCard
const Container = styled.div`
  .title {
    font-weight: 600;
  }
`
