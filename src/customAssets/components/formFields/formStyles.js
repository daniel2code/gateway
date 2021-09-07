import styled from "styled-components";

export const Form = styled.form`
  width: ${(props) => props.width};
  margin-top: ${(props) => props.mt};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
`;

export const InputBox = styled.div`
  width: ${(props) => props.width};
  margin-top: ${(props) => props.mt};
`;

export const Label = styled.label`
  width: 100%;
  font-size: 14px;
  color: #626262;
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: 4px;
  background-color: ${(props) => props.bc};
  outline: none;
  margin-top: ${(props) => props.mt};

  ::placeholder {
    color: rgba(138, 138, 138, 0.5);
    font-size: 14px;
    /* padding-left: 10px; */
  }
`;

export const Select = styled.select`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  outline: none;
  border-radius: 4px;
  background-color: ${(props) => props.bc};
  margin-top: 10px;
  margin-top: ${(props) => props.mt};
  > option {
    margin-top: 10px;
    color: rgba(49, 49, 49, 0.5);
    padding-left: 0%;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  margin-top: ${(props) => props.mt};

  p {
    padding-left: 10px;
    font-size: 13px ;
    color: #626262;
  }
`;
