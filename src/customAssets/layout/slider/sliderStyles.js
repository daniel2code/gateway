import styled, { keyframes } from "styled-components";

const bounce = keyframes`
 0%{ 
   margin-top: 10px;
 }

 25%{ 
   margin-top: -10px;
 }

 50%{ 
   margin-top: 10px;
 }

 100%{ 
   margin-top: -10px;
 }
`

export const Container = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    height: auto;
    width: 100px;
    animation-name: ${bounce};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;

export const Body = styled.div`
  color: #000e48;

  > h4 {
    text-align: center;
    font-size: 20px;
    margin: 30px 0px 15px 0px;
  }

  > p {
    text-align: center;
    font-size: 15px;
    line-height: 22px;
  }
`;

export const TrackerBox = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  margin-top: 90px;
`;

export const Tracker = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: white;
`;
