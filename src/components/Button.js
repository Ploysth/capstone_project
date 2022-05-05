import styled from 'styled-components';

export default function Button({ onClick, buttonType, children }) {

  return(
    <StyledButton onClick={onClick} buttonType={buttonType}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
background-color: #ffad00;
width: 124px;
height: 33px;
font-size: 13px;
font-weight: 400;
`;