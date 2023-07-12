import { useRouter } from "next/router";
import styled from "@emotion/styled";

export const PcHeader = styled.div`
  width: 90%;
  height: 5%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PcHeaderFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const PcHeaderContract = styled.div`
  position: relative;
  font-size: 1.8rem;
  margin-left: 20px;
  cursor: pointer;
  font-family: globalfont;
  ::after {
    position: absolute;
    content: "";
    display: block;
    border-bottom: 3px solid #0c70f2;
    transition: all 250ms ease-out;
    left: 50%;
    width: 0;
  }
  :hover::after {
    transition: all 250ms ease-out;
    left: 0%;
    width: 100%;
  }
`;

export const PcLogo = styled.div`
  font-size: 30px;
  font-family: globalfont;
  cursor: pointer;
`;
export const PcHeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  font-size: 2.5rem;
`;

export const PcUser = styled.img`
  width: 60%;
`;

export const PcNetCirBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
  position: relative;
  margin-left: 10px;
`;
export const PcActive = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
`;
export const PcCir = styled.div`
  color: #14e174;
`;

export const PcNet = styled.div`
  font-size: 1.8rem;
  padding-left: 7px;
`;
export const PcNetBox = styled.div`
  box-shadow: -1px 4px 10px 4px rgba(87, 87, 87, 0.25);
  border-radius: 10px;
  background-color: white;
  width: 100%;
  height: 160px;
  position: absolute;
  right: 0;
  top: 35px;
  z-index: 1;
  overflow-y: scroll;
`;

export const PcNetlist = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  padding: 6% 6% 4% 8%;
  color: gray;
  :hover {
    color: #0c70f2;
  }
`;
export const PcListCir = styled.div`
  margin-right: 5px;
`;
export const PcList = styled.div`
  font-size: 1.7rem;
`;

export const PcNetAdd = styled.div`
  font-size: 1.4rem;
  bottom: 0;
  padding: 2%;
  margin-top: 10px;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid gainsboro;
  padding-bottom: 10px;
  text-align: center;
  font-weight: 500;
  :hover {
    color: #0c70f2;
  }
`;

// --------계정선택-------------------------------------
export const PcAccount = styled.div`
  cursor: pointer;
  position: relative;
  /* width: 25%; */
`;
export const PcAccountActive = styled.div`
  box-shadow: -1px 4px 10px 4px rgba(87, 87, 87, 0.25);
  border-radius: 10px;
  background-color: white;
  width: 300px;
  height: 310px;
  position: absolute;
  right: -120px;
  top: 45px;
  z-index: 1;
`;

//-----------mobile

export const MoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8% 8% 0% 8%;
`;

export const MoHeaderContract = styled.div`
  position: relative;
  font-size: 1.4rem;
  margin-top: 10px;
  cursor: pointer;
  font-family: globalfont;
  ::after {
    position: absolute;
    content: "";
    display: block;
    border-bottom: 3px solid #0c70f2;
    transition: all 250ms ease-out;
    left: 50%;
    width: 0;
  }
  :hover::after {
    transition: all 250ms ease-out;
    left: 0%;
    width: 100%;
  }
`;

export const MoLogo = styled.div`
  font-size: 2rem;
  font-family: globalfont;
`;
export const MoHeaderRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const MoNetCirBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-left: 5px;
  /* width: 50%; */
`;
export const MoActive = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;
export const MoCir = styled.div`
  color: #14e174;
`;
export const MoNet = styled.div`
  margin-left: 7px;
  font-size: 1.3rem;
  width: 100%;
`;

export const MoNetlist = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding: 7%;
  color: gray;
  :hover {
    color: #0c70f2;
  }
`;

export const MoListCir = styled.div``;
export const MoList = styled.div`
  margin-left: 10px;
  font-size: 1.4rem;
`;
export const MoNetAdd = styled.div`
  font-size: 1.2rem;
  bottom: 0;
  left: 15%;
  padding: 2%;
  text-align: center;
  height: 25px;
  border-top: 1px solid gainsboro;
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const MoNetBox = styled.div`
  box-shadow: -1px 4px 10px 4px rgba(87, 87, 87, 0.25);
  border-radius: 10px;
  background-color: white;
  width: 100%;
  height: 110px;
  position: absolute;
  right: 0;
  top: 35px;
  z-index: 1;
  overflow-y: scroll;
`;

// -----mobile 게정관리

export const MoAccountActive = styled.div`
  box-shadow: -1px 4px 10px 4px rgba(87, 87, 87, 0.25);
  border-radius: 10px;
  background-color: white;
  width: 250px;
  /* height: 250px; */
  height: 300px;
  position: absolute;
  right: 0;
  top: 45px;
  z-index: 1;
`;

export const MoAccountFooter = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 5%;
  margin-bottom: 7%;
`;

export const MoAccountButton = styled.div`
  width: 30%;
  height: 28px;
  font-size: 1.1rem;
  border-radius: 5px;
  line-height: 2.5;
  background-color: #0c70f2;
  color: white;
  text-align: center;
`;
