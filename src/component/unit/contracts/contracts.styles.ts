import styled from "@emotion/styled";

interface DataProps {
  data: string;
}

export const PcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  margin-top: 2%;
  margin-bottom: 7%;
  padding: 20px;
  border-radius: 10px;
`;

export const PcLeft = styled.div`
  width: 100%;
  /* height: 100%; */
  background-color: white;
  border-radius: 10px;
  padding: 15px;
`;
export const PcRight = styled.div<DataProps>`
  width: 100%;
  background: ${(props) => (props.data ? "" : "#1e2029")};
  height: ${(props) => (props.data ? "" : "600px")};
  /* border-radius: 10px; */
  margin-top: 20px;
  font-size: 1.6rem;
  padding: 25px;
`;
//----------left

export const PcHeader = styled.div`
  font-size: 1.5rem;
  color: gray;
  font-weight: 550;
`;
//----- settings
export const PcArticle = styled.div`
  display: flex;
  color: gray;
`;

//--- features
export const PcDiv = styled.div`
  margin: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PcText = styled.div`
  font-size: 1.6rem;
  margin-left: 10px;
  color: gray;
`;
//-------button
export const PcButton = styled.button`
  margin: 10px;
  font-size: 1.8rem;
  font-family: globalfont;
  background-color: #0c70f2;
  color: #ffffff;
  border: none;
  width: 130px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  :disabled {
    background-color: gainsboro;
  }
  :hover {
    background-color: #0c70f29a;
  }
`;
