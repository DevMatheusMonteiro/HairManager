import { StyledSelect, Container } from "./styles";

export function Select({
  label,
  id,
  options,
  getOptionLabel,
  getOptionValue,
  srOnly,
  errorMessage,
  isClearable = false,
  disabled = false,
  filterOption,
  ...rest
}) {
  return (
    <Container className={`select-component ${id}`}>
      <label data-sronly={srOnly} htmlFor={id}>
        {label}
      </label>
      <StyledSelect
        isDisabled={disabled}
        filterOption={filterOption}
        $error={errorMessage}
        className="select-wrapper"
        classNamePrefix="select"
        options={options}
        inputId={id}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        isClearable={isClearable}
        noOptionsMessage={({ inputValue }) =>
          inputValue
            ? `Nenhuma opção encontrada para "${inputValue}"`
            : "Nenhuma opção disponível"
        }
        {...rest}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </Container>
  );
}
