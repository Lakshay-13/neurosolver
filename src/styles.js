import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  padding: 10px 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
  border-radius: 5px; // added some border-radius for styling
`;

export const SolverSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; // take full height of the viewport

  h1 {
    color: ${({ theme }) => theme.mode === 'dark' ? 'white' : 'black'};
    margin-bottom: 20px;
  }
`;

export const SettingsCog = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;

  .settings-panel {
    position: absolute;
    top: 30px;
    right: 0;
    background-color: ${({ theme }) => theme.mode === 'dark' ? '#333' : '#f7f7f7'};
    border: 1px solid ${({ theme }) => theme.mode === 'dark' ? '#444' : '#ddd'};
    padding: 10px;
    border-radius: 5px;

    button {
      margin-bottom: 10px;
      padding: 5px 10px;
    }

    input[type="color"] {
      padding: 5px;
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;
