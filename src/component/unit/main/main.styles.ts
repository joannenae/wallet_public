import styled from "@emotion/styled";

type ITab = {
  tab: boolean;
};

export const PcWrapper = styled.div`
  background-color: white;
`;
// -------지갑 메인-top
export const PcContainer = styled.div`
  width: 100%;
  box-shadow: 11px -12px 13px 0px rgb(208 208 208 / 25%);
  position: relative;
`;

export const PcConTop = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;
  align-items: baseline;
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
  color: gray;
`;
// -------지갑 메인
export const PcContent = styled.div``;
export const PcImgBox = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 3%;
`;

export const PcAmount = styled.div`
  text-align: center;
  font-size: 2.4rem;
  margin-top: 3%;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  font-weight: 650;
`;

export const PcButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 4%;
  top: 15%;
  width: 8%;
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

// 메인 모달 계정 이름 수정

export const PcEditName = styled.button`
  font-size: 1.3rem;
  margin-left: 10px;
  padding: 5px;
`;
export const PcEditCancel = styled.button`
  font-size: 1.3rem;
  margin-left: 10px;
  padding: 5px;
`;

// --------tab

export const PcTabBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 20px;
`;
export const PcTabTitle = styled.div<ITab>`
  cursor: pointer;
  font-size: 1.8rem;
  padding: 2%;
  color: ${(props) => props.tab === true && "gray"};
  border-bottom: ${(props) => props.tab === false && "3px solid #0c70f2"};
`;
export const PcTabTrans = styled.div<ITab>`
  cursor: pointer;
  font-size: 1.8rem;
  padding: 2%;
  color: ${(props) => props.tab === false && "gray"};
  border-bottom: ${(props) => props.tab === true && "3px solid #0c70f2"};
`;

// ----- 계정 정보----------

export const PcModalAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.4rem;
  margin-top: 15px;
  color: gray;
  cursor: pointer;
`;
export const PcPrivateKey = styled.div`
  border: none;
  background-color: #0c70f2;
  text-align: center;
  color: white;
  width: 40%;
  padding: 2%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 40px;
  font-size: 1.5rem;
  cursor: pointer;
`;

// ------------Mobile-----------------------------------------

export const MoWrapper = styled.div`
  height: 100vh;
`;

// ----- mocontiner- top
export const MoContainer = styled.div``;
export const MoConTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 0 auto;
  font-size: 2.5rem;
  width: 90%;
  border-bottom: 1px solid gainsboro;
  padding-bottom: 5%;
`;
export const MoWalletAddress = styled.div`
  cursor: pointer;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  color: gray;
  margin-left: 10px;
  font-size: 1.4rem;
`;
export const MoModalAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  margin-top: 15px;
  color: gray;
  cursor: pointer;
`;

export const MoPrivateKey = styled.div`
  border: none;
  background-color: #0c70f2;
  text-align: center;
  color: white;
  width: 50%;
  padding: 4%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 40px;
  font-size: 1.2rem;
  cursor: pointer;
`;
export const MoImgBox = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 10%;
`;
export const MoAmount = styled.div`
  text-align: center;
  font-size: 1.8rem;
  margin-top: 3%;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
  font-weight: 650;
  margin-top: 8%;
`;

export const MoButtonBox = styled.div`
  display: flex;
  margin: 0 auto;
  width: 95%;
  height: 30%;
  margin-top: 20px;
`;
export const MoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 25%;
  line-height: 3;
  background-color: #0c70f2;
  color: white;
  font-size: 1.3rem;
  border-radius: 1rem;
  margin: 3%;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #0c70f2d4;
  }
`;

// ----mobile tab box ---------------

export const MoTabBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 30px;
`;

export const MoTabTitle = styled.div<ITab>`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 2%;
  color: ${(props) => props.tab === true && "gray"};
  border-bottom: ${(props) => props.tab === false && "3px solid #0c70f2"};
`;
export const MoTabTrans = styled.div<ITab>`
  cursor: pointer;
  font-size: 1.4rem;
  padding: 2%;
  color: ${(props) => props.tab === false && "gray"};
  border-bottom: ${(props) => props.tab === true && "3px solid #0c70f2"};
`;
