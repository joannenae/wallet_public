import styled from "@emotion/styled";
// Pc --------------------
export const PcContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;
export const PcHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-top: 50px;
  padding-bottom: 30px;
`;
export const PcTitle = styled.div`
  font-size: 3rem;
  font-weight: 550;
  letter-spacing: 1;
  margin: 0 auto;
`;
export const PcBack = styled.img`
  width: 4%;
  position: absolute;
  left: 5%;
  cursor: pointer;
`;

export const PcContent = styled.div`
  width: 40%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  font-size: 1.8rem;
  margin-top: 20px;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  background-color: #f2f2f2;
  border: none;
  height: 40px;
  margin-top: 10px;
  border-bottom: 1px solid gray;
  font-size: 1.6rem;
  :focus {
    outline: none;
  }
`;

export const PcEye = styled.img`
  width: 47%;
  cursor: pointer;
`;
export const CheckButton = styled.button`
  width: 25%;
  height: 40px;
  background-color: #f2f2f2;
  border: 1px solid #0c70f2;
  color: #0c70f2;
  font-weight: 450;
  font-size: 1.7rem;
  border-radius: 15px;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;

export const PcJoinButton = styled.button`
  background-color: #0c70f2;
  margin-top: 50px;
  width: 100%;
  height: 60px;
  font-size: 2.2rem;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;

//  --------------------------
export const PcWrapper = styled.div`
  height: 400px;
  height: 100vh;
`;
export const PcDownHeader = styled.h1`
  text-align: center;
  padding-top: 7%;
  font-size: 2.7rem;
`;

export const PcDreamHeader = styled.h1`
  text-align: center;
  padding-top: 1%;
  font-size: 3.5rem;
`;

export const PcBox = styled.div`
  width: 80%;
  height: 55%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 7%;
`;
export const PcImage = styled.img`
  width: 15%;
  padding-top: 8%;
`;
export const PcContentLeft = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;

  text-align: center;
`;
export const PcContentRight = styled.div`
  width: 40%;
  border: 1.2px solid black;
  border-radius: 10px;
  text-align: center;
`;
export const AlertHead = styled.div`
  padding-top: 5%;
  font-size: 2rem;
`;
export const AlertSmall = styled.div`
  padding-top: 1.5%;
  font-size: 1.5rem;
  color: gray;
`;

export const Error = styled.span`
  color: red;
  font-size: 13px;
  padding: 15px 0px 0px 0px;
`;

// Mobile ------------------------------------------------

export const MobileContainer = styled.div`
  background-color: #f2f2f2;
  height: 100vh;
`;
export const MoHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding-top: 50px;
  padding-bottom: 30px;
`;
export const MoBack = styled.img`
  width: 8%;
  position: absolute;
  left: 5%;
`;
export const MoTitle = styled.div`
  margin: 0 auto;
  font-weight: 550;
  font-size: 2.3rem;
`;

export const MoContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
`;
export const MoText = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;
export const MoInputBox = styled.div`
  display: flex;
  align-items: baseline;
`;
export const MoInput = styled.input`
  width: 100%;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: none;
  font-size: 1.4rem;
  background-color: #f2f2f2;
  border-bottom: 1px solid gray;
  :focus {
    outline: none;
  }
`;
export const MoCheckButton = styled.button`
  width: 30%;
  height: 30px;
  padding: 5px;
  font-size: 1.3rem;
  background-color: #f2f2f2;
  border: 1px solid #0c70f2;
  border-radius: 10px;
  color: #0c70f2;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;
export const MoJoinButton = styled.button`
  width: 100%;
  margin-top: 50px;
  height: 40px;
  border-radius: 15px;
  border: none;
  background-color: #0c70f2;
  color: white;
  font-size: 1.7rem;
  font-weight: 500;
  :disabled {
    background-color: gainsboro;
    border: none;
    color: white;
  }
`;
// ----------
export const MobileBottomContainer = styled.div`
  height: 100vh;
`;
export const MobileHeader = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  margin-top: 10%;
`;
export const MobileDreamHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: 5%;
`;
export const MobileBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const MobileContentTop = styled.div`
  width: 87%;
  height: 27%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15%;
`;
export const MobileFlex = styled.div`
  padding: 4%;
`;
export const MobileAlert = styled.div`
  font-size: 1.3rem;
  margin-top: 5%;
`;
export const MobileSmall = styled.div`
  font-size: 1.2rem;
  color: gray;
  padding-top: 4%;
  height: 40px;
`;
export const MobileContentBottom = styled.div`
  width: 87%;
  height: 27%;
  margin: 0 auto;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15%;
`;

export const MobileImage = styled.img`
  width: 13%;
`;

export const MoMemo = styled.div`
  text-align: center;
  margin-bottom: 60px;
  font-size: 1.3rem;
  color: gray;
`;
export const MoError = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 20px;
`;
