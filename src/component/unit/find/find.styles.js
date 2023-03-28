import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// pc -----------------------------------------------
export const PcContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 100px;
`;
export const PcHeader = styled.div`
  font-size: 3.3rem;
  text-align: center;
  font-weight: 500;
`;

export const TabBox = styled.div`
  padding-top: 60px;
`;

export const PcInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 20px;
`;

export const PcInput = styled.input`
  width: 45%;
  margin-top: 30px;
  height: 40px;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 15px;
  font-size: 1.5rem;
  ::placeholder {
    color: lightgray;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #0c70f2;
  }
`;
export const PcButton = styled.button`
  height: 40px;
  width: 120px;
  font-size: 1.5rem;
  background-color: white;
  border: none;
  border: 1px solid #0c70f2;
  color: #0c70f2;
  border-radius: 20px;
  cursor: pointer;
`;

export const PcCheck = styled.div`
  text-align: center;
  width: 100%;
  background-color: #0c70f2;
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 50px;
  border-radius: 25px;
  color: white;
  margin-top: 60px;
  font-size: 2rem;
  align-items: center;
  cursor: pointer;
`;
// ------- 비밀번호 찾기

export const PcPwBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 30px;
`;

export const PcPwInput = styled.input`
  width: 45%;
  margin-top: 30px;
  height: 40px;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 15px;
  font-size: 1.5rem;
  ::placeholder {
    color: lightgray;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #0c70f2;
  }
`;
export const PcPwButton = styled.button`
  height: 40px;
  width: 120px;
  font-size: 1.5rem;
  background-color: white;
  border: none;
  border: 1px solid #0c70f2;
  color: #0c70f2;
  border-radius: 20px;
  cursor: pointer;
`;
// ---------------
export const PcFooter = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PcFooterText = styled.div`
  font-size: 1.7rem;
  margin-right: 10px;
`;
export const PcFooterImg = styled.img``;

export const Test = styled.div`
  width: 40%;
  padding: 5px;
  cursor: pointer;
  border-bottom: ${(props) => props.status === false && "3px solid #0c70f2"};
`;
export const TestPw = styled.div`
  width: 40%;
  padding: 5px;
  cursor: pointer;
  border-bottom: ${(props) => props.status === true && "3px solid #0c70f2"};
`;

// mobile ------------------------------------------------
export const MoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
`;
export const MoHeader = styled.div`
  font-size: 2.1rem;
  text-align: center;
  font-weight: 550;
`;
export const MoTest = styled.div`
  width: 50%;
  padding: 5px;
  cursor: pointer;
  border-bottom: ${(props) => props.status === false && "3px solid #0c70f2"};
`;
export const MoTestPw = styled.div`
  width: 50%;
  padding: 5px;
  cursor: pointer;
  border-bottom: ${(props) => props.status === true && "3px solid #0c70f2"};
`;

export const MoPwBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding-top: 30px;
`;

export const MoPwInput = styled.input`
  width: 55%;
  margin-top: 30px;
  height: 40px;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 15px;
  font-size: 1.5rem;
  ::placeholder {
    color: lightgray;
    font-size: 1.3rem;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #0c70f2;
  }
`;

export const MoPwButton = styled.button`
  height: 35px;
  width: 97px;
  font-size: 1.3rem;
  background-color: white;
  border: none;
  border: 1px solid #0c70f2;
  color: #0c70f2;
  border-radius: 20px;
  cursor: pointer;
`;
// -----------

export const MoInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 20px;
`;

export const MoInput = styled.input`
  width: 55%;
  margin-top: 30px;
  height: 40px;
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 15px;
  font-size: 1.5rem;
  ::placeholder {
    color: lightgray;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #0c70f2;
  }
`;
export const MoButton = styled.button`
  height: 32px;
  width: 90px;
  font-size: 1.2rem;
  background-color: white;
  border: none;
  border: 1px solid #0c70f2;
  color: #0c70f2;
  border-radius: 20px;
  cursor: pointer;
`;

export const MoCheck = styled.div`
  text-align: center;
  width: 100%;
  background-color: #0c70f2;
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 40px;
  border-radius: 25px;
  color: white;
  margin-top: 60px;
  font-size: 1.5rem;
  align-items: center;
  cursor: pointer;
`;

export const MoFooter = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const MoFooterText = styled.div`
  font-size: 1.3rem;
  margin-right: 10px;
`;
export const MoFooterImg = styled.img`
  width: 8%;
`;
