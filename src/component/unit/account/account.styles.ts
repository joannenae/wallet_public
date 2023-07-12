import styled from "@emotion/styled";

export const PcAccountHeaderBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid gainsboro;
`;
export const PcAccountHeader = styled.div`
  font-size: 1.4rem;
`;
export const PcAccountContainer = styled.li`
  list-style: none;
  font-size: 2.3rem;
  padding: 5%;
  border-bottom: 1px solid gainsboro;
  :hover {
    background-color: #fffdf2;
  }
`;
export const PcAccountName = styled.div`
  color: #0c70f2;
  font-weight: 600;
  display: flex;
  align-items: end;
`;
export const PcAccountAmount = styled.div`
  margin-top: 2%;
  word-spacing: 0.5rem;
  letter-spacing: 0.2rem;
`;

export const PcAccountFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  position: absolute;
  bottom: 10px;
  left: 5%;
`;
export const PcAccountButton = styled.div`
  width: 30%;
  height: 40px;
  font-size: 1.3rem;
  border-radius: 10px;
  line-height: 3.2;
  background-color: #0c70f2;
  color: white;
  text-align: center;
  cursor: pointer;
  :hover {
    background-color: #0c70f2d4;
  }
`;
//--------- 게정 생성
export const PCAccountInput = styled.input`
  width: 50%;
  margin: 0 auto;
  font-size: 1.5rem;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 1px solid gray;
`;

// ---------------- 계정 가져오기

export const PcUpload = styled.input`
  cursor: pointer;
  ::-webkit-file-upload-button {
    display: none;
  }
`;

//------mobile 게정 생성
export const MoAccountInput = styled.input`
  width: 0%;
  margin: 0 auto;
  font-size: 1.5rem;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: 1px solid black;
`;
