import React from "react"
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core"

const InputField = ({
  type = "text",
  label,
  id,
  value,
  rows = 1,
  multiline = false,
  onFocus,
  onChange,
  error = false,
  errorMessage = "",
}) => {
  return (
    <FormControl required fullWidth style={{ marginBottom: "20px" }}>
      <InputLabel
        error={error}
        style={{ overflow: "hidden" }}
        htmlFor={`component-${id}`}
      >
        {label}
      </InputLabel>
      <Input
        onFocus={onFocus}
        value={value}
        type={type}
        error={error}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        id={`component-${id}`}
      />
      {error ? (
        <FormHelperText error={error} id={`compoenent-${id}`}>
          {errorMessage}
        </FormHelperText>
      ) : null}
    </FormControl>
  )
}

export default InputField
