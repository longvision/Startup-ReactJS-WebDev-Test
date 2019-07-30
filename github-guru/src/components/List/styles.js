import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Button = styled.button`
  background: #ffe160;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-left: 0px;
  margin-right: 15px;
  width: 20%;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    font-size: 24px;
  }
`;

export const Repository = styled.div`
  width: 90%;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 15px;

  /* padding: 10px; */
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: left;
    img {
      width: 64px;
    }
    strong {
      font-size: 26px;
      margin-top: 13px;
      color: #000;
    }
    small {
      font-size: 19px;
      color: #666;
    }
  }
`;
