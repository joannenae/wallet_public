import styled from "@emotion/styled";

export const PcWrapper = styled.div`
  background-color: white;
  display: flex;
  box-shadow: 11px -12px 13px 0px rgb(208 208 208 / 25%);
  height: 89vh;
`;
// -------지갑 메인-top
export const PcContainer = styled.div`
  width: 30%;
  position: relative;
`;
export const PcContent = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

export const PcConTop = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  padding-top: 2.5%;
`;
export const PcProfile = styled.div`
  font-weight: bold;
  font-size: 2.2rem;
  cursor: pointer;
`;
export const PcWalletAddress = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  padding-left: 10px;
`;
// -------지갑 메인
export const PcImgBox = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 6%;
`;

export const PcAmount = styled.div`
  text-align: center;
  font-size: 2.4rem;
  margin-top: 10%;
  color: #5a5a5a;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  font-weight: 650;
`;

export const PcMoney = styled.div`
  text-align: center;
  font-size: 1.7rem;
  margin-top: 7%;
  color: #5a5a5a;
  letter-spacing: 0.2rem;
  font-weight: 600;
`;

export const PcContainerRight = styled.div`
  position: relative;
  width: 70%;
`;
export const PcButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 4%;
  top: 15%;
  width: 13%;
`;
export const PcButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 25%;
  line-height: 3;
  background-color: #0c70f2;
  color: white;
  font-size: 1.6rem;
  border-radius: 2rem;
  margin: 10%;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #0c70f2d4;
  }
`;
// ------ 거래 내역

export const PcTransBox = styled.div`
  width: 60%;
  margin-left: 10%;
  height: 615px;
  overflow-y: scroll;
  margin-top: 3%;
`;
export const PcTrans = styled.div`
  height: 70px;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
`;
// 거래내역 모달

export const PcFlex = styled.div`
  margin-right: 20px;
`;
export const PcConLeft = styled.div`
  font-size: 1.4rem;
  padding-top: 15px;
  color: gray;
`;

export const PcCon = styled.div`
  font-size: 1.4rem;
  padding-top: 15px;
  font-weight: 550;
`;

export const PcBlue = styled.div`
  font-size: 1.4rem;
  padding-top: 10px;
  color: #0c70f2;
  cursor: pointer;
  width: 40%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
`;
//----------mobile-------------------------
export const MoWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* box-shadow: 11px -12px 13px 0px rgb(208 208 208 / 25%); */
  height: 83vh;
`;
// -------지갑 메인-top
export const MoContainer = styled.div`
  width: 100%;
  /* position: relative; */
`;
export const MoWalletAddress = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 600;
  padding-left: 10px;
`;
export const MoAmount = styled.div`
  text-align: center;
  font-size: 2.1rem;
  margin-top: 10%;
  color: #5a5a5a;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  font-weight: 650;
`;

export const MoMoney = styled.div`
  text-align: center;
  font-size: 1.6rem;
  margin-top: 3%;
  color: #5a5a5a;
  letter-spacing: 0.2rem;
`;

export const MoContent = styled.div`
  width: 100%;
  margin-top: 10%;
`;
export const MoContainerRight = styled.div``;
export const MoButtonBox = styled.div`
  display: flex;
  margin-top: 3%;
`;
export const MoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 40px;
  border-radius: 10px;
  background-color: #0c70f2;
  color: white;
  font-size: 1.3rem;
  margin: 5%;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #0c70f2d4;
  }
`;
//

export const MoTransBox = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 310px;
  /* border: 1px solid red; */
  overflow-y: scroll;
  margin-top: 5%;
  margin-bottom: 15%;
`;
