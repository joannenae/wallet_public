import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const shake = keyframes`
  0% {margin-top: 0px;}
	100% {margin-top: 10px;}
`;

/////

export const PcWrapper = styled.div`
  height: 100vh;
`;
export const PcHeader = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
`;
export const PcLogo = styled.div`
  font-family: globalfont;
  font-size: 2.3rem;
`;
export const PcBack = styled.img`
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
`;
export const PcText = styled.div`
  font-size: 2.7rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  font-weight: 600;
`;

export const PcContent = styled.div`
  width: 50%;
  height: 50%;
  margin: 0 auto;
  margin-top: 40px;
`;

//-------------- 1단계

export const PcPwBox = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const PcPwCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  position: absolute;
  top: 66%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 70%;
  height: 65%;
  font-size: 1.8rem;
`;

export const PcBlur = styled.div`
  backdrop-filter: blur(5px);
  width: 75%;
  height: 75%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const PcLock = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
`;

export const PcMessage = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -65%);
  font-size: 1.5rem;
`;

export const PcPwItem = styled.div`
  font-size: 1.8rem;
  flex-basis: 23.5%;
  flex-shrink: 1;
  flex-grow: 1;
  border: 1px solid black;
  padding-left: 15px;
  line-height: 3;
`;
export const PcPwText = styled.div`
  font-size: 1.7rem;
  margin-top: 3%;
`;
export const PcPwInput = styled.input`
  padding: 8px;
  margin: 3% 0% 10% 0%;
  font-size: 1.5rem;
  ::placeholder {
    font-size: 1.3rem;
  }
`;
export const PcPwButton = styled.button`
  margin-top: 25px;
  border: none;
  height: 50px;
  border-radius: 20px;
  color: white;
  background-color: #0c70f2;
  font-size: 1.7rem;
`;

//------------------- 2단계

export const PcCheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 70%;
  height: 65%;
  font-size: 1.8rem;
`;
export const PcCheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  border: 1px solid black;
`;
export const PcCheckInput = styled.input`
  width: 75%;
  padding: 5px;
  border: none;
  font-size: 1.7rem;
  height: 50%;
  :focus {
    outline: none;
  }
`;

//------------------- 3단게

export const PcPwHeader = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-top: 50px;
  font-weight: 600;
`;
export const PcPwWelcome = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 70%;
  font-size: 1.8rem;
`;

export const PcHeart = styled.img`
  width: 15%;
  margin: 0 auto;
  padding-top: 20%;
  :hover {
    animation: ${shake} 0.3s linear 0s infinite alternate;
    margin-top: 0;
    cursor: pointer;
  }
`;

//------------------mobile -----------------------------------

export const MoWrapper = styled.div`
  height: 100vh;
`;

export const MoHeader = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
`;

export const MoBack = styled.img`
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

export const MoLogo = styled.div`
  font-family: globalfont;
  font-size: 1.7rem;
`;

export const MoText = styled.div`
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
  font-weight: 600;
`;

export const MoContent = styled.div`
  width: 80%;
  height: 50%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
`;

export const MoPwBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const MoPwCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 50%;
`;
export const MoPwItem = styled.div`
  font-size: 1.6rem;
  flex-basis: 45%;
  flex-shrink: 1;
  flex-grow: 1;
  border: 1px solid black;
  padding-left: 15px;
  line-height: 3;
`;

export const MoBlur = styled.div`
  backdrop-filter: blur(5px);
  width: 95%;
  height: 110%;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
export const MoLock = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
`;

export const MoMessage = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%);
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
`;
//--------2단계 -------
export const MoCheckBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 90%;
  height: 70%;
`;
export const MoCheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45%;
  height: 20%;
  border: 1px solid black;
`;
export const MoCheckInput = styled.input`
  width: 80%;
  border: none;
  font-size: 1.7rem;
  height: 50%;
  :focus {
    outline: none;
  }
`;
//--------완료

export const MoPwHeader = styled.div`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 600;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 90%;
  font-size: 1.7rem;
`;

export const MoPwWelcome = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: 85%;
  font-size: 1.5rem;
`;
export const MoHeart = styled.img`
  width: 20%;
  margin: 0 auto;
  padding-top: 7%;
  :hover {
    animation: ${shake} 0.3s linear 0s infinite alternate;
    margin-top: 0;
    cursor: pointer;
  }
`;
