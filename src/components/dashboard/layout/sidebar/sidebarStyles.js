import styled from "styled-components";

export const SideBarBox = styled.div`
  width: 100%;
  border-right: 1px solid #e6eff5;
  /* background-color: red; */
  height: 100vh; ;
`;

export const MenuBox = styled.div`
  padding-top: 80px;
`;

export const MenuOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-left: 6px solid orange; */
  margin-top: 25px;
  width: 100%;
`;

export const Menu = styled.div`
  width: 75%;
  display: flex;
  align-items: center;

  div {
  }

  p {
    font-size: 15px;
    padding-left: 20px;
    font-weight: 400;
    color: #000000;
    padding-bottom: 4px;
    
  }
`;