import styled from "styled-components";

export const Subtitle = styled.h4`
  opacity: 0.5;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;

export const Value = styled.p`
  margin: 0;
  letter-spacing: 1px;
  opacity: 0.8;
`;

export const SubValue = styled(Value)`
  font-size: 0.95rem;
`;

export const Metadata = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: black;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  flex-grow: 1;
`;