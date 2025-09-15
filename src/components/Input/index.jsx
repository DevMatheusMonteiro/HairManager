import { Container } from "./styles";

export function Input({
  errorMessage,
  label,
  id,
  icon: Icon,
  srOnly = false,
  ...rest
}) {
  return (
    <Container className={`input-component ${id}`}>
      <label data-sronly={srOnly} htmlFor={id}>
        {label}
      </label>
      <div className={`input-wrapper ${errorMessage && "error"}`}>
        {Icon && <Icon />}
        <input id={id} {...rest} />
      </div>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </Container>
  );
}
