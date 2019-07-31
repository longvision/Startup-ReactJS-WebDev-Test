// import styled from 'styled-components';

// export const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

//   margin-top: 50px;
// `;
import styled from 'styled-components';

export const Repository = styled.div`
  width: 90%;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 15px;
  min-width: 80%; /* padding: 10px; */

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

export const Loading = styled.span`
  color: #ffe160;
  font-size: 20px;
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
  min-width: 40%;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  font-size: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  height: 100%;
  min-height: 1020px;
  background-color: #48285b;

  ul {
    margin-top: 25px;
  }
`;
export const Logo = styled.img`
  height: 50px;
`;
export const Results = styled.div`
  height: 100%;
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
    color: #48285b;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #fff111;
    }
  }
`;
