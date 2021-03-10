import {
  TextFieldProps,
  default as MuiTextField,
} from '@material-ui/core/TextField'

export const DatePicker = (params: TextFieldProps) => {
  return (
    <div className="form-group">
      <MuiTextField
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        {...params}
      />
    </div>
  )
}
