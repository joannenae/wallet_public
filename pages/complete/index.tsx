import { Button } from "antd";
import { useRouter } from "next/router";
import { Mobile, PC } from "../../src/commons/hooks/mediaquery";
import styled from "@emotion/styled";

export const PcWrapper = styled.div`
  height: 400px;
  height: 100vh;
`;
export const PcDownHeader = styled.h1`
  text-align: center;
  padding-top: 7%;
  font-size: 2.7rem;
`;

export const PcDreamHeader = styled.h1`
  text-align: center;
  padding-top: 1%;
  font-size: 3.5rem;
`;

export const PcBox = styled.div`
  width: 80%;
  height: 55%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 7%;
`;
export const PcImage = styled.img`
  width: 15%;
  padding-top: 8%;
`;
export const PcContentLeft = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  text-align: center;
`;
export const PcContentRight = styled.div`
  width: 40%;
  border: 1.2px solid black;
  border-radius: 10px;
  text-align: center;
  position: relative;
`;
export const AlertHead = styled.div`
  padding-top: 5%;
  font-size: 2rem;
`;
export const AlertSmall = styled.div`
  padding-top: 1.5%;
  font-size: 1.5rem;
  color: gray;
`;

export const Error = styled.span`
  color: red;
  font-size: 13px;
  padding: 15px 0px 0px 0px;
`;
//-----------Mobile
export const MobileBottomContainer = styled.div`
  height: 100vh;
`;
export const MobileHeader = styled.h2`
  font-size: 1.7rem;
  text-align: center;
  margin-top: 10%;
`;
export const MobileDreamHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-top: 5%;
`;
export const MobileBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const MobileContentTop = styled.div`
  width: 87%;
  height: 27%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15%;
`;
export const MobileFlex = styled.div`
  padding: 4%;
`;
export const MobileAlert = styled.div`
  font-size: 1.3rem;
  margin-top: 5%;
`;
export const MobileSmall = styled.div`
  font-size: 1.2rem;
  color: gray;
  padding-top: 4%;
  height: 40px;
`;
export const MobileContentBottom = styled.div`
  width: 87%;
  height: 27%;
  margin: 0 auto;
  border: 1px solid black;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15%;
`;

export const MobileImage = styled.img`
  width: 13%;
`;

export const MoMemo = styled.div`
  text-align: center;
  margin-bottom: 60px;
  font-size: 1.3rem;
  color: gray;
`;
export const MoError = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 20px;
`;

export default function JoinComplete(props: any) {
  const router = useRouter();

  const onClickGetWallet = () => {
    router.push(`/getwallet`);
  };
  const onClickCreateWallet = () => {
    router.push(`/createwallet`);
  };

  return (
    <>
      <Mobile>
        <MobileBottomContainer id="1">
          <MobileBox>
            <MobileHeader>회원가입이 완료되었습니다!</MobileHeader>
            <MobileDreamHeader>DreamSecurity가 처음이세요?</MobileDreamHeader>
            <MobileContentTop data-aos="fade-down">
              <MobileFlex>
                <MobileImage src="/image/uploadsecret.png" />
                <MobileAlert>
                  {" "}
                  아니요.이미 비밀 복구 구문이 있습니다.
                </MobileAlert>
                <MobileSmall>
                  {" "}
                  비밀 복구 구문을 사용하여 기존 지갑 가져오기
                </MobileSmall>
                <Button
                  type="primary"
                  style={{
                    marginTop: "10px",
                    width: "50%",
                    fontSize: "1.9rem",
                    height: 38,
                    paddingTop: 0,
                    backgroundColor: "#0c70f2",
                  }}
                  onClick={onClickGetWallet}
                >
                  지갑 가져오기
                </Button>
              </MobileFlex>
            </MobileContentTop>
            <MobileContentBottom data-aos="fade-down">
              <MobileFlex>
                <MobileImage src="/image/addnew.png" />
                <MobileAlert> 설정을 시작하죠!</MobileAlert>
                <MobileSmall>
                  {" "}
                  이렇게 하면 새 지갑과 비밀 복구 구문이 만들어집니다.
                </MobileSmall>
                <Button
                  type="primary"
                  style={{
                    marginTop: "10px",
                    width: "50%",
                    fontSize: "1.9rem",
                    height: 38,
                    paddingTop: 0,
                    backgroundColor: "#0c70f2",
                  }}
                  onClick={onClickCreateWallet}
                >
                  지갑 생성
                </Button>
              </MobileFlex>
            </MobileContentBottom>
          </MobileBox>
        </MobileBottomContainer>
      </Mobile>
      <PC>
        <PcWrapper ref={props.element}>
          <PcDownHeader>회원가입이 완료되었습니다!</PcDownHeader>
          <PcDreamHeader>DreamSecurity가 처음인가요?</PcDreamHeader>
          <PcBox>
            <PcContentLeft data-aos="fade-right">
              <PcImage src="/image/uploadsecret.png" />
              <AlertHead>아니요.이미 비밀 복구 구문이 있습니다.</AlertHead>
              <AlertSmall>
                비밀 복구 구문을 사용하여 기존 지갑 가져오기
              </AlertSmall>
              <Button
                type="primary"
                style={{
                  marginTop: "6%",
                  width: "50%",
                  borderRadius: "15px",
                  fontSize: "2.5rem",
                  paddingTop: 0,
                  height: 51,
                  fontWeight: 600,
                  backgroundColor: "#0c70f2",
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%,0%)",
                }}
                onClick={onClickGetWallet}
              >
                지갑 가져오기
              </Button>
            </PcContentLeft>
            <PcContentRight data-aos="fade-left">
              {" "}
              <PcImage src="/image/addnew.png" />
              <AlertHead>설정을 시작하죠!</AlertHead>
              <AlertSmall>
                이렇게 하면 새 지갑과 비밀 복구 구문이 만들어집니다.
              </AlertSmall>
              <Button
                type="primary"
                style={{
                  marginTop: "6%",
                  width: "50%",
                  borderRadius: "15px",
                  fontSize: "2.5rem",
                  paddingTop: 0,
                  height: 51,
                  fontWeight: 600,
                  backgroundColor: "#0c70f2",
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%,0%)",
                }}
                onClick={onClickCreateWallet}
              >
                지갑 생성
              </Button>
            </PcContentRight>
          </PcBox>
        </PcWrapper>
      </PC>
    </>
  );
}
