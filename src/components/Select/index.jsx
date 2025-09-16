import { StyledSelect, Container } from "./styles";

export function Select({
  label,
  id,
  options,
  getOptionLabel,
  getOptionValue,
  srOnly,
  errorMessage,
  ...rest
}) {
  return (
    <Container className={`select-component ${id}`}>
      <label data-sronly={srOnly} htmlFor={id}>
        {label}
      </label>
      <StyledSelect
        $error={errorMessage}
        className="select-wrapper"
        classNamePrefix="select"
        options={options}
        inputId={id}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        {...rest}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </Container>
  );
}
