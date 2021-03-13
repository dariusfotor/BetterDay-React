import {
  TextFieldProps,
  default as MuiTextField,
} from '@material-ui/core/TextField'

export const DatePicker = (params: TextFieldProps) => {
  return (
    <div className="form-group">
      <MuiTextField
        variant="filled"
        color="secondary"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        {...params}
      />
    </div>
  )
}
