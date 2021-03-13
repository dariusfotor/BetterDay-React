import {
  TextFieldProps,
  default as MuiTextField,
} from '@material-ui/core/TextField'

export const TextField = (params: TextFieldProps) => {
  return (
    <div className="form-group">
      <MuiTextField variant="filled" color="secondary" {...params} />
    </div>
  )
}
