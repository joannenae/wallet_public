import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
export const bounce = keyframes`
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2);
  }
  `;
export const H1 = styled.h1`
  cursor: default;
  position: absolute;
  top: 0;
  left: 13%;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  margin: auto;
  display: block;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  span {
    position: relative;
    top: 10px;
    display: inline-block;
    -webkit-animation: ${bounce} 0.3s ease infinite alternate;
    font-size: 12rem;
    font-family: globalfont;
    color: #fff;
    z-index: 2;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
      0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);

    &:nth-child(2) {
      -webkit-animation-delay: 0.1s;
    }
    &:nth-child(3) {
      -webkit-animation-delay: 0.2s;
    }
    &:nth-child(4) {
      -webkit-animation-delay: 0.3s;
    }
    &:nth-child(5) {
      -webkit-animation-delay: 0.4s;
    }
    &:nth-child(6) {
      -webkit-animation-delay: 0.5s;
    }
    &:nth-child(7) {
      -webkit-animation-delay: 0.6s;
    }
    &:nth-child(8) {
      -webkit-animation-delay: 0.7s;
    }
  }
`;

// pc ------------------------------------------------------------
export const PcMain = styled.div`
  height: 100vh;
  display: flex;
`;
export const PcLeftContainer = styled.div`
  width: 50%;
  border-right: 1px solid lightgray;
  position: relative;
  background-color: #0c70f2;
`;
export const PcImageBox = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 100%;
`;
export const PcLogo = styled.img`
  /* width: 100%; */
  /* width: 35%; */
  margin-left: 90px;
  margin-bottom: 20px;
`;
export const PcLogoText = styled.div`
  font-size: 2.7rem;
  text-align: center;
  color: white;
  padding-top: 40%;
`;
export const Pctext = styled.div`
  font-size: 1.7rem;
  text-align: center;
  color: gray;
  margin-top: 5%;
`;
// -- right
export const PcRightContainer = styled.div`
  width: 50%;
  position: relative;
`;
export const PcContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
export const PcInput = styled.input`
  width: 100%;
  margin-top: 30px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid lightgray;
  padding: 15px;
  font-size: 1.5rem;
  ::placeholder {
    color: lightgray;
  }
  :focus {
    outline: 1px solid #0c70f2;
  }
`;
export const PcInputBox = styled.div`
  position: relative;
  width: 100%;
`;
export const PcEye = styled.img`
  width: 47%;
  cursor: pointer;
`;

export const PcLogin = styled.button`
  margin-top: 50px;
  border: none;
  height: 50px;
  border-radius: 25px;
  background-color: #0c70f2;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;

export const PcBottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;
export const PcGo = styled.div`
  font-size: 1.5rem;
  color: gray;
  cursor: pointer;
`;

export const PcLog = styled.button`
  margin-top: 50px;
  border: none;
  height: 50px;
  border-radius: 25px;
  background-color: #0c70f2;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;

//mobile ------------------------------------------------------

export const MobileMain = styled.div`
  height: 100vh;
`;
export const MobileMainContainer = styled.div`
  width: 70%;
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

export const MoContent = styled.div``;
export const MobileLogo = styled.img`
  /* width: 100%; */
  width: 20%;
`;
export const MoInputBox = styled.div`
  position: relative;
`;
export const MoInput = styled.input`
  width: 100%;
  margin-top: 30px;
  height: 17px;
  border-radius: 7px;
  border: 1px solid lightgray;
  padding: 15px;
  font-size: 1.3rem;
  ::placeholder {
    color: lightgray;
  }
  :focus {
    outline: 1px solid #0c70f2;
  }
`;
export const MoEye = styled.img`
  width: 53%;
  padding-left: 10%;
  cursor: pointer;
`;
export const MoBottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
`;
export const MoGo = styled.div`
  font-size: 1.3rem;
  color: gray;
  cursor: pointer;
`;
export const MoLogin = styled.button`
  width: 100%;
  margin-top: 40px;
  border: none;
  height: 40px;
  border-radius: 20px;
  background-color: #0c70f2;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;
