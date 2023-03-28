import styled from "@emotion/styled";

export const PcTitle = styled.div`
  font-size: 1.6rem;
  margin: 5%;
  font-weight: 600;
  text-align: center;
  /* padding-top: 5%; */
`;
export const PcSwapInput = styled.input`
  height: 30px;
  border: none;
  border-left: 1px solid gray;
  /* margin-left: 20px; */
  padding: 10px;
  font-size: 1.5rem;
  :focus {
    outline: none;
  }
`;
//-----------mobile ----------

export const MoTitle = styled.div`
  font-size: 1.4rem;
  margin: 7% 5% 5% 5%;
  font-weight: 600;
  text-align: center;
`;
export const MoSwapInput = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  border-left: 1px solid gray;
  /* margin-left: 20px; */
  padding: 10px;
  font-size: 1.5rem;
  :focus {
    outline: none;
  }
`;
