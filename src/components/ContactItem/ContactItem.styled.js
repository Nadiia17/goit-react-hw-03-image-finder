import styled from 'styled-components';

export const ContactItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactText = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;
