import styled from "@emotion/styled";
import Select from "react-select";

export const PcTitle = styled.div`
  font-size: 1.6rem;
  margin: 5%;
  font-weight: 600;
  text-align: center;
  color: #0c70f2;
  /* padding-top: 5%; */
`;
export const PcSwapInput = styled.input`
  height: 36px;
  border: none;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.257);
  border-radius: 5px;
  margin-left: 10px;

  font-size: 1.5rem;
  :focus {
    outline: none;
  }
`;
export const StyledSelect = styled(Select)`
  font-size: 30px;
  ::placeholder {
    font-size: 30px;
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
