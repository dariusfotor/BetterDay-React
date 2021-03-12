import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import ReactDom from 'react-dom'

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    zIndex: 1000,
  },
}))

interface Props {
  openSuccess: boolean
  setOpenSuccess: (arg: boolean) => void
  patientId: number
  history: any
}

const SuccessUpdate: React.FC<Props> = (props) => {
  const classes = useStyles()

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return
    }

    props.setOpenSuccess(false)
    props.history.push(`/patient/${props.patientId}`)
  }
  const portalDiv = document.getElementById('portal')

  return portalDiv
    ? ReactDom.createPortal(
        <div className={classes.root}>
          <Snackbar open={props.openSuccess} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Įrašas sėkmingai redaguotas
            </Alert>
          </Snackbar>
        </div>,
        portalDiv,
      )
    : null
}
export default SuccessUpdate
