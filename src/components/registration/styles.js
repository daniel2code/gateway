import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
`;

export const FormContainer = styled.div`
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;

export const FormWrapper = styled.div`
  width: 73%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 20px #0000000a;
  border-radius: 14px;
  opacity: 1;
  padding: 25px 0px;

  > h4 {
    font-size: 18px;
    color: #000000;
  }

  > p {
    font-size: 15px;
    color: #525252;
    margin-top: 12px;
  }
`;

export const SliderContainer = styled.div`
  width: 50%;
  background: transparent linear-gradient(180deg, #ffffff 0%, #80bfff 100%) 0%
    0% no-repeat padding-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
