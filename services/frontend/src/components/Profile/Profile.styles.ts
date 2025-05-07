import styled from "styled-components";

export const Header = styled.h3`
  margin: 0.5rem 0;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #218838;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #1b702e;
  }
  width: fit-content;
  margin: 0.5rem 0 0 0;
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 10px 20px;
  border-radius: 10px;
  flex-grow: 1;
`;