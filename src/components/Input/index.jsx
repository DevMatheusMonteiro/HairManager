import { Container } from "./styles";

export function Input({
  label,
  id,
  icon: Icon,
  srOnly = false,
  error = false,
  ...rest
}) {
  return (
    <Container $srOnly={srOnly} className="input-component">
      <label data-sronly={srOnly} htmlFor={id}>
        {label}
      </label>
      <div className="input-wrapper">
        {Icon && <Icon />}
        <input data-error={error} id={id} {...rest} />
      </div>
    </Container>
  );
}
