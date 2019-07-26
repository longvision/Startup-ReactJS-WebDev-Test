import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;
export const Logo = styled.img`
  height: 50px;
`;
export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    color: #48285b;
    font-size: 18px;
    border-radius: 3px;
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #ffe162;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #fff111;
    }
  }
`;
