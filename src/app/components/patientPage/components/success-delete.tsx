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

const SuccessDelete: React.FC<Props> = (props) => {
  const classes = useStyles()

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return
    }

    props.setOpenSuccess(false)
    props.history.push(`/index`)
  }
  const portalDiv = document.getElementById('portal')

  return portalDiv
    ? ReactDom.createPortal(
        <div className={classes.root}>
          <Snackbar open={props.openSuccess} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Įrašas sėkmingai ištrintas
            </Alert>
          </Snackbar>
        </div>,
        portalDiv,
      )
    : null
}
export default SuccessDelete
