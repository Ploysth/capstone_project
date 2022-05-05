import styled from "styled-components";

export default function Input({
  handleInputChange,
  value,
  className,
  placeholder,
  name,
}) {
  return (
    <StyledInput
      onChange={handleInputChange}
      value={value}
      className={className}
      placeholder={placeholder}
      name={name}
    />
  );
}

export const StyledInput = styled.input`
width: 312px;
height: 32px;
border: 1px solid #36436f;
font-size: 20px;

`
