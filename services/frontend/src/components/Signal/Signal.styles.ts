import styled from "styled-components";

// Wrapper for the icon
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
  margin: auto;
  align-items: flex-end;
  height: 60px;
`;

// Define each bar in the signal icon
export const Bar = styled.div`
  width: 6px;
  border-radius: 3px;
  background-color: ${(props) => props.color};
`;