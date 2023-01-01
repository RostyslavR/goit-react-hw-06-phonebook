import styled from 'styled-components';

export const ContactList = styled.ul`
  width: 400px;
  height: 300px;
  margin: 0 auto;
  overflow-y: auto;

  li {
    display: flex;
    padding: 4px;
    justify-content: space-between;
  }

  p {
    text-align: start;
    width: 150px;
    font-size: 20px;
  }
`;
