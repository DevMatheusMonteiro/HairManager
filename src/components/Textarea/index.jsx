import { Container } from "./styles";

export function Textarea({
  label,
  id,
  srOnly = false,
  error = false,
  ...rest
}) {
  return (
    <Container className={`textarea-component ${id}`}>
      <label data-sronly={srOnly} htmlFor={id}>
        {label}
      </label>
      <div className="textarea-wrapper">
        <textarea data-error={error} id={id} {...rest}></textarea>
      </div>
    </Container>
  );
}
