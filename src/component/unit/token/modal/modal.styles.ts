import styled from "@emotion/styled";
import Select from "react-select";

export const PcTokenHead = styled.div`
  text-align: center;
  font-size: 1.8rem;
  color: #0c70f2;
  font-weight: 600;
  margin-top: 20px;
`;
export const PcModal = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;
export const PcModalText = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;
export const PcModalInput = styled.input`
  margin-top: 7px;
  padding: 10px;
  height: 35px;
  font-size: 1.5rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid gray;
  ::placeholder {
    color: lightgray;
  }
  :focus {
    outline: 1px solid black;
  }
`;

export const StyledSelect = styled(Select)`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 50px;
`;
//--------mobile

//-----mo token modal
export const MoTokenHead = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #0c70f2;
  font-weight: 600;
`;
export const MoModal = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;
export const MoModalText = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
`;
export const MoModalInput = styled.input`
  margin-top: 7px;
  padding: 10px;
  height: 30px;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 5px;
  border: 1px solid gray;
  ::placeholder {
    color: lightgray;
  }
`;
