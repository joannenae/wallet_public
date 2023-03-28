import styled from "@emotion/styled";

export const PcWrapper = styled.div`
  height: 100vh;
`;
export const PcHeader = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
`;
export const PcBack = styled.img`
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
`;
export const PcLogo = styled.div`
  font-family: globalfont;
  font-size: 2.3rem;
`;
export const PcDownHeader = styled.div`
  text-align: center;
  font-size: 2.2rem;
  margin-top: 60px;
  font-weight: 600;
`;

export const PcCheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 50%;
  height: 40%;
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
  width: 80%;
  border: none;
  font-size: 1.7rem;
  height: 50%;
  :focus {
    outline: none;
  }
`;
export const PcCheckButton = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  border: none;
  height: 50px;
  width: 20%;
  border-radius: 20px;
  color: white;
  background-color: #0c70f2;
  font-size: 1.7rem;
  cursor: pointer;
`;
//-----------mobile
export const MoDownHeader = styled.div`
  text-align: center;
  font-size: 1.6rem;
  margin-top: 60px;
  font-weight: 600;
`;
export const MoCheckBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 90%;
  height: 40%;
  font-size: 1.8rem;
`;
export const MoCheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  border: 1px solid black;
`;
export const MoCheckInput = styled.input`
  width: 65%;
  border: none;
  font-size: 1.5rem;
  height: 50%;
  :focus {
    outline: none;
  }
`;
export const MoCheckButton = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  border: none;
  height: 40px;
  width: 40%;
  border-radius: 20px;
  color: white;
  background-color: #0c70f2;
  font-size: 1.5rem;
  cursor: pointer;
`;
