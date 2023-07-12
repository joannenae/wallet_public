import styled from "@emotion/styled";

export const PcTransBox = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  box-shadow: -1px 4px 10px 4px rgba(87, 87, 87, 0.25);
  margin: 0 auto;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  padding: 1% 4% 1% 4%;
  cursor: pointer;
  font-size: 2.5rem;
`;

export const PcTransType = styled.div`
  color: gray;
  /* padding-top: 7px; */
`;
export const PcTransAmount = styled.div`
  font-weight: 600;
  padding-top: 1.3%;
  font-size: 2.2rem;
`;
export const PcTransAddress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1%;
  font-size: 2.5rem;
`;
export const PcTransFee = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5%;
  padding-bottom: 1%;
`;
export const PcTransLog = styled.div`
  display: flex;
  padding-top: 1.5%;
  margin-bottom: 3%;
`;
//------mo- 트랜잭션박스 --------------------
export const MoTransBox = styled.div`
  width: 80%;
  /* height: 70%; */
  border-radius: 20px;
  box-shadow: -1px 4px 10px 4px rgba(87, 87, 87, 0.25);
  margin: 0 auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  padding: 4%;
  cursor: pointer;
  font-size: 2rem;
`;

export const MoTransType = styled.div`
  color: gray;
`;
export const MoTransAmount = styled.div`
  font-weight: 600;
  padding-top: 10px;
  font-size: 1.8rem;
`;
export const MoTransFee = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  padding-top: 4%;
`;
export const MoTransLog = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4%;
`;
