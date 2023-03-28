import { Mobile, PC } from "../../../commons/hooks/mediaquery";
import * as S from "./find.styles";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function FindPresenter(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  const [status, setStatus] = useState(false);

  const onClickTabId = () => {
    setStatus(false);
  };
  const onClickTabPw = () => {
    setStatus(true);
  };

  return (
    <>
      <Mobile>
        <S.MoContainer data-aos="fade-down">
          <S.MoHeader>아이디/ 비밀번호 찾기</S.MoHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "2.5rem",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  fontSize: "2.5rem",
                  textAlign: "center",
                  margin: "0 auto",
                  marginTop: 60,
                }}
              >
                <S.MoTest onClick={onClickTabId} status={status}>
                  아이디
                </S.MoTest>
                <S.MoTestPw onClick={onClickTabPw} status={status}>
                  비밀번호
                </S.MoTestPw>
              </div>
              {status ? (
                <div style={{ width: "100%", marginTop: 30 }}>
                  <S.MoPwBox>
                    <S.MoPwInput placeholder="이메일 주소" />
                    <S.MoPwButton>비밀번호 찾기</S.MoPwButton>
                  </S.MoPwBox>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    marginTop: 30,
                  }}
                >
                  <S.MoInputBox>
                    <S.MoInput placeholder="이메일 주소" />
                    <S.MoButton>인증번호 전송</S.MoButton>
                  </S.MoInputBox>
                  <S.MoInputBox>
                    <S.MoInput placeholder="인증번호 입력" />
                    <S.MoButton>확인</S.MoButton>
                  </S.MoInputBox>
                  <S.MoCheck>아이디 찾기</S.MoCheck>
                </div>
              )}
            </div>
          </div>
          <S.MoFooter onClick={props.onClickMoveToPage("/")}>
            <S.MoFooterText>로그인으로 돌아가기</S.MoFooterText>
            <S.MoFooterImg src="/image/rightarrow.png" />{" "}
          </S.MoFooter>
        </S.MoContainer>
      </Mobile>
      <PC>
        <S.PcContainer data-aos="fade-down">
          <S.PcHeader>아이디/ 비밀번호 찾기</S.PcHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: "2.5rem",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "50%",
                  fontSize: "3.3rem",
                  textAlign: "center",
                  margin: "0 auto",
                  marginTop: 60,
                }}
              >
                <S.Test onClick={onClickTabId} status={status}>
                  아이디
                </S.Test>
                <S.TestPw onClick={onClickTabPw} status={status}>
                  비밀번호
                </S.TestPw>
              </div>
              {status ? (
                <div style={{ width: "100%", marginTop: 30 }}>
                  <S.PcPwBox>
                    <S.PcPwInput placeholder="이메일 주소" />
                    <S.PcPwButton>비밀번호 찾기</S.PcPwButton>
                  </S.PcPwBox>
                </div>
              ) : (
                <div style={{ width: "100%", marginTop: 30 }}>
                  <S.PcInputBox>
                    <S.PcInput placeholder="이메일 주소" />
                    <S.PcButton>인증번호 전송</S.PcButton>
                  </S.PcInputBox>
                  <S.PcInputBox>
                    <S.PcInput placeholder="인증번호 입력" />
                    <S.PcButton>확인</S.PcButton>
                  </S.PcInputBox>
                  <S.PcCheck>아이디 찾기</S.PcCheck>
                </div>
              )}
            </div>
          </div>
          <S.PcFooter onClick={props.onClickMoveToPage("/")}>
            <S.PcFooterText>로그인으로 돌아가기</S.PcFooterText>
            <S.PcFooterImg src="/image/rightarrow.png" />{" "}
          </S.PcFooter>
        </S.PcContainer>
      </PC>
    </>
  );
}
