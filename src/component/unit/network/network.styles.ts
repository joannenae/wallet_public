import styled from "@emotion/styled";

export const PcWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid gainsboro;
  box-shadow: 11px -12px 13px 0px rgb(208 208 208 / 25%);
`;
export const PcHeader = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 30px 0px 20px 0px;
`;
export const PcPath = styled.div`
  display: flex;
  align-items: center;
`;
export const PcHome = styled.div`
  font-size: 2.4rem;
  color: #0c70f2;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #0c70f2a5;
  }
`;
export const PcLeft = styled.div`
  font-size: 2.7rem;
  color: #0c70f2;
  font-weight: 600;
`;
export const PcRight = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  color: #0c70f2;
  :hover {
    color: #0c70f2a5;
  }
`;
// -----pc bottom

export const PcBottom = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 40px;
`;
export const PcListBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 35px;
  cursor: pointer;
`;
export const PcImgBox = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  :hover {
    color: gray;
  }
`;
export const PcListImg = styled.img`
  width: 10%;
`;
export const PcList = styled.div`
  font-size: 1.8rem;
  margin-left: 10px;
`;
export const PcImgAdd = styled.img`
  width: 30px;
  height: 30px;
`;
//-----pc 네트워크 추가 모달

// 네트워크 추가
export const PcModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const PcFlexbox = styled.div`
  text-align: center;
  margin: 0px 0px 5px 0px;
`;
export const PcTitle = styled.div`
  font-size: 1.4rem;
  margin: 10px;
`;
export const PcInput = styled.input`
  width: 60%;
  height: 35px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 10px;
  font-size: 1.3rem;
  :focus {
    outline: 1px solid black;
  }
  :disabled {
    background-color: gainsboro;
  }
`;
// 네트워크 리스트 선택 모달
export const PcNetDiv = styled.div`
  font-weight: 650;
  padding-top: 10px;
`;

// --------------------mobile
export const MoWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid gainsboro;
  box-shadow: 11px -12px 13px 0px rgb(208 208 208 / 25%);
`;
export const MoHeader = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 30px 0px 20px 0px;
`;
export const MoLeft = styled.div`
  font-size: 1.5rem;
  color: #0c70f2;
  font-weight: 600;
`;
export const MoRight = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  color: #0c70f2;
  :hover {
    color: #0c70f2a5;
  }
`;
//-----mobile list

export const MoBottom = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-bottom: 30px;
`;
export const MoImgBox = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  :hover {
    color: gray;
  }
`;
export const MoListImg = styled.img`
  width: 20%;
`;
export const MoList = styled.div`
  font-size: 1.5rem;
  margin-left: 10px;
`;
export const MoImgAdd = styled.img`
  width: 20px;
  height: 20px;
`;
