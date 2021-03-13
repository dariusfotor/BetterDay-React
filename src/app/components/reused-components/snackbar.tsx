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
  },
}))

interface Props {
  open: boolean
  theme: string
  onClose: () => void
}

const SnackBar: React.FC<Props> = (props) => {
  const classes = useStyles()

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return
    }

    props.onClose()
  }
  const portalDiv = document.getElementById('snackbarPortal')

  return portalDiv && props.open
    ? ReactDom.createPortal(
        <div className={classes.root}>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={true}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={props.theme}>
              {props.children}
            </Alert>
          </Snackbar>
        </div>,
        portalDiv,
      )
    : null
}
export default SnackBar
