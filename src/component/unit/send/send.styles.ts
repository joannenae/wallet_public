import styled from "@emotion/styled";

export const PcWrapper = styled.div``;
export const PcHeader = styled.div`
  font-size: 1.7rem;
  text-align: center;
  margin-top: 20px;
  font-weight: 600;
`;
export const PcContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 50px;
  /* border: 1px solid red; */
`;
export const PcFlex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;
export const PcBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PcSend = styled.div`
  font-weight: 550;
  font-size: 1.4rem;
  padding-right: 15px;
`;
export const PcTitle = styled.div`
  font-weight: 550;
  font-size: 1.4rem;
  width: 25%;
`;
export const PcInfo = styled.div`
  background-color: #fffdf2;
  font-size: 1.4rem;
`;
export const PcToken = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 20px 0px;
`;
// ---- 수량
export const PcAmount = styled.div`
  position: relative;
  width: 150px;
  height: 35px;
  border-radius: 6px;
  border: 1px solid gray;
  font-size: 1.4rem;
  text-align: right;
  padding-top: 5px;
  padding-right: 10px;
  color: gray;
`;
export const PcAmountInput = styled.input`
  position: absolute;
  left: 0;
  padding-top: 3px;
  margin-left: 15px;
  width: 60%;
  border: none;
  font-size: 1.4rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: lightgray;
  }
`;

//----------mobile
export const MoBox = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0px 0px 0px;
`;
export const MoSend = styled.div`
  font-weight: 550;
  width: 40%;
  font-size: 1.4rem;
`;
export const MoInfo = styled.div`
  background-color: #fffdf2;
  font-size: 1.4rem;
`;
export const MoContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const MoToken = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 20px 0px;
`;
export const MoTitle = styled.div`
  font-weight: 550;
  font-size: 1.4rem;
  width: 40%;
`;
