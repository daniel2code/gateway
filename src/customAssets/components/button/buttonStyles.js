import styled from "styled-components"


export const Button = styled.button`
 width: ${props=>props.width};
 height: ${props=>props.height};
 border: ${props=>props.border};
 background-color: ${props=>props.bc};
 margin-top: ${(props) => props.mt};
 border-radius: 5px;
 color: ${props=>props.color ? "blue": "white"};
 font-weight: 600;
 border-radius: 5px;
`