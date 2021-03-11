import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { colors } from '../../../styles/colors'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import { PatientDetailsType } from '../../../modules/types'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    width: 320,
    height: 240,
  },
  buttons:{
    display: 'flex',
    justifyContent: 'center'
  },
  editButton:{
    backgroundColor: `${colors.green}`,
    color: `${colors.white}`
  }
})
interface Props {
  patientData: PatientDetailsType
  setShow: (arg: boolean) => void
  history: any
}

const MediaCard: React.FC<Props> = (props) => {

  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.patientData?.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.patientData.firstName + ' ' + props.patientData.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div>
              Gimimo diena{' '}
              {moment(props.patientData.dateOfBirth).utc().format('YYYY-MM-DD')}
            </div>
            <div>Telefono nr. {props.patientData.phoneNumber}</div>
            <div className="title">
              Adresas:
              <div>{props.patientData.address.address1}</div>
              <div>{props.patientData.address.zipCode}</div>
              <div>{props.patientData.address.city}</div>
              <div>{props.patientData.address.state}</div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons} >
      <Button
          className={classes.editButton}
          size="small"
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() =>
            props.history.push(`/patient/edit/${props.patientData.id}`)
          }
        />
        <Button
          size="small"
          color="secondary"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={() => props.setShow(true)}
        />
      </CardActions>
    </Card>
  )
}

export default MediaCard
